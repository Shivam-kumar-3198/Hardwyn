import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import MetricCard from '../ui/MetricCard.jsx'
import BarRow from '../ui/BarRow.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import Divider from '../ui/Divider.jsx'
import { metrics, revenueByYear } from '../../data/financials.js'

export default function Financials() {
  const maxRevenue = Math.max(...revenueByYear.map((r) => r.value))

  return (
    <section id="financials" className="bg-ink py-24 md:py-32">
      <Container>
        <Eyebrow code="H–03" label="Engine of Growth" />
        <ScrollReveal className="mt-8">
          <SectionTitle kicker="FY24 — FY26 trajectory. Audited figures, plotted without flourish.">
            The numbers that
            <br />
            <span className="text-crimson">do the talking.</span>
          </SectionTitle>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.id} metric={m} />
          ))}
        </div>

        {/* Revenue trajectory chart */}
        <div className="mt-16">
          <Divider label="Revenue · FY24 → FY26" />
          <div className="mt-8 max-w-3xl">
            {revenueByYear.map((row, i) => (
              <BarRow
                key={row.year}
                year={row.year}
                value={row.value}
                label={row.label}
                max={maxRevenue}
                index={i}
              />
            ))}
          </div>
          <p className="mt-6 max-w-xl font-mono text-xs text-specs">
            Note: FY24–FY25 figures rounded. FY26 audited at ₹199.86 Cr. Source: company
            filings; refer to filings for full reconciliation.
          </p>
        </div>
      </Container>
    </section>
  )
}
