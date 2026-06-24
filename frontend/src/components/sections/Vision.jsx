import { motion } from 'framer-motion'
import Container from '../layout/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import TimelineRow from '../ui/TimelineRow.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import { milestones } from '../../data/vision.js'

export default function Vision() {
  return (
    <section
      id="vision-2032"
      className="relative border-t border-bone/10 bg-steel py-24 md:py-32"
    >
      <Container>
        <Eyebrow code="H–04" label="Vision 2032" />

        {/* Factory image — visual anchor for the ₹1,000 Cr ambition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 h-56 overflow-hidden border border-bone/10 sm:h-64 md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85"
            alt="Hardwyn manufacturing facility — CNC precision machining floor"
            loading="lazy"
            className="h-full w-full object-cover brightness-70 saturate-90"
          />
          {/* Fixed dark overlays — theme-independent so they stay visible in light mode */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.20)_60%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.70)_0%,transparent_50%)]" />

          {/* Overlay caption */}
          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-specs">
                Manufacturing floor · Kundli, Haryana
              </p>
              <p className="mt-1 font-display text-xl font-bold text-bone md:text-2xl">
                The plant that underwrites the number.
              </p>
            </div>
            <div className="hidden text-right md:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-specs">Target</p>
              <p className="font-display text-2xl font-black text-crimson">₹1,000 Cr+</p>
              <p className="font-mono text-[10px] text-specs">by FY32</p>
            </div>
          </div>

          {/* Corner markers */}
          <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-crimson/50" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-crimson/50" />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <ScrollReveal>
            <SectionTitle>
              The sprint to
              <br />
              <span className="text-crimson">₹1,000 Cr+</span>
            </SectionTitle>
            <p className="mt-6 max-w-md text-base leading-relaxed text-specs">
              Five milestones. Two shipped or in flight. Three to underwrite. Each one is a
              decision already costed against the manufacturing floor.
            </p>
          </ScrollReveal>

          <ol className="lg:pt-2">
            {milestones.map((m, i) => (
              <TimelineRow
                key={m.id}
                milestone={m}
                index={i}
                isLast={i === milestones.length - 1}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
