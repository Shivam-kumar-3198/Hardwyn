import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number up from 0 to `target` over `duration` ms, but only
 * once the element enters the viewport. Respects prefers-reduced-motion.
 */
export default function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration)
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3)
              const next = target * eased
              setValue(decimals > 0 ? parseFloat(next.toFixed(decimals)) : Math.round(next))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [target, duration, decimals])

  return [value, ref]
}
