import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'

export default function Moat() {
  return (
    <section id="moat" className="border-y border-bone/10 bg-steel py-24 md:py-32">
      <Container>
        <Eyebrow code="H–02" label="The Moat" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <ScrollReveal>
            <SectionTitle>
              One listed name in
              <br />
              <span className="text-crimson">architectural hardware.</span>
              <br />
              <span className="text-specs">Ours.</span>
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Building image — shows where Hardwyn hardware lives */}
            <div className="relative mb-8 h-52 overflow-hidden border border-bone/10">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=85"
                alt="Premium modern architecture — Hardwyn hardware installed at scale"
                loading="lazy"
                className="h-full w-full object-cover brightness-75 saturate-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.60)_100%)]" />
              <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-specs">
                12 million doors built in India · every year
              </span>
              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-bone/20" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-bone/20" />
            </div>

            <div className="space-y-6 pt-2 text-base leading-relaxed text-bone/80 md:text-lg">
              <p>
                India builds twelve million doors a year. Almost none of the hardware on them
                comes from a company you can buy on a public exchange.
              </p>
              <p>
                Hardwyn is the exception. That's the moat — and it widens every time an
                institutional investor asks for category exposure and finds exactly one ticker.
              </p>
              <p className="border-l-2 border-crimson pl-4 font-mono text-sm text-bone">
                Listed since inception of the category on Indian markets. Audited. Filed.
                Repeatable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
