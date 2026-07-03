import { Github, Linkedin, Mail } from 'lucide-react'

const NAV = ['About', 'Services', 'Projects', 'Contact']

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/quocvu003', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/quocvu003/', Icon: Linkedin },
  { label: 'Email', href: 'mailto:nguyenquocvu003@gmail.com', Icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="hero-heading font-black uppercase text-2xl tracking-tight">
            Nguyen Quoc Vu
          </span>
          <span className="text-[#D7E2EA] font-light text-sm opacity-50 uppercase tracking-widest">
            Software &amp; Web Developer
          </span>
        </div>

        {/* Quick links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {NAV.map((link) => (
            <a
              key={link}
              href={link === 'Contact' ? '#contact' : `#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') || href === '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA] opacity-70 transition-all duration-300 hover:opacity-100 hover:border-[#B600A8]/60 hover:text-[#B600A8]"
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#D7E2EA]/10 text-center">
        <span className="text-[#D7E2EA] font-light text-xs opacity-40">
          © 2026 Nguyen Quoc Vu
        </span>
      </div>
    </footer>
  )
}
