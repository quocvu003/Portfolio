import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

interface CharProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const display = char === ' ' ? ' ' : char
  return (
    <span className="relative inline-block whitespace-pre">
      {/* invisible placeholder preserves layout */}
      <span style={{ opacity: 0.2 }}>{display}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
        aria-hidden="true"
      >
        {display}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / total
        const end = (i + 1) / total
        return (
          <Char
            key={i}
            char={char === ' ' ? ' ' : char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}
