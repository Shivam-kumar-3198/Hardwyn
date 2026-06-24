import { motion } from 'framer-motion'

export default function BarRow({ year, value, label, max, index }) {
  const widthPct = (value / max) * 100

  return (
    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4 py-3">
      <span className="font-mono text-sm text-specs">{year}</span>
      <div className="relative h-8 overflow-hidden rounded-sm bg-bone/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${widthPct}%` }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{
            duration: 1.2,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="h-full bg-brushed-metal"
        >
          <span className="absolute right-0 top-0 h-full w-[3px] bg-crimson" />
        </motion.div>
      </div>
      <span className="font-display text-base font-semibold text-bone">{label}</span>
    </div>
  )
}
