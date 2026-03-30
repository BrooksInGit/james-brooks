type Status = 'IN PROGRESS' | 'DELIVERED' | 'COMING SOON'

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  id: string
  type: string
  status: Status
  title: string
  description: string
  stack: string[]
  featured?: boolean
  links?: ProjectLink[]
}

const PROJECTS: Project[] = [
  {
    id: 'restaurant-pipeline',
    type: 'Personal Project',
    status: 'IN PROGRESS',
    title: 'Restaurant Intelligence Pipeline',
    description:
      'End-to-end analytics pipeline ingesting POS, reservation, and operational data across 50+ restaurant locations. Raw transactional data is modeled with dbt on Snowflake and surfaced in Power BI dashboards that track labor efficiency, throughput, and revenue per cover.',
    stack: ['dbt', 'Snowflake', 'Power BI', 'Python', 'GCP'],
    featured: true,
  },
  {
    id: 'ford-ai-megabets',
    type: 'Case Study',
    status: 'DELIVERED',
    title: 'Ford AI Mega Bets Executive Dashboard',
    description:
      "C-suite Power BI dashboard synthesizing performance data across Ford's strategic AI investments. Aggregated 12+ source systems into a single, exec-ready view with drill-through KPIs and narrative annotations.",
    stack: ['Power BI', 'SQL Server', 'Azure', 'DAX'],
  },
  {
    id: 'ford-pro-charging',
    type: 'Case Study',
    status: 'DELIVERED',
    title: 'Ford Pro Charging Analytics',
    description:
      "Full platform migration from Qlik to Power BI for Ford's commercial EV charging division. Rebuilt 40+ reports with enhanced DAX semantic models, consolidated data architecture, and improved load performance.",
    stack: ['Power BI', 'Qlik Sense', 'SQL', 'DAX', 'M Query'],
  },
  {
    id: 'olist-ecommerce',
    type: 'Personal Project',
    status: 'DELIVERED',
    title: 'Olist E-Commerce Analytics Pipeline',
    description:
      'End-to-end dbt project modeling the Olist Brazilian e-commerce dataset on BigQuery. Raw Kaggle CSVs are staged, transformed through an intermediate layer, and surfaced as business-ready marts covering order performance, customer lifetime value, seller rankings, revenue by category, and delivery efficiency.',
    stack: ['dbt', 'BigQuery', 'Python', 'SQL', 'GCP'],
    links: [
      { label: 'dbt Docs', href: 'https://sparkling-crumble-05c1f8.netlify.app/#!/overview' },
    ],
  },
  {
    id: 'ut-austin-ml',
    type: 'Coursework',
    status: 'COMING SOON',
    title: 'UT Austin AI/ML Projects',
    description:
      'Applied machine learning projects from the UT Austin post-graduate certification program — spanning supervised learning, NLP, and deep learning.',
    stack: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
  },
]

const STATUS_STYLES: Record<Status, string> = {
  'IN PROGRESS': 'bg-gold-light text-gold border-gold/30',
  'DELIVERED':   'bg-forest-light text-forest border-forest/30',
  'COMING SOON': 'bg-paper-subtle text-ink-muted border-rule',
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block font-body text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 border ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  )
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[10px] tracking-[0.18em] uppercase text-forest border border-forest/40 px-3 py-1.5 hover:bg-forest hover:text-paper transition-colors duration-200"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="bg-forest-light border border-forest/20 p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 group hover:bg-forest-light/80 transition-colors duration-300">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="section-number">{project.type}</span>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <h3 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight mb-4 group-hover:text-forest transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-body text-sm leading-7 text-ink-mid max-w-xl">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
          {project.links && <ProjectLinks links={project.links} />}
        </div>
      </div>

      {/* Decorative pipeline diagram */}
      <div className="hidden md:flex flex-col justify-center items-end gap-3 pr-2" aria-hidden="true">
        {['Ingest', 'Transform', 'Model', 'Visualize'].map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="font-body text-[11px] tracking-[0.18em] uppercase text-forest/60">{step}</span>
            <div
              className="h-px bg-forest/30"
              style={{ width: `${(i + 1) * 18 + 20}px` }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-forest/50" />
          </div>
        ))}
      </div>
    </article>
  )
}

function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className="border border-rule p-7 md:p-8 flex flex-col gap-6 group hover:border-ink/30 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <span className="section-number">{project.type}</span>
        <StatusBadge status={project.status} />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-light text-2xl md:text-3xl text-ink leading-tight mb-3 group-hover:text-forest transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-sm leading-7 text-ink-mid">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-2 border-t border-rule">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="tag-muted">{s}</span>
          ))}
        </div>
        {project.links && <ProjectLinks links={project.links} />}
      </div>
    </article>
  )
}

function ComingSoonCard({ project }: { project: Project }) {
  return (
    <article className="border border-dashed border-rule p-6 flex items-center justify-between group hover:border-ink/30 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <span className="section-number">{project.type}</span>
        <h3 className="font-display font-light text-xl text-ink group-hover:text-forest transition-colors duration-200">
          {project.title}
        </h3>
        <div className="hidden sm:flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="tag-muted">{s}</span>
          ))}
        </div>
      </div>
      <StatusBadge status={project.status} />
    </article>
  )
}

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!
  const caseStudies = PROJECTS.filter((p) => !p.featured && p.status === 'DELIVERED')
  const upcoming = PROJECTS.filter((p) => p.status === 'COMING SOON')

  return (
    <section id="projects" className="bg-paper-subtle py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <p className="section-number pt-1 shrink-0">02 / Projects</p>
          <div className="border-t border-rule flex-1 mt-2.5" />
        </div>

        <div className="mb-4">
          <h2 className="section-title">
            Selected<br />
            <span className="italic text-forest">Work</span>
          </h2>
        </div>

        <div className="space-y-4 mt-12">
          {/* Featured */}
          <FeaturedProject project={featured} />

          {/* Case studies — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies.map((p) => (
              <CaseStudyCard key={p.id} project={p} />
            ))}
          </div>

          {/* Coming soon */}
          {upcoming.map((p) => (
            <ComingSoonCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
