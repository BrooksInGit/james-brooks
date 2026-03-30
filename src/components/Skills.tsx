'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  level: number  // 0–100
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'BI & Visualization',
    skills: [
      { name: 'Power BI',   level: 97 },
      { name: 'Tableau',    level: 84 },
      { name: 'Qlik Sense', level: 75 },
      { name: 'SSRS',       level: 65 },
    ],
  },
  {
    category: 'Analytics Engineering',
    skills: [
      { name: 'dbt',        level: 90 },
      { name: 'Snowflake',  level: 88 },
      { name: 'BigQuery',   level: 72 },
      { name: 'SQL Server', level: 95 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'SQL',     level: 98 },
      { name: 'DAX',     level: 95 },
      { name: 'M Query', level: 88 },
      { name: 'Python',  level: 80 },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'GCP',       level: 72 },
      { name: 'AWS',       level: 65 },
      { name: 'Azure',     level: 68 },
      { name: 'dbt Cloud', level: 85 },
    ],
  },
]

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-body text-xs font-medium text-ink tracking-wide">
          {skill.name}
        </span>
        <span className="font-body text-[11px] text-ink-muted tabular-nums">
          {skill.level}%
        </span>
      </div>
      <div
        className="h-px bg-rule overflow-hidden"
        role="meter"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-forest origin-left"
          style={{
            width: `${skill.level}%`,
            transform: `scaleX(${animate ? 1 : 0})`,
            transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${skill.level * 3}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="bg-paper py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <p className="section-number pt-1 shrink-0">03 / Skills</p>
          <div className="border-t border-rule flex-1 mt-2.5" />
        </div>

        <h2 className="section-title mb-14">
          The Stack
        </h2>

        {/* Skill chart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              {/* Category header */}
              <div className="mb-5 pb-3 border-b-2 border-forest">
                <p className="font-body text-[11px] tracking-[0.22em] uppercase text-forest font-medium">
                  {group.category}
                </p>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} animate={animated} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-12 border-t border-rule">
          <p className="section-number mb-6">Certifications & Education</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'UT Austin AI/ML Certificate',     org: 'McCombs School of Business', year: '2024–2025' },
              { title: 'Microsoft Power BI Data Analyst', org: 'Microsoft',                  year: 'PL-300'    },
              { title: 'dbt Fundamentals',                org: 'dbt Labs',                   year: 'Certified' },
            ].map(({ title, org, year }) => (
              <div
                key={title}
                className="border border-rule p-5 flex flex-col gap-1 hover:border-ink/30 transition-colors duration-200"
              >
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold">{year}</p>
                <p className="font-body text-sm font-medium text-ink leading-snug">{title}</p>
                <p className="font-body text-xs text-ink-muted">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
