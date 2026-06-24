export default function Divider({ label, className = '' }) {
  if (!label) return <hr className={`border-t border-bone/10 ${className}`} />
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-bone/10" />
      <span className="eyebrow">{label}</span>
      <span className="h-px flex-1 bg-bone/10" />
    </div>
  )
}
