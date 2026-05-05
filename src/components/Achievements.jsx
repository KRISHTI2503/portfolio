import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const hackathons = [
  {
    title: 'DU Hacks 4.0 — GDSC DDU',
    description: 'Built a Stream Selection Platform to help students explore academic streams, colleges, and career paths after 10th grade.',
    date: '2025',
    type: 'Hackathon',
    color: 'from-yellow-500/15 to-orange-500/5',
    border: 'border-yellow-500/25',
    badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    cert: '/certificates/du-hacks-4.0.jpeg',
  },
  {
    title: 'DU Hacks 5.0 — GDSC DDU',
    description: 'Collaborated with a team to develop FundLedger, a community-driven funding platform that enables transparent proposal submission, verification, and democratic voting to support fair and community-based funding decisions.',
    date: '2026',
    type: 'Hackathon',
    color: 'from-purple-500/15 to-pink-500/5',
    border: 'border-purple-500/25',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    cert: '/certificates/du-hacks-5.0.jpeg',
  },
  {
    title: "TIC-TECH-TOE '25 — DA-IICT",
    description: 'Developed an Intelligent Virtual Career Advisor to guide students in making informed academic and career decisions.',
    date: '2025',
    type: 'Hackathon',
    color: 'from-teal-500/15 to-emerald-500/5',
    border: 'border-teal-500/25',
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    cert: '/certificates/tic-tech-toe-4.0.jpeg',
  },
]

const certificates = [
  {
    title: 'DU Hacks 4.0',
    issuer: 'GDSC DDU',
    date: '2025',
    emoji: '🏆',
    href: '/certificates/du-hacks-4.0.jpeg',
  },
  {
    title: 'DU Hacks 5.0',
    issuer: 'GDSC DDU',
    date: '2026',
    emoji: '🚀',
    href: '/certificates/du-hacks-5.0.jpeg',
  },
  {
    title: 'TIC-TECH-TOE 4.0',
    issuer: 'DA-IICT',
    date: '2025',
    emoji: '🌟',
    href: '/certificates/tic-tech-toe-4.0.jpeg',
  },
]

const codingProfiles = [
  {
    label: 'Codolio',
    href: 'https://codolio.com/profile/Krishtipatel25',
    color: 'from-teal-500/15 to-cyan-500/5',
    border: 'border-teal-500/25',
    textColor: 'text-teal-300',
    stat: 'Krishtipatel25',
    // Portfolio/link icon
    path: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    isStroke: true,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Krishti25/',
    color: 'from-yellow-500/15 to-orange-500/5',
    border: 'border-yellow-500/25',
    textColor: 'text-yellow-300',
    stat: 'Krishti25',
    path: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
    isStroke: false,
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/_Krishti251109',
    color: 'from-blue-500/15 to-cyan-500/5',
    border: 'border-blue-500/25',
    textColor: 'text-blue-300',
    stat: '_Krishti251109',
    path: 'M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15A1.5 1.5 0 0 1 13.5 21h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 16.5v3A1.5 1.5 0 0 1 22.5 21h-3A1.5 1.5 0 0 1 18 19.5v-3A1.5 1.5 0 0 1 19.5 10.5h3z',
    isStroke: false,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/krishti_2503',
    color: 'from-amber-500/15 to-yellow-500/5',
    border: 'border-amber-500/25',
    textColor: 'text-amber-300',
    stat: 'krishti_2503',
    path: 'M12 2C9.243 2 7 4.243 7 7c0 1.657.672 3.157 1.757 4.243A4.978 4.978 0 0 0 7 15v1H5v2h14v-2h-2v-1a4.978 4.978 0 0 0-1.757-3.757A5.978 5.978 0 0 0 17 7c0-2.757-2.243-5-5-5zm0 2a4 4 0 0 1 3.465 6H8.535A4 4 0 0 1 12 4zm-3 9h6v1a3 3 0 0 1-6 0v-1z',
    isStroke: false,
  },
  {
    label: 'HackerRank',
    href: 'https://hackerrank.com/krishti2503',
    color: 'from-green-500/15 to-emerald-500/5',
    border: 'border-green-500/25',
    textColor: 'text-green-300',
    stat: 'krishti2503',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.311h-1.975v-3.97H9.475v3.97H7.5V6.689h1.975v4.906h5.05V6.689H16.5v10.622z',
    isStroke: false,
  },
]

function SubHeading({ label, children }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <span className="text-teal-400 font-mono text-sm font-semibold tracking-wide">{label}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
      </div>
      {children}
    </div>
  )
}

export default function Achievements() {
  const ref = useReveal()

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[350px] sm:h-[350px] bg-emerald-500/5 left-0 top-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Recognition"
          title={<>Achievements & <span className="gradient-text">More</span></>}
        />

        {/* ── Hackathons & Awards ── */}
        <SubHeading label="Hackathons & Awards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hackathons.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-slide-up reveal-delay-${(i % 3) + 1} group glass-card bg-gradient-to-br ${item.color} border ${item.border} p-5 sm:p-6 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-2">
                  {/* Rocket icon — outline style */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-teal-400/30 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono border flex-shrink-0 ${item.badge}`}>
                    {item.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1.5 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-teal-400 text-xs font-mono">{item.date}</span>
                  </div>
                  {item.cert && (
                    <a
                      href={item.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono text-teal-400 hover:text-teal-300 transition-all duration-200 hover:translate-x-0.5 hover:underline group/cert"
                    >
                      View Certificate
                      <svg className="w-3 h-3 group-hover/cert:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SubHeading>

        {/* ── Certificates ── */}
        <SubHeading label="Certificates">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${(i % 3) + 1} group glass-card p-5 flex flex-col gap-3 hover:scale-[1.03] hover:border-teal-500/40 hover:shadow-[0_0_20px_rgba(13,148,136,0.1)] transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  {/* Award icon — outline style */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-teal-400/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  {/* External link icon */}
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-teal-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono mt-1">{cert.issuer} · {cert.date}</p>
                </div>
                <span className="mt-auto text-xs text-teal-500 font-mono group-hover:text-teal-300 transition-colors">
                  View Certificate →
                </span>
              </a>
            ))}
          </div>
        </SubHeading>

        {/* ── Coding Profiles ── */}
        <SubHeading label="Coding Profiles">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {codingProfiles.map((profile, i) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group glass-card bg-gradient-to-br ${profile.color} border ${profile.border} p-5 sm:p-6 flex items-center gap-4 hover:scale-[1.03] transition-all duration-300`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-teal-400/40 transition-colors">
                  <svg className={`w-6 h-6 sm:w-7 sm:h-7 ${profile.textColor}`} fill={profile.isStroke ? 'none' : 'currentColor'} stroke={profile.isStroke ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                    <path d={profile.path} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className={`font-bold text-base sm:text-lg ${profile.textColor} group-hover:underline`}>
                    {profile.label}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono mt-0.5 truncate">{profile.stat}</p>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-teal-400 ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </SubHeading>
      </div>
    </section>
  )
}
