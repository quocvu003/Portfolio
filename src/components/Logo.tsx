interface LogoProps {
  className?: string
  size?: number
}

// Brand mark — matches /public/favicon.svg (gradient "V" on dark rounded square).
export default function Logo({ className = '', size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nguyen Quoc Vu"
      role="img"
    >
      <defs>
        <linearGradient
          id="logo-vu"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#B600A8" />
          <stop offset="55%" stopColor="#7621B0" />
          <stop offset="100%" stopColor="#BE4C00" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="#141414" stroke="#D7E2EA" strokeOpacity="0.12" />
      <path d="M5 8 L16 26 L27 8 L22.5 8 L16 19 L9.5 8 Z" fill="url(#logo-vu)" />
    </svg>
  )
}
