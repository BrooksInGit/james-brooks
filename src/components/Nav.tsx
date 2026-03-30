'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { num: '01', label: 'About',    href: '#about' },
  { num: '02', label: 'Projects', href: '#projects' },
  { num: '03', label: 'Skills',   href: '#skills' },
  { num: '04', label: 'Resume',   href: '#resume' },
  { num: '05', label: 'Contact',  href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 60)
      setProgress(max > 0 ? (y / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Skip to main content — visible on keyboard focus */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-paper/96 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-body text-[11px] font-medium tracking-[0.3em] uppercase text-ink hover:text-forest transition-colors duration-200"
          >
            James Brooks
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ num, label, href }) => (
              <a
                key={href}
                href={href}
                className="font-body text-[11px] tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors duration-200"
              >
                <span className="text-gold mr-1.5 font-medium">{num}</span>
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger — meets 44×44px touch target */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-3 -mr-3 min-h-[44px] min-w-[44px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Scroll progress indicator */}
        <div className="h-px bg-rule">
          <div
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-full bg-forest"
            style={{ width: `${progress}%`, transition: 'width 75ms linear' }}
          />
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-paper border-b border-rule overflow-hidden transition-[max-height] duration-300 ${
            menuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          {NAV_LINKS.map(({ num, label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 px-6 py-4 font-body text-sm tracking-wider uppercase text-ink border-b border-rule/40 last:border-0 hover:bg-paper-subtle transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-gold text-[11px]">{num}</span>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
