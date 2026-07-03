import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const SOCIALS = [
  {
    label: 'Email',
    value: 'nguyenquocvu003@gmail.com',
    href: 'mailto:nguyenquocvu003@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '+84 825 797 536',
    href: 'tel:+84825797536',
    Icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/quocvu003',
    href: 'https://github.com/quocvu003',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/quocvu003',
    href: 'https://www.linkedin.com/in/quocvu003/',
    Icon: Linkedin,
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <FadeIn as="p" delay={0} y={20} className="text-[#B600A8] font-medium uppercase tracking-[0.3em] text-xs sm:text-sm">
          Let&apos;s work together
        </FadeIn>

        <FadeIn
          as="h2"
          delay={0.05}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get in touch
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={20}
          className="text-[#D7E2EA] font-light text-center max-w-[540px] leading-relaxed opacity-80"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          Building an MVP, scaling a product, or need AI features shipped fast?
          I&apos;m open to freelance work and startup collaborations — let&apos;s
          ship something great together.
        </FadeIn>

        {/* Contact cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-2">
          {SOCIALS.map(({ label, value, href, Icon }, i) => (
            <FadeIn key={label} delay={0.15 + i * 0.08} y={30}>
              <a
                href={href}
                target={href.startsWith('http') || href === '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-[#D7E2EA]/15 bg-[#141414] px-6 py-5 transition-colors duration-300 hover:border-[#B600A8]/60 hover:bg-[#1a1a1a]"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#D7E2EA]/5 text-[#D7E2EA] transition-colors duration-300 group-hover:text-[#B600A8]">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs opacity-50">
                    {label}
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base truncate">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="ml-auto flex-shrink-0 text-[#D7E2EA] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0"
                />
              </a>
            </FadeIn>
          ))}
        </div>

        {/* CTA buttons */}
        <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="mailto:nguyenquocvu003@gmail.com"
            className="inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 text-sm md:text-base"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid #ffffff',
              outlineOffset: '-3px',
            }}
          >
            <Mail size={18} /> Email Me
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
