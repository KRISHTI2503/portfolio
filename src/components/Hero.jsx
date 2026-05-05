import { useEffect, useState, useRef } from 'react'
import ResumeModal from './ResumeModal'

const roles = ['Aspiring Developer', 'Problem Solver', 'Hackathon Enthusiast']

function Particle({ style }) {
  return <div className="absolute w-1 h-1 rounded-full bg-teal-400/40 animate-float" style={style} />
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark
        ? 'rgba(13, 148, 136, 0.07)'
        : 'rgba(148, 163, 184, 0.2)'
      ctx.lineWidth = 1
      const size = 60
      for (let x = 0; x < canvas.width; x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
    }
    resize()
    window.addEventListener('resize', resize)

    // Redraw grid when theme changes
    const observer = new MutationObserver(drawGrid)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  const particles = Array.from({ length: 16 }, (_, i) => ({
    style: {
      left: `${(i * 6.25) % 100}%`,
      top: `${(i * 13) % 100}%`,
      animationDelay: `${(i * 0.4) % 6}s`,
      animationDuration: `${6 + (i % 4) * 1.5}s`,
      opacity: 0.3 + (i % 3) * 0.15,
      width: `${1 + (i % 3)}px`,
      height: `${1 + (i % 3)}px`,
    }
  }))

  return (
    <section id="hero" className="relative min-h-screen min-h-[600px] flex items-center justify-center overflow-hidden px-4">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-72 h-72 sm:w-[500px] sm:h-[500px] bg-teal-500/10 -top-32 -left-32" style={{ animationDelay: '0s' }} />
      <div className="orb w-64 h-64 sm:w-[400px] sm:h-[400px] bg-cyan-500/8 top-1/2 -right-32 sm:-right-48" style={{ animationDelay: '3s' }} />
      <div className="orb w-48 h-48 sm:w-[300px] sm:h-[300px] bg-emerald-500/8 bottom-0 left-1/3" style={{ animationDelay: '1.5s' }} />

      {particles.map((p, i) => <Particle key={i} style={p.style} />)}

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-24 sm:py-32">

        

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight animate-slide-up">
          Hi, I'm <span className="gradient-text">Krishti Patel</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 my-5 sm:my-8 min-h-[2rem] sm:min-h-[2.5rem]">
          <span className="text-slate-500 font-mono text-sm sm:text-lg flex-shrink-0">&gt;</span>
          <span className="text-base sm:text-xl md:text-2xl font-mono text-cyan-300 text-left break-all sm:break-words">
            {displayed}
            <span className="inline-block w-0.5 h-4 sm:h-6 bg-teal-400 ml-1 animate-pulse align-middle" />
          </span>
        </div>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-1 sm:px-2">
          I build user-focused digital solutions with clean design and real-world impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
            Explore Projects
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View Resume
          </button>
        </div>
      </div>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </section>
  )
}
