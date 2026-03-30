'use client'

import { useEffect, useState } from 'react'

// Career data points (2014–2026) — each bar represents a year
const BARS = [
  { h: 42, d: 0   },
  { h: 51, d: 70  },
  { h: 58, d: 140 },
  { h: 53, d: 210 },
  { h: 67, d: 280 },
  { h: 73, d: 350 },
  { h: 69, d: 420 },
  { h: 80, d: 490 },
  { h: 86, d: 560 },
  { h: 84, d: 630 },
  { h: 92, d: 700 },
  { h: 96, d: 770 },
]

const TICKER_ITEMS = [
  'Ford Motor Company',
  'Warner Bros. Discovery',
  'Kaiser Permanente',
  'dbt',
  'Snowflake',
  'Power BI',
  'Tableau',
  'GCP',
  'AWS',
  'Python',
  'SQL',
  'UT Austin AI/ML',
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      // Show immediately without animation
      setMounted(true)
      return
    }

    const t = setTimeout(() => setMounted(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-paper flex flex-col overflow-hidden"
    >
      {/* Background bar chart — career trajectory, decorative */}
      <div
        className="absolute inset-x-0 bottom-10 flex items-end gap-[3px] px-6 md:px-12 h-[58%] pointer-events-none"
        aria-hidden="true"
      >
        {BARS.map((bar, i) => (
          <div
            key={i}
            className="flex-1 origin-bottom bg-forest/[0.055]"
            style={{
              height: `${bar.h}%`,
              transform: `scaleY(${mounted ? 1 : 0})`,
              transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${bar.d}ms`,
            }}
          />
        ))}
      </div>

      {/* Horizontal grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[20, 40, 60].map((pct) => (
          <div
            key={pct}
            className="absolute inset-x-0 border-t border-ink/[0.035]"
            style={{ bottom: `calc(40px + ${pct * 0.58}%)` }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex-1 flex flex-col px-6 md:px-12 pt-24 pb-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 1s ease-out 1.2s, transform 1s ease-out 1.2s',
        }}
      >
        {/* Top meta row */}
        <div className="flex items-center justify-between py-5 border-b border-rule">
          <p className="font-body text-[11px] tracking-[0.26em] uppercase text-ink-muted">
            Senior BI Developer → Analytics Engineer
          </p>
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ink-muted hidden sm:block">
            2014 — 2026
          </p>
        </div>

        {/* Name — center of gravity */}
        <div className="flex-1 flex flex-col justify-center py-10 md:py-16">
          <h1
            className="font-display leading-[0.88] tracking-tight"
            aria-label="James Brooks"
          >
            <span
              className="block text-ink font-light"
              style={{ fontSize: 'clamp(3.8rem, 12.5vw, 13rem)' }}
            >
              James
            </span>
            <span
              className="block text-forest font-light italic"
              style={{
                fontSize: 'clamp(3.8rem, 12.5vw, 13rem)',
                marginLeft: '0.06em',
              }}
            >
              Brooks
            </span>
          </h1>
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-rule pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <p className="font-display text-[clamp(1.1rem,2.2vw,1.6rem)] font-light italic text-ink/75 leading-snug max-w-[280px] md:max-w-xs">
            Turning raw data into<br />strategic intelligence.
          </p>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <div className="flex gap-3 flex-wrap">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#resume" className="btn-secondary">
                Résumé ↗
              </a>
            </div>
            <p className="font-body text-[11px] tracking-[0.22em] uppercase text-ink-muted">
              Ford · WBD · Kaiser · UT Austin AI/ML
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling ticker — decorative, aria-hidden */}
      <div
        className="relative z-10 border-t border-rule overflow-hidden h-9 flex items-center shrink-0 ticker-wrap"
        aria-hidden="true"
      >
        <div className="animate-ticker flex whitespace-nowrap will-change-transform">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-body text-[11px] tracking-[0.26em] uppercase text-ink-muted px-8"
            >
              {item}
              <span className="text-gold ml-8">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
