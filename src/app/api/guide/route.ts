import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from 'ai'
import { guideInstructions } from '@/lib/guide/instructions'
import { GUIDE_ALLOWED_HOSTS, GUIDE_VERCEL_PREFIX } from '@/lib/guide/config'

export const runtime = 'nodejs'
export const maxDuration = 30

// The site's chatbot. The model runs through Vercel AI Gateway, which signs in by
// itself on Vercel (OIDC), so there is no AI key to store. Spend shows on the
// team's AI Gateway page and shares the same credit as the other sites.
const MODEL = 'anthropic/claude-sonnet-5.5'

const MAX_USER_TURNS = 30
const MAX_HISTORY = 24
const MAX_CHARS = 1500

// Best-effort per-IP limit; each server instance keeps its own count.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 40
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function allowedOrigin(origin: string | null) {
  if (!origin) return false
  try {
    const host = new URL(origin).hostname
    return (
      host === 'localhost' ||
      (host.endsWith('.vercel.app') && host.startsWith(GUIDE_VERCEL_PREFIX)) ||
      GUIDE_ALLOWED_HOSTS.some((h) =>
        h.startsWith('.') ? host.endsWith(h) || host === h.slice(1) : host === h
      )
    )
  } catch {
    return false
  }
}

function textOf(m: UIMessage) {
  return m.parts.map((p) => (p.type === 'text' ? p.text : '')).join('')
}

export async function POST(req: Request) {
  if (!allowedOrigin(req.headers.get('origin'))) {
    return new Response('Forbidden', { status: 403 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return new Response('Too many messages. Please rest a while and come back.', { status: 429 })
  }

  let messages: UIMessage[]
  try {
    ;({ messages } = await req.json())
    if (!Array.isArray(messages) || messages.length === 0) throw new Error()
  } catch {
    return new Response('Invalid request.', { status: 400 })
  }

  const userTurns = messages.filter((m) => m.role === 'user')
  if (userTurns.length > MAX_USER_TURNS) {
    return new Response('This conversation has reached its length. Please start a new one.', {
      status: 413,
    })
  }
  if (userTurns.some((m) => textOf(m).length > MAX_CHARS)) {
    return new Response('That message is too long for this small window.', { status: 413 })
  }

  const result = streamText({
    model: MODEL,
    instructions: guideInstructions(),
    messages: await convertToModelMessages(messages.slice(-MAX_HISTORY)),
    // The model thinks before it answers, and that thinking counts against this
    // limit. Low reasoning suits a short chat; the limit is a safety net, and the
    // replies stay short by instruction. At 600 with default reasoning, heavy
    // questions could be cut off mid-sentence.
    reasoning: 'low',
    maxOutputTokens: 2000,
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}
