const CAREER_STOPS = [
  { period: '2014 — 2020', company: 'Ford Motor Company',     location: 'Dearborn, MI' },
  { period: '2020 — 2022', company: 'Warner Bros. Discovery', location: 'Remote'       },
  { period: '2022 — Now',  company: 'Kaiser Permanente',      location: 'Remote'       },
]

export function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex items-start gap-6 mb-16 md:mb-24">
          <p className="section-number pt-1 shrink-0">01 / About</p>
          <div className="border-t border-rule flex-1 mt-2.5" />
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-24">

          {/* Left — career timeline */}
          <div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-ink leading-tight mb-10">
              A decade of<br />
              <span className="italic text-forest">turning signals<br />into decisions.</span>
            </h2>

            <div className="border-t border-rule">
              {CAREER_STOPS.map(({ period, company, location }) => (
                <div
                  key={company}
                  className="flex flex-col py-5 border-b border-rule/60 group"
                >
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-1">
                    {period}
                  </p>
                  <p className="font-body text-sm font-medium text-ink group-hover:text-forest transition-colors duration-200">
                    {company}
                  </p>
                  <p className="font-body text-xs text-ink-muted">{location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div className="space-y-7">
            <p className="font-display text-2xl md:text-3xl font-light text-ink leading-relaxed">
              I&apos;ve spent 10+ years building the analytics infrastructure that helps
              executives, operators, and clinicians make faster, better decisions.
            </p>

            <div className="space-y-4">
              <p className="font-body text-sm leading-7 text-ink-mid">
                My career started at Ford Motor Company, where I cut my teeth on
                large-scale enterprise reporting &mdash; eventually owning dashboards that
                tracked AI investment performance at the C-suite level and leading
                a full Qlik &rarr; Power BI migration for Ford&apos;s commercial EV charging division.
              </p>
              <p className="font-body text-sm leading-7 text-ink-mid">
                From there I moved into streaming and media at Warner Bros. Discovery,
                building the ad revenue and content performance pipelines that informed
                decisions across an 80M+ subscriber platform. At Kaiser Permanente,
                I&apos;ve shifted into healthcare analytics &mdash; architecting real-time patient
                throughput dashboards and leading the move from Oracle to a modern
                Tableau + Snowflake stack.
              </p>
              <p className="font-body text-sm leading-7 text-ink-mid">
                Now I&apos;m deliberately pivoting toward Analytics Engineering &mdash; building
                the data models and transformation pipelines (dbt, Snowflake, GCP)
                that sit upstream of the dashboards I&apos;ve spent years delivering.
                I&apos;m also deepening on the AI/ML side through a UT Austin post-graduate
                certification, bringing quantitative modeling into the mix.
              </p>
            </div>

            {/* Education highlight */}
            <div className="border-l-2 border-gold pl-5 pt-1">
              <p className="font-body text-[11px] tracking-[0.22em] uppercase text-gold mb-1">
                Education
              </p>
              <p className="font-body text-sm font-medium text-ink">
                UT Austin &mdash; AI/ML Post-Graduate Certification
              </p>
              <p className="font-body text-xs text-ink-muted mt-0.5">
                McCombs School of Business &middot; 2024&ndash;2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
