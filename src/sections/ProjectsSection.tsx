import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface Project {
  number: string
  category: string
  name: string
  col1: [string, string]
  col2: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Web App · Fandom Platform',
    name: 'FanovaX',
    col1: ['/projects/fanovax-cards.png', '/projects/fanovax-voting.png'],
    col2: '/projects/fanovax-home.png',
  },
  {
    number: '02',
    category: 'Web App · Movie Platform',
    name: 'MovieApp',
    col1: ['/projects/movieapp-detail.png', '/projects/movieapp-list.png'],
    col2: '/projects/movieapp-home.png',
  },
  {
    number: '03',
    category: 'Web App · SaaS Platform',
    name: 'Nexora',
    col1: [
      'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
      'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    ],
    col2: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  },
]

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

interface ProjectCardProps {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  // Card begins scaling once the scroll progress reaches its slot.
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.4rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row — image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {/* Left column 40% */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-2/5">
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right column 60% */}
          <div className="w-3/5">
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
