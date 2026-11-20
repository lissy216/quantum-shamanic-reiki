'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { GUIDE, GUIDE_STYLE as S } from '@/lib/guide/config'

// Turns bare site paths (/contact) and full URLs into links.
const LINK = /(https?:\/\/[^\s)]+[^\s).,;:!?'"]|(?<![\w/])\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)*)/g

function linkify(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0
    if (i > last) out.push(text.slice(last, i))
    const href = m[0]
    const external = href.startsWith('http')
    out.push(
      <a
        key={i}
        href={href}
        className={`underline underline-offset-2 break-words ${S.link}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {external ? href.replace(/^https?:\/\/(www\.)?/, '') : href}
      </a>
    )
    last = i + href.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function SiteGuide() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, error, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/guide' }),
  })
  const scroller = useRef<HTMLDivElement>(null)
  const field = useRef<HTMLTextAreaElement>(null)
  const launcher = useRef<HTMLButtonElement>(null)
  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight })
  }, [messages, status])

  useEffect(() => {
    if (!open) return
    field.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        launcher.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function send(text: string) {
    const t = text.trim()
    if (!t || busy) return
    sendMessage({ text: t })
    setInput('')
  }

  return (
    <>
      {!open && (
        <button
          ref={launcher}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 border px-4 py-3 text-left shadow-lg shadow-black/40 transition-colors ${S.launcher}`}
        >
          <span aria-hidden className={`text-lg leading-none ${S.accent}`}>&#10022;</span>
          <span className="flex flex-col">
            <span className={`text-sm tracking-[0.15em] uppercase ${S.title}`}>{GUIDE.name}</span>
            <span className={`text-xs ${S.muted}`}>{GUIDE.role}</span>
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="guide-title"
          className={`fixed z-50 inset-x-2 bottom-2 top-20 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[24rem] sm:h-[min(36rem,calc(100vh-7rem))] flex flex-col border shadow-2xl shadow-black/50 ${S.panel}`}
        >
          <div className={`flex items-start justify-between gap-4 px-5 py-4 border-b ${S.rule}`}>
            <div>
              <p id="guide-title" className={`text-base tracking-[0.15em] uppercase ${S.title}`}>
                {GUIDE.name}
              </p>
              <p className={`text-xs ${S.muted}`}>An AI chatbot, not a person. It can make mistakes.</p>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => setMessages([])}
                  className={`text-[10px] tracking-[0.2em] uppercase px-2 py-1 ${S.muted} hover:underline`}
                >
                  New
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => launcher.current?.focus(), 0)
                }}
                aria-label={`Close ${GUIDE.name}`}
                className={`text-2xl leading-none px-2 ${S.muted}`}
              >
                &times;
              </button>
            </div>
          </div>

          <div
            ref={scroller}
            className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-base leading-relaxed"
            aria-live="polite"
          >
            <p>{GUIDE.greeting}</p>

            {messages.length === 0 && (
              <div className="flex flex-col gap-2 pt-1">
                {GUIDE.starters.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className={`text-left border px-3 py-2 text-sm transition-colors ${S.chip}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : ''}>
                <div
                  className={
                    m.role === 'user'
                      ? `max-w-[85%] px-4 py-2 whitespace-pre-wrap break-words ${S.userBubble}`
                      : 'whitespace-pre-wrap break-words'
                  }
                >
                  {m.role === 'assistant' && <span className="sr-only">{GUIDE.name}: </span>}
                  {m.parts.map((p, i) =>
                    p.type === 'text' ? (
                      <span key={i}>{m.role === 'assistant' ? linkify(p.text) : p.text}</span>
                    ) : null
                  )}
                </div>
              </div>
            ))}

            {status === 'submitted' && <p className={`italic ${S.muted}`}>{GUIDE.name} is writing&hellip;</p>}
            {error && (
              <p className="text-sm text-red-400">
                Something went wrong reaching {GUIDE.name}. Please try again in a moment.
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className={`border-t px-3 py-3 flex gap-2 items-end ${S.rule}`}
          >
            <label htmlFor="guide-input" className="sr-only">
              Message {GUIDE.name}
            </label>
            <textarea
              id="guide-input"
              ref={field}
              rows={1}
              maxLength={1500}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder={GUIDE.placeholder}
              className={`flex-1 resize-none border px-3 py-2 text-base focus:outline-none max-h-32 ${S.input}`}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className={`text-xs tracking-[0.2em] uppercase border px-4 py-2.5 disabled:opacity-40 ${S.button}`}
            >
              Send
            </button>
          </form>
          <p className={`px-5 pb-3 text-[11px] ${S.muted}`}>
            {GUIDE.footnote}
          </p>
        </div>
      )}
    </>
  )
}
