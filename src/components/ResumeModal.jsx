import { useEffect, useState } from 'react'

const RESUME_VERSION = 'v3'
const RESUME_URL = `/assets/resume.pdf?${RESUME_VERSION}`

export default function ResumeModal({ onClose }) {
  const [visible, setVisible] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  // Trigger show animation on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [])

  // ESC key close
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent background scroll
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [])

  const handleClose = () => {
    setVisible(false)
    // Wait for fade-out before unmounting
    setTimeout(onClose, 220)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.22s ease',
      }}
      onClick={handleClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full sm:max-w-[900px] h-[95vh] sm:h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0a1628] resume-modal-panel"
        style={{
          boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(13,148,136,0.25)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(16px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.25s ease, opacity 0.25s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/[0.08] bg-[#0a1628]/95 backdrop-blur-sm flex-shrink-0 resume-modal-bar">
          {/* Left: label */}
          <div className="flex items-center gap-2 text-slate-300 text-sm font-mono">
            <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Resume
          </div>

          {/* Right: actions */}
          <div className="flex flex-wrap items-center gap-1.5 justify-end">
            {/* Download Resume */}
            <a
              href={RESUME_URL}
              download
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-teal-400 border border-teal-500/40 rounded-lg hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-200 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden xs:inline">Download Resume</span>
              <span className="xs:hidden">Save</span>
            </a>

            {/* Open Full Screen */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 border border-white/10 rounded-lg hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span className="hidden xs:inline">Open Full Screen</span>
              <span className="xs:hidden">Open</span>
            </a>

            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 resume-modal-close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Hint text ── */}
        <p className="px-4 sm:px-5 py-2 text-xs text-slate-500 font-mono border-b border-white/[0.05] flex-shrink-0 resume-modal-hint">
          Preview of my resume — feel free to download or open full screen.
        </p>

        {/* ── PDF body ── */}
        <div className="flex-1 overflow-auto overscroll-contain">
          {iframeError ? (
            <div className="h-full flex flex-col items-center justify-center gap-5 px-6 text-center">
              <svg className="w-12 h-12 text-teal-400/50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div>
                <p className="text-white font-semibold mb-1">Unable to preview resume.</p>
                <p className="text-slate-400 text-sm">Please download instead.</p>
              </div>
              <a
                href={RESUME_URL}
                download
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          ) : (
            <iframe
              src={RESUME_URL}
              title="Krishti Patel — Resume"
              className="w-full border-0"
              style={{ height: '80vh', minHeight: '400px' }}
              onError={() => setIframeError(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
