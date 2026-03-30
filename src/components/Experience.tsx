interface Job {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

const JOBS: Job[] = [
  {
    company: 'Kaiser Permanente',
    role: 'Senior BI Developer',
    period: '2022 — Present',
    location: 'Remote',
    highlights: [
      'Architected real-time patient throughput dashboards, compressing reporting cycles from weekly to daily',
      'Led migration of enterprise reporting from legacy Oracle to Tableau + Snowflake stack',
      'Built self-service analytics platform serving 500+ clinical and operational stakeholders',
    ],
  },
  {
    company: 'Warner Bros. Discovery',
    role: 'BI Developer',
    period: '2020 — 2022',
    location: 'Remote',
    highlights: [
      'Built streaming content performance dashboards tracking 80M+ subscriber viewing patterns',
      'Developed ad revenue analytics pipeline processing $500M+ in annual ad inventory data',
      'Implemented automated data quality monitoring, reducing reporting errors by 40%',
    ],
  },
  {
    company: 'Ford Motor Company',
    role: 'Senior Data Analyst / BI Developer',
    period: '2014 — 2020',
    location: 'Dearborn, MI',
    highlights: [
      'Delivered AI Mega Bets executive dashboard tracking C-suite AI investment performance across 12+ source systems',
      'Led Ford Pro Charging Analytics migration from Qlik to Power BI, rebuilding 40+ mission-critical reports',
      'Built connected vehicle data pipeline processing telemetry from 1M+ vehicles globally',
      'Developed global vehicle launch analytics supporting $50B+ in product programs',
    ],
  },
]

export function Experience() {
  return (
    <section id="resume" className="bg-paper-subtle py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <p className="section-number pt-1 shrink-0">04 / Resume</p>
          <div className="border-t border-rule flex-1 mt-2.5" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="section-title">
            Experience
          </h2>
          <a
            href="https://linkedin.com/in/jamesbrooks"
            className="btn-secondary shrink-0 self-start md:self-auto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume on LinkedIn (opens in new tab)"
          >
            View on LinkedIn ↗
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {JOBS.map((job, index) => (
            <div
              key={job.company}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-10 ${
                index < JOBS.length - 1 ? 'border-b border-rule' : ''
              } group`}
            >
              {/* Left: meta */}
              <div className="md:pt-1">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-1.5">
                  {job.period}
                </p>
                <p className="font-body text-xs text-ink-muted">{job.location}</p>
              </div>

              {/* Right: content */}
              <div>
                <div className="mb-5">
                  <h3 className="font-display font-light text-2xl md:text-3xl text-ink group-hover:text-forest transition-colors duration-200 leading-tight">
                    {job.company}
                  </h3>
                  <p className="font-body text-xs tracking-wider uppercase text-ink-muted mt-1">
                    {job.role}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-gold mt-1.5 shrink-0 text-[8px]">▸</span>
                      <span className="font-body text-sm leading-6 text-ink-mid">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education row */}
        <div className="mt-12 pt-12 border-t border-rule">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12">
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">
                2024 — 2025
              </p>
            </div>
            <div>
              <h3 className="font-display font-light text-2xl md:text-3xl text-ink leading-tight">
                University of Texas at Austin
              </h3>
              <p className="font-body text-xs tracking-wider uppercase text-ink-muted mt-1 mb-4">
                Post-Graduate Certificate, AI & Machine Learning · McCombs School of Business
              </p>
              <p className="font-body text-sm leading-7 text-ink-mid max-w-xl">
                Intensive program covering supervised and unsupervised learning, deep neural networks,
                NLP, and model deployment. Applied coursework using Python, Scikit-learn, and TensorFlow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
