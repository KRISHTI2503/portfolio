/**
 * Reusable section heading with label, title, gradient accent bar, and optional subtitle.
 * Usage:
 *   <SectionTitle label="// my work" title={<>Featured <span className="gradient-text">Projects</span></>} />
 */
export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {/* Mono label */}
      <div className="reveal">
        <span className="section-label">{label}</span>
      </div>

      {/* Main heading */}
      <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
        {title}
      </h2>

      {/* Accent gradient bar */}
      <div className="reveal reveal-delay-2 flex justify-center">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400" />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="reveal reveal-delay-3 text-slate-400 mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
