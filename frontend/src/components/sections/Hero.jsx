'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../layout/Container.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

export default function Hero() {
  const containerRef = useRef(null);

  // Scroll-linked animation hooks for the parallax "Monolith" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBackgroundText = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yImageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Standard smooth easing curve for initial load reveals
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-neutral-50 text-neutral-900 transition-colors duration-500 dark:bg-neutral-950 dark:text-neutral-200 selection:bg-red-600/20 dark:selection:bg-red-600/30"
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Cinematic vignette and radial lighting */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,rgba(240,240,245,1)_100%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(30,30,35,0.4)_0%,rgba(10,10,11,1)_100%)] z-0 transition-colors duration-500"
        aria-hidden="true"
      />

      {/* 2. Blueprint floor grid for engineering feel */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 transition-colors duration-500" 
        aria-hidden="true" 
      />

      {/* 3. The "Monolith" Background Typography (Parallax) */}
      <motion.div 
        style={{ y: yBackgroundText, opacity: opacityFade }}
        className="absolute top-1/4 left-0 w-full overflow-hidden text-center z-0 flex flex-col items-center select-none pointer-events-none"
      >
        <span className="text-[18vw] font-black leading-none tracking-tighter text-neutral-200 dark:text-neutral-800/20 whitespace-nowrap transition-colors duration-500">
          ENGINEERED
        </span>
      </motion.div>

      {/* --- FOREGROUND CONTENT --- */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between py-12 md:py-20">
        
        {/* Top row — spec markers */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: customEase }}
          className="flex items-start justify-between"
        >
          <Eyebrow code="H–01" label="Corporate Vision" />
          <div className="hidden text-right font-mono text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 md:block transition-colors duration-500">
            <span>LAT 28.6692 · LON 77.4538</span>
            <br />
            <span>INDIA'S PREMIER LISTED HARDWARE</span>
          </div>
        </motion.div>

        {/* Main statement & Visual Grid */}
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] lg:gap-20 flex-grow content-center mt-12 md:mt-0">
          
          {/* Left Column: Typography */}
          <div className="relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: customEase }}
              className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tighter text-neutral-900 dark:text-neutral-100 transition-colors duration-500"
            >
              Built for every space.
              <br />
              <span className="text-neutral-500">Engineered for </span>
              <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.2)] dark:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-500">excellence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: customEase }}
              className="mt-6 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:mt-8 md:text-lg transition-colors duration-500"
            >
              India's only listed architectural hardware company. Pioneering the organized sector with tolerances most buyers will never measure — and never need to.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6, ease: customEase }}
               className="mt-10"
            >
              <a href="#vision-2032" className="group relative inline-block overflow-hidden border border-neutral-900 dark:border-transparent bg-neutral-900 dark:bg-neutral-100 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white dark:text-neutral-950 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-300 w-full text-center md:w-auto">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Explore Vision 2032
                </span>
                <div className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-500 ease-out group-hover:translate-x-0 z-0" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Fidelity Product Visual (Now Visible on Mobile) */}
          <motion.div
            style={{ y: yImageParallax, scale: scaleDown, opacity: opacityFade }}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.4, ease: customEase }}
            className="relative w-full max-w-sm mx-auto md:max-w-none mt-8 md:mt-0"
          >
            {/* Aspect ratio container with adaptive border effect */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-200 bg-white/50 shadow-xl dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-2xl backdrop-blur-sm transition-colors duration-500">
              
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=90"
                alt="Hardwyn precision architectural hardware"
                loading="eager"
                className="h-full w-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              
              {/* Internal Adaptive Vignette and Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent opacity-90 dark:from-neutral-950 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/80 via-transparent to-transparent dark:from-neutral-950/80 transition-colors duration-500" />
              
              {/* Product Specifications Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-neutral-300/50 dark:border-neutral-700/50 pt-4 transition-colors duration-500">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-500 transition-colors duration-500">
                    Precision Hardware
                  </p>
                  <p className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                    ±0.05 mm tolerance · SS 304 alloy
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              </div>
            </div>

            {/* Corner Crosshairs (Adaptive Colors) */}
            <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-neutral-300 dark:border-neutral-500 transition-colors duration-500" />
            <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-neutral-300 dark:border-neutral-500 transition-colors duration-500" />
            <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-neutral-300 dark:border-neutral-500 transition-colors duration-500" />
            <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-neutral-300 dark:border-neutral-500 transition-colors duration-500" />
          </motion.div>
        </div>

        {/* Bottom row — Scroll hint + Stock Ticker (Now aligned for Mobile) */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-6 pt-10 mt-8 md:mt-0">
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center gap-4"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-12 w-[1px] bg-gradient-to-b from-neutral-400 dark:from-neutral-500 to-transparent transition-colors duration-500" 
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-500">
              Scroll to explore
            </span>
          </motion.div>

          {/* Financials Ticker Chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: customEase }}
            className="w-full md:w-auto border-l-2 border-red-600 bg-white/80 dark:bg-neutral-900/80 px-5 py-3 font-mono text-xs text-neutral-600 dark:text-neutral-400 backdrop-blur-md shadow-lg transition-colors duration-500"
          >
            <span className="block font-bold text-neutral-900 dark:text-neutral-100 tracking-widest transition-colors duration-500">HARDWYN [NSE/BSE]</span>
            <div className="mt-1 flex items-center justify-between md:justify-start gap-3">
              <span>FY26 Revenue</span>
              <span className="text-red-600 dark:text-red-500 font-semibold transition-colors duration-500">₹199.86 Cr</span>
              <span className="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-green-500/20">
                <span className="h-1 w-1 rounded-full bg-green-500" />
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}