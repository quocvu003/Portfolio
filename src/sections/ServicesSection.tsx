import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'MVP & Product Development',
    description:
      'Take your idea from zero to launch with full-stack web apps built on React, Next.js, Node.js, and Laravel — SaaS platforms, dashboards, and products architected to scale as you grow.',
  },
  {
    number: '02',
    name: 'AI Product Engineering',
    description:
      'Build AI-native features into your product — chatbots, semantic search, RAG pipelines, and workflow automation powered by the latest LLMs. Plus AI-accelerated delivery to ship your MVP 30-40% faster.',
  },
  {
    number: '03',
    name: 'API Development & Integration',
    description:
      'Secure RESTful APIs and seamless third-party integrations — payments, auth, and external services wired into your product with clean, well-documented endpoints.',
  },
  {
    number: '04',
    name: 'Landing Pages & Websites',
    description:
      'Fast, responsive, conversion-focused sites crafted with Next.js and TailwindCSS. Pixel-perfect UX that turns visitors into signups and paying customers.',
  },
  {
    number: '05',
    name: 'Performance & Database Optimization',
    description:
      'Scaling fast or hitting bottlenecks? I optimize queries, indexing, and architecture to cut load times and handle high-concurrency reliably — better UX and lower infra costs.',
  },
  {
    number: '06',
    name: 'SEO Optimization',
    description:
      'Rank higher on Google and get found by more customers — technical SEO, on-page optimization, structured data, and fast Core Web Vitals baked into every build.',
  },
  {
    number: '07',
    name: 'Maintenance & Support',
    description:
      'Ongoing updates, monitoring, and iteration to keep your product secure, stable, and shipping — so you can focus on growth.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              ...(i === 0
                ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' }
                : {}),
            }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 pt-1 sm:pt-2 md:pt-3">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
