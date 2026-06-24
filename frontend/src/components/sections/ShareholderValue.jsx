'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../layout/Container.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

const TIMELINE = [
  {
    year: '1965',
    label: 'Heritage Founded',
    desc: 'Promoter family establishes a trusted trading enterprise in premium architectural hardware.',
    accent: false,
  },
  {
    year: '2017',
    label: 'Corporate Evolution',
    desc: 'Formally incorporated, transitioning from family-run trade to a structured corporate entity.',
    accent: false,
  },
  {
    year: 'Apr 2018',
    label: 'Public Listing',
    desc: 'Dual-listed on NSE & BSE, raising growth capital and entering the organized manufacturing sector.',
    accent: true,
  },
  {
    year: 'Jan 2020',
    label: 'Hardwyn India Ltd.',
    desc: 'Strategic rebrand signaling the full pivot from trading roots to a precision-manufacturing identity.',
    accent: false,
  },
  {
    year: 'Jun 2023',
    label: '10:1 Stock Split',
    desc: 'Face value ₹10 → ₹1. Shareholder equity multiplied 10×, democratizing market liquidity.',
    accent: true,
  },
  {
    year: 'Jun 2026',
    label: '2:5 Bonus Issue',
    desc: 'Board approved 2 free shares per 5 held from retained earnings. Shareholder vote: Jul 3, 2026.',
    accent: true,
  },
];

const REVENUE_STREAMS = [
  {
    label: 'Omnichannel & D2C',
    pct: 40,
    desc: 'Direct-to-consumer scaling eliminates middlemen, compressing the margin stack.',
  },
  {
    label: 'Institutional B2B',
    pct: 35,
    desc: '₹4.36 Cr order secured June 2026. High-value contract pipeline expanding.',
  },
  {
    label: 'Global Exports',
    pct: 15,
    desc: 'Trial orders in international markets — a nascent but exponential revenue stream.',
  },
  {
    label: 'Distribution Channel',
    pct: 10,
    desc: 'Established dealer network sustaining predictable base revenue with consistent turns.',
  },
];

const KEY_METRICS = [
  { value: '₹199.86 Cr', label: 'FY26 Revenue', note: 'Audited' },
  { value: '18%', label: 'PAT Growth', note: 'FY26 YoY' },
  { value: '±0.05mm', label: 'Tolerance', note: 'Manufacturing precision' },
  { value: '₹4.36 Cr', label: 'Recent B2B Order', note: 'Jun 2026' },
];

