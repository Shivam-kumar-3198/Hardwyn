import Container from './Container.jsx'
import { company } from '../../data/company.js'

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-steel py-12">
      <Container className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg font-extrabold tracking-tight text-bone">
            HARDWYN INDIA LTD
          </span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-specs">
            {company.positioning} Manufacturing architectural hardware engineered to outlast
            the buildings it ships into.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Site</p>
          <ul className="space-y-2 text-sm text-bone/80">
            <li><a href="#financials" className="hover:text-crimson">Financials</a></li>
            <li><a href="#vision-2032" className="hover:text-crimson">Vision 2032</a></li>
            <li><a href="#products" className="hover:text-crimson">Products</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Investors</p>
          <ul className="space-y-2 text-sm text-bone/80">
            <li><a href={`mailto:${company.irEmail}`} className="hover:text-crimson">IR contact</a></li>
            <li><a href="#investors" className="hover:text-crimson">Filings</a></li>
            <li><a href="#investors" className="hover:text-crimson">Press</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Listing</p>
          <p className="font-mono text-sm text-bone">{company.ticker}</p>
          <p className="mt-1 font-mono text-xs text-specs">N S E/ B S E listed with HARDWYN</p>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 md:flex-row md:items-center">
        <p className="font-mono text-[11px] text-specs">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-specs">
          This page contains forward-looking statements. Verify all figures against official filings.
        </p>
      </Container>
    </footer>
  )
}
