import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const growthMap = {
  FY25: '+32%',
  FY26: '+34%',
}

export default function BarRow({ year, value, label, max, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })
  const widthPct = (value / max) * 100
  const growth = growthMap[year]

  return (
    <div ref={ref} className="py-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-neutral-800 dark:text-neutral-200">{year}</span>
          {growth && (
            <motion.span
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ delay: index * 0.22 + 1.1, duration: 0.35 }}
              className="font-mono text-[10px] font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-500/15 px-2 py-0.5 rounded-sm"
            >
              {growth} YoY
            </motion.span>
          )}
        </div>
        <motion.span
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: index * 0.22 + 0.8, duration: 0.4 }}
          className="font-display text-xl font-black text-neutral-900 dark:text-neutral-100 tabular-nums"
        >
          {label}
        </motion.span>
      </div>

      {/* Meter track */}
      <div className="relative h-10 w-full rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {/* Orange fill — inline style bypasses Tailwind class generation issues */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: isInView ? `${widthPct}%` : '0%' }}
          transition={{
            duration: 1.6,
            delay: index * 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            background: 'linear-gradient(to right, #c2410c, #f97316)',
            position: 'absolute',
            inset: 0,
            right: 'auto',
          }}
        >
          {/* Sheen */}
          <span
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 60%)',
            }}
          />
          {/* Glowing edge */}
          <span
            style={{
              position: 'absolute', right: 0, top: 0,
              width: '3px', height: '100%',
              background: 'rgba(255,255,255,0.7)',
              boxShadow: '0 0 8px 2px rgba(251,146,60,0.8)',
            }}
          />
        </motion.div>

        {/* Percentage text */}
        <motion.span
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: index * 0.22 + 0.9, duration: 0.4 }}
          className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[11px] font-bold text-white drop-shadow"
        >
          {Math.round(widthPct)}%
        </motion.span>
      </div>
    </div>
  )
}
