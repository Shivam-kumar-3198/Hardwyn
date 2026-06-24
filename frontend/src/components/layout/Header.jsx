import Container from './Container.jsx'
import Logo from './Logo.jsx'
import NavLink from './NavLink.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'

const nav = [
  { href: '#moat', label: 'The Moat' },
  { href: '#financials', label: 'Financials' },
  { href: '#vision-2032', label: 'Vision 2032' },
  { href: '#products', label: 'Products' },
  { href: '#investors', label: 'Investors' }
]

export default function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-bone/10 bg-ink/80 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#investors"
            className="hidden items-center gap-2 border border-crimson/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-crimson transition-colors hover:bg-crimson hover:text-cold md:inline-flex"
          >
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-crimson" />
            IR Connect
          </a>
        </div>
      </Container>
    </header>
  )
}
