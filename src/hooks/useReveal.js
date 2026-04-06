import { useEffect, useRef } from 'react'

/**
 * Triggers scroll animations on child elements with class "reveal".
 * @param {object} options
 * @param {string} options.rootMargin  - e.g. "-120px 0px" (default)
 * @param {number} options.threshold  - 0–1 (default 0.08)
 */
export default function useReveal({ rootMargin = '-120px 0px', threshold = 0.08 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach(child => child.classList.add('visible'))
          observer.unobserve(el)
        }
      },
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return ref
}
