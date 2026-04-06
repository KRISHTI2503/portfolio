import useReveal from '../hooks/useReveal'

const stats = [
  { value: '3+', label: 'Projects' },
  { value: '2+', label: 'Hackathons' },
  { value: '8.82', label: 'Current CPI' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[400px] sm:h-[400px] bg-teal-500/5 -right-32 sm:-right-48 top-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

        {/* Profile photo — shown on all screen sizes, stacks above text on mobile */}
        <div className="reveal flex justify-center md:justify-start">
          <div
            className="p-[2px] rounded-full flex-shrink-0"
            style={{
              background: 'conic-gradient(from 180deg, #0d9488, #06b6d4, #10b981, #0d9488)',
            }}
          >
            {/* 220px mobile → 260px md+ */}
            <div className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden bg-[#030712]">
              <img
                src="/assets/profile.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover object-center"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center hidden text-slate-500 text-sm font-mono"
                aria-hidden="true"
              >
                photo.jpg
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal">
            <span className="section-label">About Me</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Passionate about<br />
            <span className="gradient-text">building for the world</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 leading-relaxed mb-4 text-base sm:text-lg">
            I'm Krishti Patel, a B.Tech Information Technology student at Dharmsinh Desai University, Nadiad, Gujarat. I'm passionate about coding, web development, and building practical digital solutions that solve real-world problems.
          </p>
          <p className="reveal reveal-delay-3 text-slate-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            I actively participate in hackathons, collaborating with teams to build innovative projects. I am currently focusing on strengthening my skills in Data Structures and Algorithms (DSA) and web development.
          </p>

          {/* Stats grid */}
          <div className="reveal reveal-delay-4 grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map(s => (
              <div key={s.label} className="glass-card p-3 sm:p-5 group cursor-default text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-black gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.value}
                </div>
                <div className="text-slate-500 text-xs font-mono mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
