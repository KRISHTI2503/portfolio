import { useState } from 'react'
import emailjs from '@emailjs/browser'
import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

// ── EmailJS config ──────────────────────────────────────────
// Replace these three values with your actual EmailJS credentials:
//   https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEFghiJKL'
// ────────────────────────────────────────────────────────────

const socials = [
  {
    label: 'Email',
    href: 'mailto:krishti2503@gmail.com',
    isStroke: true,
    path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/KRISHTI2503',
    isStroke: false,
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krishti-patel-5027a831b/',
    isStroke: false,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/krishti25',
    isStroke: false,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
]

function MessageCard() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [focused, setFocused] = useState(null)

  const inputBase = (field) =>
    `w-full bg-white/[0.04] border rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 ${
      focused === field
        ? 'border-teal-500/60 shadow-[0_0_12px_rgba(13,148,136,0.15)] bg-white/[0.06]'
        : 'border-white/[0.08] hover:border-white/[0.15]'
    }`

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name:  form.name,
          user_email: form.email,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="glass-card p-5 w-full max-w-[460px] mx-auto md:mx-0">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
          <div className="w-12 h-12 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-semibold text-sm">Message sent!</p>
          <p className="text-slate-400 text-xs">I'll get back to you soon.</p>
          <button
            onClick={() => setStatus('idle')}
            className="text-xs text-teal-400 hover:underline mt-1"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Send a Message
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text" required placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
              className={inputBase('name')}
            />
            <input
              type="email" required placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
              className={inputBase('email')}
            />
          </div>

          <textarea
            required rows={3} placeholder="Your message..."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
            className={`${inputBase('message')} resize-none`}
          />

          {status === 'error' && (
            <p className="text-red-400 text-xs font-mono">
              Failed to send message. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
          >
            {status === 'sending' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-72 h-72 sm:w-[400px] sm:h-[400px] bg-teal-500/5 left-1/2 -translate-x-1/2 top-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Contact"
          title={<>Let's <span className="gradient-text">Connect</span></>}
          subtitle="Open to collaborations, internships, or just a friendly chat."
        />

        {/* Two-column on md+, stacked on mobile */}
        <div className="reveal reveal-delay-2 flex flex-col md:flex-row gap-10 md:gap-14 items-start justify-center">

          {/* Left — social links + location */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
            <p className="flex items-center gap-1.5 text-slate-500 text-sm font-mono">
              <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nadiad, Gujarat, India
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:text-teal-400 group-hover:border-teal-400/50 group-hover:bg-teal-400/5 group-hover:shadow-[0_0_20px_rgba(13,148,136,0.2)] group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill={s.isStroke ? 'none' : 'currentColor'}
                      stroke={s.isStroke ? 'currentColor' : 'none'}
                      strokeWidth={s.isStroke ? 2 : 0}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap={s.isStroke ? 'round' : undefined}
                        strokeLinejoin={s.isStroke ? 'round' : undefined}
                        d={s.path}
                      />
                    </svg>
                  </span>
                  <span className="text-slate-600 text-xs font-mono group-hover:text-teal-500 transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — compact message card */}
          <MessageCard />
        </div>
      </div>
    </section>
  )
}
