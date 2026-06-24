export default function SectionTitle({ children, kicker, as: As = 'h2', className = '' }) {
  return (
    <div className={className}>
      {kicker && <p className="mb-4 max-w-prose text-sm text-neutral-500 dark:text-neutral-400">{kicker}</p>}
      <As className="font-display text-3xl font-black leading-[1.05] tracking-tightest text-neutral-900 dark:text-neutral-100 md:text-5xl lg:text-6xl">
        {children}
      </As>
    </div>
  )
}
