export default function SectionTitle({ children, kicker, as: As = 'h2', className = '' }) {
  return (
    <div className={className}>
      {kicker && <p className="mb-4 max-w-prose text-sm text-specs">{kicker}</p>}
      <As className="font-display text-3xl font-black leading-[1.05] tracking-tightest text-bone md:text-5xl lg:text-6xl">
        {children}
      </As>
    </div>
  )
}
