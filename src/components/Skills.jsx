import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const skillGroups = [
  {
    category: 'Languages',
    icon: '⬡',
    color: 'from-teal-500/20 to-cyan-500/10',
    border: 'border-teal-500/30',
    skills: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    icon: '◈',
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
    skills: ['Django (learning)'],
  },
  {
    category: 'Databases & Tools',
    icon: '◉',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    skills: ['PostgreSQL', 'Git', 'GitHub', 'VS Code', 'NetBeans'],
  },
  {
    category: 'Core Concepts',
    icon: '◎',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    skills: ['OOP', 'Data Structures', 'DBMS', 'Computer Networks', 'Problem Solving', 'Team Collaboration'],
  },
]

const tools = []

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[350px] sm:h-[350px] bg-cyan-500/5 -left-32 top-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// tech stack"
          title={<>Skills & <span className="gradient-text">Technologies</span></>}
        />

        {/* Category cards — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal reveal-scale reveal-delay-${gi + 1} glass-card p-5 sm:p-6 bg-gradient-to-br ${group.color} border ${group.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="text-xl sm:text-2xl text-teal-400 font-mono">{group.icon}</span>
                <h3 className="text-white font-bold text-sm sm:text-base">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="tag text-xs hover:scale-105 hover:border-teal-400/60 hover:text-teal-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row — only rendered if there are items */}
        {tools.length > 0 && (
          <div className="reveal mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center">
            {tools.map(tech => (
              <span key={tech} className="tag text-xs cursor-default hover:scale-105 hover:border-teal-400/60 hover:text-teal-200 transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
