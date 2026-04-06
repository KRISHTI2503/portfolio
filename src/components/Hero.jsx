import { useEffect, useState, useRef } from 'react'

const roles = ['Aspiring Web Developer', 'Problem Solver', 'Hackathon Enthusiast']

function Particle({ style }) {
  return <div className="absolute w-1 h-1 rounded-full bg-teal-400/40 animate-float" style={style} />
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
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
      ctx.strokeStyle = 'rgba(13, 148, 136, 0.07)'
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
    return () => window.removeEventListener('resize', resize)
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-72 h-72 sm:w-[500px] sm:h-[500px] bg-teal-500/10 -top-32 -left-32" style={{ animationDelay: '0s' }} />
      <div className="orb w-64 h-64 sm:w-[400px] sm:h-[400px] bg-cyan-500/8 top-1/2 -right-32 sm:-right-48" style={{ animationDelay: '3s' }} />
      <div className="orb w-48 h-48 sm:w-[300px] sm:h-[300px] bg-emerald-500/8 bottom-0 left-1/3" style={{ animationDelay: '1.5s' }} />

      {particles.map((p, i) => <Particle key={i} style={p.style} />)}

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-24 sm:py-32">

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tight animate-slide-up">
          Hi, I'm <span className="gradient-text">Krishti Patel</span>
        </h1>

        {/* Typewriter — no fixed min-width so it doesn't overflow on mobile */}
        <div className="flex items-center justify-center gap-2 my-6 sm:my-8 min-h-[2.5rem]">
          <span className="text-slate-500 font-mono text-base sm:text-lg flex-shrink-0">&gt;</span>
          <span className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-300 text-left break-words">
            {displayed}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-teal-400 ml-1 animate-pulse align-middle" />
          </span>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          Aspiring Web Developer passionate about building useful digital solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Work
          </a>
          <a
            href="/assets/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>

    </section>
  )
}
