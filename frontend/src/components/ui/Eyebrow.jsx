export default function Eyebrow({ code, label }) {
  return (
    <div className="flex items-center gap-3">
      {code && <span className="eyebrow text-crimson">{code}</span>}
      <span className="h-px w-8 bg-crimson/60" />
      <span className="eyebrow">{label}</span>
    </div>
  )
}
