export default function Divider({ label, className = '' }) {
  if (!label) return <hr className={`border-t border-neutral-200 dark:border-neutral-800 ${className}`} />
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
      <span className="eyebrow">{label}</span>
      <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
    </div>
  )
}
