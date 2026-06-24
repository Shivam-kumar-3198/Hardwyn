export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="font-mono text-[11px] uppercase tracking-wider text-specs transition-colors hover:text-bone"
    >
      {children}
    </a>
  )
}
