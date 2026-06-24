import { motion } from 'framer-motion'

const statusStyles = {
  shipped: {
    ring: 'bg-crimson',
    label: 'Shipped',
    textColor: 'text-neutral-900 dark:text-neutral-100',
  },
  building: {
    ring: 'bg-neutral-800 dark:bg-neutral-200',
    label: 'In build',
    textColor: 'text-neutral-900 dark:text-neutral-100',
  },
  pipeline: {
    ring: 'border border-neutral-400 dark:border-neutral-500 bg-transparent',
    label: 'Pipeline',
    textColor: 'text-neutral-500 dark:text-neutral-400',
  },
  horizon: {
    ring: 'border border-neutral-300 dark:border-neutral-600 bg-transparent',
    label: 'Horizon',
    textColor: 'text-neutral-400 dark:text-neutral-500',
  },
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
        <span className={`font-mono text-xs ${s.textColor}`}>{milestone.code}</span>
        <span className={`mt-2 font-display text-2xl font-bold ${s.textColor}`}>
          {milestone.period}
        </span>
        <span className={`absolute left-18 top-2 h-3 w-3 rounded-full ${s.ring}`} />
        {!isLast && (
          <span className="absolute left-19.25 top-6 h-full w-px bg-neutral-200 dark:bg-neutral-700" />
        )}
      </div>

      {/* Body */}
      <div className="pl-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="eyebrow">{s.label}</span>
        </div>
        <h3 className={`font-display text-xl font-bold leading-tight ${s.textColor} md:text-2xl`}>
          {milestone.title}
        </h3>
        <p className={`mt-3 max-w-prose text-sm leading-relaxed ${s.textColor} md:text-base`}>
          {milestone.body}
        </p>
      </div>
    </motion.li>
  )
}
