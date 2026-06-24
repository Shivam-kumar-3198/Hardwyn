import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import { company } from '../../data/company.js'

export default function InvestorConnect() {
  return (
    <section
      id="investors"
      className="surface-brushed relative overflow-hidden border-t border-bone/10 py-24 md:py-32"
    >
      <Container>
        <Eyebrow code="H–06" label="Investor Connect" />

        <ScrollReveal className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-black leading-[1.05] tracking-tightest text-bone md:text-5xl">
              For institutional and analyst
              <br />
              <span className="text-crimson">inquiries.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">
              Filings, transcripts, and management access are routed through Merlin Capital. One
              email, monitored daily.
            </p>
          </div>

          <div className="border border-bone/15 bg-ink/40 p-6 backdrop-blur-sm md:p-8">
            <p className="eyebrow">Primary contact</p>
            <a
              href={`mailto:${company.irEmail}`}
              className="mt-3 block break-all font-display text-xl font-bold text-bone transition-colors hover:text-crimson md:text-2xl"
            >
              {company.irEmail}
            </a>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="eyebrow mb-2">Ticker</p>
                <p className="font-mono text-bone">{company.ticker}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Listing</p>
                <p className="font-mono text-bone">NSE · BSE</p>
              </div>
            </div>
            <a
              href={`mailto:${company.irEmail}?subject=Investor%20Inquiry%20%E2%80%94%20Hardwyn%20India`}
              className="mt-8 inline-flex w-full items-center justify-between border border-crimson bg-crimson px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-cold transition-colors hover:bg-crimson-deep"
            >
              Reach IR desk
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
