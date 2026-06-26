import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import { company } from '../../data/company.js'

export default function InvestorConnect() {
  return (
    <section
      id="investors"
      className="relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-24 md:py-32"
    >
      <Container>
        <Eyebrow code="H–06" label="Investor Connect" />

        <ScrollReveal className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-black leading-[1.05] tracking-tightest text-neutral-900 dark:text-neutral-100 md:text-5xl">
              For institutional and analyst
              <br />
              <span className="text-crimson-deep">inquiries.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
              Filings, transcripts, and management access are routed through Merlin Capital. One
              email, monitored daily.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 md:p-8">
            <p className="eyebrow">Primary contact</p>
            <a
              href={`mailto:${company.irEmail}`}
              className="mt-3 block break-all font-display text-xl font-bold text-neutral-900 dark:text-neutral-100 transition-colors hover:text-crimson-deep md:text-2xl"
            >
              {company.irEmail}
            </a>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-200 dark:border-neutral-700 pt-6 text-sm">
              <div>
                <p className="eyebrow mb-2">Ticker</p>
                <p className="font-mono text-neutral-900 dark:text-neutral-100">{company.ticker}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Listing</p>
                <p className="font-mono text-neutral-900 dark:text-neutral-100">N S E/ B S E listed</p>
              </div>
            </div>
            <a
              href={`mailto:${company.irEmail}?subject=Investor%20Inquiry%20%E2%80%94%20Hardwyn%20India`}
              onClick={() => typeof window.gtagSendEvent === 'function' && window.gtagSendEvent(`mailto:${company.irEmail}?subject=Investor%20Inquiry%20%E2%80%94%20Hardwyn%20India`)}
              className="mt-8 inline-flex w-full items-center justify-between border border-crimson-deep bg-crimson-deep px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-crimson hover:border-crimson"
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
