import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

// Inline SVG paths — same stroke style as Projects & Achievements icons
const icons = {
  btech: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  hsc:   'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  ssc:   'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
}

const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Dharmsinh Desai University, Nadiad, Gujarat',
    period: '2024 – 2028',
    status: 'Currently Pursuing',
    highlights: ['Current CPI: 8.82'],
    icon: icons.btech,
    color: 'from-teal-500/15 to-cyan-500/5',
    border: 'border-teal-500/30',
    statusColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  },
  {
    degree: 'HSC — 12th Grade',
    institution: 'DGES School, Idar',
    period: '2023 – 2024',
    status: 'Completed',
    highlights: ['Percentage: 94.66%'],
    icon: icons.hsc,
    color: 'from-cyan-500/15 to-blue-500/5',
    border: 'border-cyan-500/30',
    statusColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  {
    degree: 'SSC — 10th Grade',
    institution: 'DGES, Idar',
    period: '2021 – 2022',
    status: 'Completed',
    highlights: ['Percentage: 92.16%'],
    icon: icons.ssc,
    color: 'from-emerald-500/15 to-teal-500/5',
    border: 'border-emerald-500/30',
    statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[350px] sm:h-[350px] bg-teal-500/5 -right-32 top-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="Background"
          title={<span className="gradient-text">Education</span>}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — only on sm+ */}
          <div className="hidden sm:block absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/60 via-teal-500/25 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative sm:pl-20`}>
                {/* Timeline node — SVG icon matching Projects/Achievements style */}
                <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/30 items-center justify-center shadow-[0_0_20px_rgba(13,148,136,0.1)]">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={edu.icon} />
                  </svg>
                </div>

                <div className={`glass-card bg-gradient-to-br ${edu.color} border ${edu.border} p-5 sm:p-6 group transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:scale-[0.99]`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 sm:hidden">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={edu.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-black text-base leading-tight group-hover:text-teal-300 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-teal-400 text-xs font-mono mt-0.5 break-words">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <h3 className="text-white font-black text-lg group-hover:text-teal-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-teal-400 text-sm font-mono mt-0.5 break-words">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-lg text-xs font-mono">
                        {edu.period}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span key={h} className="flex items-center gap-1.5 text-slate-400 text-xs bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
