import ScrollReveal from './ScrollReveal'

export default function MetricCard({ metric }) {
  return (
    <ScrollReveal
      className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
    >
      <div className="flex justify-between">
        <span className="eyebrow">{metric.label}</span>
        <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{metric.period}</span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <p className="font-display text-4xl font-black text-neutral-900 dark:text-neutral-100">
          {metric.value}
          <span className="font-sans text-3xl font-medium">{metric.unit}</span>
        </p>
        {metric.growth && (
          <p
            className={`font-mono text-sm font-semibold ${
              metric.growth.startsWith('+') ? 'text-green-600 dark:text-green-500' : 'text-red-500'
            }`}
          >
            {metric.growth}
          </p>
        )}
      </div>
      <p className="mt-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">{metric.note}</p>
    </ScrollReveal>
  )
}
