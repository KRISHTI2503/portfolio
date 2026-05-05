import { useEffect, useState } from 'react'

export default function ResumeModal({ onClose }) {
  const [iframeError, setIframeError] = useState(false)

  // ESC key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-backdrop" />

      {/* Modal — full height on mobile, 85vh on desktop */}
      <div
        className="relative z-10 w-full sm:max-w-[900px] h-[95vh] sm:h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(13,148,136,0.2)] bg-[#0a1628] animate-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08] bg-[#0a1628]/95 backdrop-blur-sm flex-shrink-0">
          {/* Label */}
          <div className="flex items-center gap-2 text-slate-300 text-sm font-mono">
            <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Resume
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {/* Download — text on sm+, icon-only on mobile */}
            <a
              href="/assets/resume.pdf"
              download
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-teal-400 border border-teal-500/40 rounded-lg hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Open in new tab */}
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 border border-white/10 rounded-lg hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF body — touch-scroll enabled */}
        <div className="flex-1 overflow-auto overscroll-contain -webkit-overflow-scrolling-touch">
          {iframeError ? (
            /* Fallback for mobile browsers that block iframes */
            <div className="h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
              <svg className="w-14 h-14 text-teal-400/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <p className="text-slate-400 text-sm">PDF preview isn't available in this browser.</p>
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Open Resume
              </a>
            </div>
          ) : (
            <iframe
              src="/assets/resume.pdf"
              title="Krishti Patel — Resume"
              className="w-full h-full border-0"
              onError={() => setIframeError(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
