// Aurora, the Quantum Shamanic Reiki chatbot: name, words and colours.

export const GUIDE = {
  name: 'Aurora',
  role: 'AI guide to QSR',
  greeting:
    "Hello. I'm Aurora, an AI chatbot for Quantum Shamanic Reiki. I can answer questions about Reiki sessions, the four training levels, the book Reiki Evolved, and how to get in touch. I'm not a person, and I'm not a practitioner.",
  starters: [
    'What happens in a distance session?',
    'How do I start Level I training?',
    'Can Reiki replace my treatment?',
  ],
  placeholder: 'Ask about sessions or training',
  footnote:
    'Not for crisis support. In Canada or the US, call or text 988. Chats are not saved here.',
}

// Hosts allowed to call the chatbot. A leading dot allows any subdomain.
export const GUIDE_ALLOWED_HOSTS = ['quantumshamanicreiki.com', '.quantumshamanicreiki.com']
// Vercel preview addresses for this project start with this.
export const GUIDE_VERCEL_PREFIX = 'quantum-shamanic-reiki'

export const GUIDE_STYLE = {
  launcher: 'bg-charcoal-soft/95 border-gold/60 hover:border-gold text-ivory',
  panel: 'bg-charcoal-soft border-gold/40 text-ivory',
  title: 'font-display text-ivory',
  accent: 'text-gold',
  muted: 'text-ivory/60',
  rule: 'border-ivory/15',
  chip: 'border-ivory/20 text-ivory/80 hover:border-gold/60 hover:text-ivory',
  userBubble: 'bg-crimson-deep text-ivory',
  input: 'bg-charcoal border-ivory/20 text-ivory placeholder:text-ivory/50 focus:border-gold',
  button: 'border-gold text-gold hover:bg-gold/10',
  link: 'text-gold-light decoration-gold/50 hover:text-gold',
}
