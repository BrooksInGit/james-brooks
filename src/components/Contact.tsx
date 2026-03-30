const LINKS = [
  {
    label: 'Email',
    value: 'james@jamesbrooks.dev',
    href: 'mailto:james@jamesbrooks.dev',
    note: 'Best for project inquiries',
    ariaLabel: 'Send email to james@jamesbrooks.dev',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jamesbrooks',
    href: 'https://linkedin.com/in/jamesbrooks',
    note: 'Connect professionally',
    ariaLabel: 'LinkedIn profile (opens in new tab)',
  },
  {
    label: 'GitHub',
    value: 'github.com/jamesbrooks',
    href: 'https://github.com/jamesbrooks',
    note: 'See the code',
    ariaLabel: 'GitHub profile (opens in new tab)',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold pt-1 shrink-0">
            05 / Contact
          </p>
          <div className="border-t border-paper/20 flex-1 mt-2.5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-24">

          {/* Left */}
          <div>
            <h2 className="font-display font-light text-5xl md:text-6xl text-paper leading-tight mb-6">
              Let&apos;s build<br />
              <span className="italic text-gold">something</span><br />
              together.
            </h2>
            <p className="font-body text-sm leading-7 text-paper/75 max-w-sm">
              I&apos;m open to Analytics Engineering roles, contract engagements, and
              conversations about modern data stack architecture. Currently based
              in a remote-first setup with occasional travel.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-forest-mid animate-pulse" aria-hidden="true" />
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-paper/60">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right — contact links */}
          <div className="space-y-0 border-t border-paper/20">
            {LINKS.map(({ label, value, href, note, ariaLabel }) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start justify-between py-6 border-b border-paper/20 group hover:border-paper/40 transition-colors duration-200"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[11px] tracking-[0.22em] uppercase text-gold">
                    {label}
                  </span>
                  <span className="font-body text-sm text-paper group-hover:text-gold transition-colors duration-200 break-all">
                    {value}
                  </span>
                  <span className="font-body text-xs text-paper/55">{note}</span>
                </div>
                <span
                  className="font-body text-xl text-paper/45 group-hover:text-gold transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
