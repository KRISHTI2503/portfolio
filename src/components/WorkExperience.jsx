import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

export default function WorkExperience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[300px] sm:h-[300px] bg-cyan-500/5 -left-32 top-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="// career"
          title={<>Work <span className="gradient-text">Experience</span></>}
        />

        {/* Empty state placeholder */}
        <div className="reveal reveal-delay-2 flex justify-center">
          <div className="glass-card border border-dashed border-teal-500/25 bg-teal-500/[0.03] p-10 sm:p-16 text-center max-w-xl w-full">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-teal-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4">
              Just Getting Started
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-10">
              Currently seeking internship opportunities to apply my skills in a real-world environment and grow as a developer.
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-teal-500/40 text-teal-400 text-sm font-medium rounded-xl hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
