import useCountUp from '../../hooks/useCountUp.js'

export default function MetricNumber({ value, unit, decimals = 0, className = '' }) {
  const [n, ref] = useCountUp(value, { decimals })
  const display = decimals > 0 ? n.toFixed(decimals) : n.toLocaleString('en-IN')
  return (
    <span ref={ref} className={`inline-flex items-baseline gap-2 whitespace-nowrap ${className}`}>
      <span className="font-display font-black tracking-tightest text-bone">
        {display}
      </span>
      {unit && (
        <span className="font-mono text-sm text-specs tracking-wide whitespace-nowrap">{unit}</span>
      )}
    </span>
  )
}
