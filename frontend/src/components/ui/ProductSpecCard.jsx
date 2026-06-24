import Crosshair from './Crosshair.jsx'

export default function ProductSpecCard({ item }) {
  return (
    <article className="group relative border border-bone/10 bg-steel/40 transition-colors hover:border-crimson/40">
      {/* Product image */}
      {item.image && (
        <div className="relative h-44 overflow-hidden border-b border-bone/10">
          <img
            src={item.image}
            alt={item.imageAlt || item.name}
            loading="lazy"
            className="h-full w-full object-cover brightness-75 saturate-90 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
          />
          {/* Fixed dark vignette — stays dark in both light and dark themes */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_100%)]" />
          <span className="absolute bottom-3 left-4 eyebrow text-crimson">{item.code}</span>
        </div>
      )}

      <div className="p-6 md:p-7">
        {!item.image && (
          <span className="eyebrow text-crimson">{item.code}</span>
        )}
        <Crosshair className="absolute right-3 top-3 opacity-40 transition-opacity group-hover:opacity-100" />
        <h3 className="font-display text-2xl font-bold tracking-tight text-bone">
          {item.name}
        </h3>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-specs">
          {item.spec}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-bone/75">{item.body}</p>
      </div>
    </article>
  )
}
