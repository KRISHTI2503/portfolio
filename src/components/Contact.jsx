import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

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

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-72 h-72 sm:w-[400px] sm:h-[400px] bg-teal-500/5 left-1/2 -translate-x-1/2 top-0 pointer-events-none" />

      <div className="max-w-xl mx-auto text-center">
        <SectionTitle
          label="Contact"
          title={<>Let's <span className="gradient-text">Connect</span></>}
          subtitle="Open to collaborations, internships, or just a friendly chat."
        />
        <p className="reveal reveal-delay-2 flex items-center justify-center gap-1.5 text-slate-500 text-sm font-mono mt-2">
          <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Nadiad, Gujarat, India
        </p>

        {/* 4 icon buttons in a row */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap justify-center gap-5 sm:gap-6">
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
              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:text-teal-400 group-hover:border-teal-400/50 group-hover:bg-teal-400/5 group-hover:shadow-[0_0_24px_rgba(13,148,136,0.25)] group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
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
    </section>
  )
}
