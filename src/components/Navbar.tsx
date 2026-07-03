import FadeIn from './FadeIn'
import Logo from './Logo'

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 backdrop-blur-md bg-[#0C0C0C]/70 border-b border-[#D7E2EA]/10"
    >
      <a
        href="#top"
        aria-label="Back to top"
        className="transition-opacity duration-200 hover:opacity-80"
      >
        <Logo size={40} />
      </a>
      <div className="flex items-center gap-5 md:gap-9">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-base lg:text-lg transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </div>
    </FadeIn>
  )
}