function WealthSimulator() {
  const [shares, setShares] = useState(1000);
  const [mode, setMode] = useState('pre');

  const afterSplit = mode === 'pre' ? shares * 10 : shares;
  const afterBonus = Math.floor(afterSplit * (7 / 5));
  const bonusReceived = afterBonus - afterSplit;
  const totalMultiplier = mode === 'pre' ? (afterBonus / shares).toFixed(1) : (afterBonus / shares).toFixed(2);

  const fmt = (n) => n.toLocaleString('en-IN');

  return (
    <div className="relative overflow-hidden border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-2xl md:p-8 backdrop-blur-sm transition-colors duration-500">
      
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />

      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-600 dark:text-red-500">
            Interactive · Wealth Simulator
          </p>
          <h3 className="mt-2 text-xl font-black tracking-tight text-neutral-900 dark:text-neutral-100">
            Compound Equity Calculator
          </h3>
        </div>
        
        {/* Mode toggle */}
        <div className="flex shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-800 dark:bg-neutral-950">
          {[
            { id: 'pre', label: 'Pre-Split' },
            { id: 'post', label: 'Post-Split' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => { setMode(m.id); setShares(m.id === 'pre' ? 1000 : 10000); }}
              className={`px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                mode === m.id
                  ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Area */}
      <div className="mt-8 rounded-lg border border-neutral-100 bg-neutral-50 p-5 dark:border-neutral-800/50 dark:bg-neutral-950/50">
        <div className="mb-4 flex justify-between font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <span>Shares held ({mode === 'pre' ? 'before Jun 2023' : 'today'})</span>
          <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">{fmt(shares)}</span>
        </div>
        
        <input
          type="range"
          min={mode === 'pre' ? 100 : 1000}
          max={mode === 'pre' ? 50000 : 500000}
          step={mode === 'pre' ? 100 : 1000}
          value={shares}
          onChange={(e) => setShares(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full accent-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/50"
        />
        
        <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
          <span>{mode === 'pre' ? '100' : '1,000'}</span>
          <span>{mode === 'pre' ? '50,000' : '5,00,000'}</span>
        </div>
      </div>

      {/* Result cascade */}
      <div className="mt-6 space-y-3">
        {/* Step 1: Starting */}
        <div className="flex items-center justify-between border-l-2 border-neutral-300 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800/30">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-300">Base Shares</span>
          </div>
          <span className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100">
            {fmt(shares)}
          </span>
        </div>

        {/* Step 2: Split (Conditionally Rendered) */}
        <AnimatePresence>
          {mode === 'pre' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between border-l-2 border-neutral-300 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800/30 overflow-hidden"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-300 block">
                  After 10:1 Split
                </span>
                <span className="font-mono text-[10px] text-green-600 dark:text-green-500">
                  +{fmt(afterSplit - shares)} shares
                </span>
              </div>
              <span className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100">
                {fmt(afterSplit)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Bonus */}
        <div className="flex items-center justify-between border-l-2 border-red-600 bg-red-50/50 px-4 py-3 dark:border-red-600/80 dark:bg-red-900/10">
          <div>
            <span className="font-mono text-xs font-semibold text-red-900 dark:text-red-200 block">
              After 2:5 Bonus Issue
            </span>
            <span className="font-mono text-[10px] text-green-600 dark:text-green-400">
              +{fmt(bonusReceived)} free
            </span>
          </div>
          <span className="text-xl font-black text-red-600 dark:text-red-500">
            {fmt(afterBonus)}
          </span>
        </div>
      </div>

      {/* Multiplier Footer */}
      <div className="mt-8 flex items-end justify-between border-t border-neutral-200 pt-5 dark:border-neutral-800">
        <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 max-w-[120px] leading-tight">
          Total Equity Multiplier
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100">
            {totalMultiplier}×
          </span>
        </div>
      </div>

      <p className="mt-5 font-mono text-[9px] leading-relaxed text-neutral-400 dark:text-neutral-500">
        Illustrative purposes only. Bonus approval subject to shareholder vote Jul 3, 2026. Past
        corporate actions do not guarantee future performance.
      </p>
    </div>
  );
}

export default function ShareholderValue() {
  return (
    <section
      id="shareholder-value"
      className="border-y border-neutral-200 bg-neutral-50 py-16 transition-colors duration-500 dark:border-neutral-800 dark:bg-neutral-950 md:py-24"
    >
      <Container>
        <Eyebrow code="H–07" label="Shareholder Value" />

        <ScrollReveal className="mt-8">
          <SectionTitle kicker="From a 1965 family trading desk to India's only listed architectural hardware company.">
            Decades of legacy.
            <br />
            <span className="text-red-600 dark:text-red-500 drop-shadow-sm">Engineered into returns.</span>
          </SectionTitle>
        </ScrollReveal>

        {/* ══ CHAPTER I: THE GENESIS ══ */}
        <ScrollReveal className="mt-16 md:mt-24" delay={0.05}>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Chapter I
            </span>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              The Genesis
            </span>
          </div>
          <h3 className="mb-8 text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl">
            Six decades. One trajectory.
          </h3>

          {/* Timeline — Snap scrolling on mobile, Grid on desktop */}
          <div className="relative -mx-4 overflow-x-auto px-4 pb-6 scrollbar-hide sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex w-max snap-x snap-mandatory gap-6 sm:w-auto sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-4 sm:snap-none">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative w-[260px] snap-start border-l border-neutral-200 pl-5 pr-2 dark:border-neutral-800 sm:w-auto sm:pl-4"
                >
                  <span
                    className={`absolute -left-[3.5px] top-[6px] h-1.5 w-1.5 rounded-full ${
                      item.accent
                        ? 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]'
                        : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                  />
                  <span
                    className={`font-mono text-[11px] font-bold tracking-[0.1em] ${
                      item.accent ? 'text-red-600 dark:text-red-500' : 'text-neutral-400 dark:text-neutral-500'
                    }`}
                  >
                    {item.year}
                  </span>
                  <p className="mt-2 text-[14px] font-bold leading-tight text-neutral-900 dark:text-neutral-100">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ══ CHAPTER II: THE PROFIT ENGINE ══ */}
        <ScrollReveal className="mt-20 md:mt-32" delay={0.05}>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Chapter II
            </span>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              The Profit Engine
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <h3 className="mb-5 text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl leading-snug">
                One niche. Essential to every building in India.
              </h3>
              <p className="mb-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                Hardwyn dominates the intersection of two structural tailwinds: India's
                construction boom and the shift to organized hardware retail. Their model
                captures margin at every layer — from ±0.05mm precision manufacturing
                down to direct-to-consumer distribution.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Glass Fittings', 'Door Closers', 'Architectural Hinges', 'Smart Locks', 'SS Railings'].map(
                  (p) => (
                    <span
                      key={p}
                      className="border border-neutral-200 bg-white px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                    >
                      {p}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Revenue stream bars */}
            <div className="flex flex-col justify-center space-y-6">
              {REVENUE_STREAMS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                      {s.label}
                    </span>
                    <span className="font-mono text-xs font-black text-red-600 dark:text-red-500">{s.pct}%</span>
                  </div>
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-red-600 dark:bg-red-500"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key metrics Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-16">
            {KEY_METRICS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm transition-colors duration-500"
              >
                <p className="text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {s.label}
                </p>
                <p className="mt-1 font-mono text-[9px] text-neutral-400 dark:text-neutral-600">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ══ CHAPTER III: WEALTH CREATION ══ */}
        <ScrollReveal className="mt-20 md:mt-32" delay={0.05}>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Chapter III
            </span>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Wealth Creation
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
            {/* Narrative + action cards */}
            <div>
              <h3 className="mb-5 text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl leading-snug">
                A track record of rewarding long-term holders.
              </h3>
              <p className="mb-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                Hardwyn has executed two landmark corporate actions that multiply shareholder
                equity without requiring a single rupee of additional investor capital — each
                fully funded from the company's retained earnings.
              </p>

              <div className="space-y-4">
                {/* 2023 Split */}
                <div className="relative border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/40 transition-colors duration-500">
                  <span className="absolute right-5 top-5 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    Completed
                  </span>
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-neutral-100 font-mono text-[11px] font-bold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 rounded-sm">
                      2023
                    </div>
                    <div className="pr-12">
                      <p className="text-lg font-black text-neutral-900 dark:text-neutral-100">
                        10:1 Stock Split
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Face value ₹10 → ₹1
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Multiplied the share count 10× overnight — democratizing access for retail investors and dramatically expanding market liquidity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2026 Bonus */}
                <div className="relative border border-red-600/30 bg-red-50/50 p-6 dark:border-red-500/30 dark:bg-red-900/10 transition-colors duration-500">
                  <span className="absolute right-5 top-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600 dark:bg-red-500" />
                    Pending
                  </span>
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-100 font-mono text-[11px] font-bold text-red-700 dark:bg-red-900/50 dark:text-red-400 rounded-sm">
                      2026
                    </div>
                    <div className="pr-16">
                      <p className="text-lg font-black text-neutral-900 dark:text-neutral-100">
                        2:5 Bonus Issue
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Shareholder vote: Jul 3, 2026
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        For every 5 shares held, investors receive 2 additional shares at zero cost — capitalizing retained earnings directly into equity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive simulator */}
            <div className="sticky top-24">
              <WealthSimulator />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}