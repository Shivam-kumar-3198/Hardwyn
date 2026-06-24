import Crosshair from './Crosshair.jsx'

export default function ProductSpecCard({ item }) {
  return (
    <article className="group relative border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors hover:border-crimson/50 dark:hover:border-crimson/40">
      {/* Product image */}
      {item.image && (
        <div className="relative h-44 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
          <img
            src={item.image}
            alt={item.imageAlt || item.name}
            loading="lazy"
            className="h-full w-full object-cover brightness-75 saturate-90 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 md:p-7">
        {!item.image && (
          <span className="eyebrow text-crimson">{item.code}</span>
        )}
        <Crosshair className="absolute right-3 top-3 opacity-30 transition-opacity group-hover:opacity-80" />
        <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {item.name}
        </h3>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {item.spec}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.body}</p>
      </div>
    </article>
  )
}
