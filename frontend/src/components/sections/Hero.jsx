'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../layout/Container.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax scaled back slightly for a tighter feel on large screens
  const yBgText     = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const yImg        = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleImg    = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500"
    >
      {/* ── Background: radial light ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.6)_0%,rgba(240,240,245,1)_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(30,30,35,0.5)_0%,rgba(10,10,11,1)_100%)] transition-colors duration-500"
      />

      {/* ── Background: blueprint grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] transition-colors duration-500"
      />

      {/* ── Background: "ENGINEERED" parallax text ── */}
      <motion.div
        aria-hidden="true"
        style={{ y: yBgText, opacity: opacityFade }}
        className="pointer-events-none absolute top-[20%] left-0 z-0 w-full select-none overflow-hidden text-center"
      >
        <span className="text-[22vw] font-black leading-none tracking-tighter text-neutral-200/70 dark:text-neutral-800/20 whitespace-nowrap transition-colors duration-500">
          ENGINEERED
        </span>
      </motion.div>

      {/* ══════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════ */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col py-6 sm:py-10 md:py-16 lg:py-20">

        {/* ── Top bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="flex items-start justify-between"
        >
          <Eyebrow code="H–01" label="Corporate Vision" />
          <div className="hidden text-right font-mono text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400 md:block transition-colors duration-500">
            <span>LAT 28.6692 · LON 77.4538</span><br />
            <span>INDIA'S PREMIER LISTED HARDWARE</span>
          </div>
        </motion.div>

        {/* ── Main content (Stacked on Mobile/Tablet, Grid on Desktop) ── */}
        <div className="flex flex-1 flex-col justify-center pt-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 xl:gap-24 lg:pt-0">

          {/* Left: copy */}
          <div className="relative z-20">

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease }}
              className="text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-snug -tracking-tighter text-neutral-900 dark:text-neutral-100 transition-colors duration-500"
            >
              Built for every space.
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">Engineered for </span>
              <span className="text-red-600 drop-shadow-[0_0_18px_rgba(220,38,38,0.25)] dark:drop-shadow-[0_0_18px_rgba(220,38,38,0.35)] transition-all duration-500">
                excellence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="mt-5 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-[1.1rem] transition-colors duration-500"
            >
              India's only listed architectural hardware company — pioneering the organized
              sector with tolerances most buyers will never measure.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mt-8 sm:mt-10"
            >
              <a
                href="#vision-2032"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white dark:text-neutral-950 transition-colors sm:w-auto"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Explore Vision 2032
                </span>
                <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </a>
            </motion.div>

            {/* Mobile/Tablet-only: three key stats beneath CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-8 grid grid-cols-3 gap-2 lg:hidden"
            >
              {[
                { value: '₹199 Cr', label: 'FY26 Rev' },
                { value: '32%', label: '2-yr CAGR' },
                { value: 'NSE/BSE', label: 'Listed' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-center border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-3 backdrop-blur-sm transition-colors duration-500"
                >
                  <p className="font-display text-lg font-black leading-none text-neutral-900 dark:text-neutral-100 sm:text-xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 sm:text-[10px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: product image */}
          <motion.div
            style={{ y: yImg, scale: scaleImg, opacity: opacityFade }}
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.35, ease }}
            className="relative mt-10 w-full lg:mt-0"
          >
            {/* Image frame — Fluid aspect ratio on small screens, fixed proportion on desktop */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-200 bg-white/40 shadow-xl backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-2xl md:aspect-[16/9] lg:aspect-[4/5] transition-colors duration-500">

              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=90"
                alt="Hardwyn precision architectural hardware"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Subtle fade at bottom edge to blend into section bg */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-50/90 to-transparent dark:from-neutral-950/90 transition-colors duration-500" />

              {/* Spec tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between border-t border-neutral-300/40 dark:border-neutral-700/40 pt-3 sm:bottom-6 sm:left-6 sm:right-6 sm:pt-4 transition-colors duration-500">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-500">
                    Precision Hardware
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
                    ±0.05 mm tolerance · SS 304 alloy
                  </p>
                </div>
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
              </div>
            </div>

            {/* Corner crosshairs */}
            <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-neutral-300 dark:border-neutral-600" />
            <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-neutral-300 dark:border-neutral-600" />
            <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-neutral-300 dark:border-neutral-600" />
            <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-neutral-300 dark:border-neutral-600" />
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 pt-10 sm:flex-row sm:items-end md:pt-12">

          {/* Scroll hint — hidden on mobile, shown sm+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="hidden items-center gap-3 sm:flex"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="h-10 w-px bg-gradient-to-b from-neutral-400 dark:from-neutral-500 to-transparent"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Scroll to explore
            </span>
          </motion.div>

          {/* Ticker chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
            className="w-full border-l-2 border-red-600 bg-white/80 dark:bg-neutral-900/80 px-5 py-3 backdrop-blur-md shadow-lg transition-colors duration-500 sm:w-auto"
          >
            <span className="block font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
              N S E/ B S E listed with HARDWYN
            </span>
            <div className="mt-1 flex items-center gap-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
              <span>FY26 Revenue</span>
              <span className="font-semibold text-red-600 dark:text-red-500">₹199.86 Cr</span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}