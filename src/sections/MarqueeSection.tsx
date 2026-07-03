// Tech stack shown as an infinite auto-scrolling logo strip.
// Logos are pulled from Simple Icons CDN and tinted to the site's light color.
const TECH = [
  // Web front-end
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'TailwindCSS', slug: 'tailwindcss' },
  // Web back-end
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'NestJS', slug: 'nestjs' },
  { name: 'Python', slug: 'python' },
  { name: 'Laravel', slug: 'laravel' },
  { name: 'PHP', slug: 'php' },
  // Databases
  { name: 'MySQL', slug: 'mysql' },
  { name: 'MongoDB', slug: 'mongodb' },
  // Tools
  { name: 'Docker', slug: 'docker' },
  { name: 'Git', slug: 'git' },
  { name: 'Postman', slug: 'postman' },
  // Enterprise (secondary)
  { name: 'SAP ABAP', slug: 'sap' },
]

// Duplicated once so the -50% translate loops seamlessly.
const LOOP = [...TECH, ...TECH]

function TechPill({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0 rounded-2xl border border-[#D7E2EA]/10 bg-[#141414] px-6 py-4">
      <img
        src={`https://cdn.simpleicons.org/${slug}/D7E2EA`}
        alt={`${name} logo`}
        loading="lazy"
        className="w-7 h-7 opacity-80"
      />
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 overflow-hidden">
      <p className="text-center text-[#D7E2EA] font-light uppercase tracking-[0.3em] text-xs sm:text-sm opacity-50 mb-10 sm:mb-14">
        My Tech Stack
      </p>

      <div className="relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#0C0C0C] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#0C0C0C] to-transparent" />

        <div className="marquee-track flex gap-4 sm:gap-5 w-max">
          {LOOP.map((tech, i) => (
            <TechPill key={`${tech.slug}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
