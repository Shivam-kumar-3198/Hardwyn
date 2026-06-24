import MetricNumber from './MetricNumber.jsx'
import Crosshair from './Crosshair.jsx'

export default function MetricCard({ metric, size = 'md' }) {
  const decimals = metric.value % 1 !== 0 ? 2 : 0
  const figureSize =
    size === 'lg'
      ? 'text-5xl md:text-6xl lg:text-7xl'
      : 'text-4xl md:text-5xl'

  return (
    <article className="surface-brushed relative overflow-hidden rounded-sm border border-bone/10 p-6 md:p-8">
      <Crosshair className="absolute right-3 top-3 opacity-60" />
      <header className="flex items-center justify-between">
        <span className="eyebrow">{metric.label}</span>
        <span className="font-mono text-[11px] text-specs">{metric.period}</span>
      </header>
      <div className={`mt-6 ${figureSize}`}>
        <MetricNumber value={metric.value} unit={metric.unit} decimals={decimals} />
      </div>
      <footer className="mt-6 flex items-end justify-between gap-4">
        <p className="max-w-[14ch] text-sm leading-snug text-specs">{metric.note}</p>
        {metric.growth && (
          <span className="rounded-sm border border-crimson/40 px-2 py-1 font-mono text-[11px] text-crimson">
            {metric.growth}
          </span>
        )}
      </footer>
    </article>
  )
}
