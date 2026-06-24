import { motion } from 'framer-motion'

const statusStyles = {
  shipped: { ring: 'bg-crimson', label: 'Shipped' },
  building: { ring: 'bg-bone', label: 'In build' },
  pipeline: { ring: 'border border-bone bg-transparent', label: 'Pipeline' },
  horizon: { ring: 'border border-specs bg-transparent', label: 'Horizon' }
}

export default function TimelineRow({ milestone, index, isLast }) {
  const s = statusStyles[milestone.status] || statusStyles.horizon

  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-[80px_1fr] gap-6 pb-12 last:pb-0"
    >
      {/* Left rail */}
      <div className="relative flex flex-col items-start">
        <span className="font-mono text-xs text-specs">{milestone.code}</span>
        <span className="mt-2 font-display text-2xl font-bold text-bone">
          {milestone.period}
        </span>
        <span className={`absolute left-[72px] top-2 h-3 w-3 rounded-full ${s.ring}`} />
        {!isLast && (
          <span className="absolute left-[77px] top-6 h-full w-px bg-bone/15" />
        )}
      </div>

      {/* Body */}
      <div className="pl-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="eyebrow">{s.label}</span>
        </div>
        <h3 className="font-display text-xl font-bold leading-tight text-bone md:text-2xl">
          {milestone.title}
        </h3>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-specs md:text-base">
          {milestone.body}
        </p>
      </div>
    </motion.li>
  )
}
