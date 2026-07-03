import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const STATS = [
  { value: '30-40%', label: 'Faster delivery with AI' },
  { value: '99%', label: 'Logic accuracy via TDD' },
  { value: 'Full-stack', label: 'React · Next · Node · Laravel' },
]

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Center — badge + giant heading + role */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 md:px-10 pt-24 md:pt-28">
        <FadeIn
          delay={0.1}
          y={20}
          className="flex items-center gap-2.5 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 px-4 py-1.5 mb-4 sm:mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-[0.65rem] sm:text-xs">
            Available for work
          </span>
        </FadeIn>

        <div className="overflow-hidden w-full">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[15vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, i&apos;m Vu
            <span className="sr-only">
              {' '}
              — Nguyen Quoc Vu, software and web developer specializing in
              Laravel, modern JavaScript, and AI-driven web applications.
            </span>
          </FadeIn>
        </div>

        <FadeIn
          as="p"
          delay={0.28}
          y={20}
          className="text-[#D7E2EA] font-light text-center mt-3 sm:mt-5"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}
        >
          <span className="font-medium">Nguyen Quoc Vu</span>
          <span className="opacity-50"> — Software &amp; Web Developer</span>
        </FadeIn>
      </div>

      {/* Bottom bar — stats + CTAs */}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 px-6 md:px-10 pb-8 sm:pb-10">
        {/* Stats */}
        <FadeIn delay={0.4} y={20} className="flex flex-wrap gap-6 sm:gap-10">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span className="hero-heading font-black leading-none text-2xl sm:text-3xl md:text-4xl">
                {stat.value}
              </span>
              <span className="text-[#D7E2EA] font-light uppercase tracking-wider text-[0.6rem] sm:text-xs opacity-50 mt-1.5 max-w-[130px]">
                {stat.label}
              </span>
            </div>
          ))}
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full text-[#D7E2EA] font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm md:text-base border border-[#D7E2EA]/25 transition-colors duration-300 hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5"
          >
            View Work <ArrowUpRight size={18} />
          </a>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  )
}
