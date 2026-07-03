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
  const display = char === ' ' ? ' ' : char
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

  // Group characters into words so a word never breaks across lines.
  // Spaces are rendered as plain text nodes, giving genuine line-break points.
  type Token =
    | { type: 'word'; chars: { char: string; index: number }[] }
    | { type: 'space' }
  const tokens: Token[] = []
  let current: { char: string; index: number }[] = []
  chars.forEach((char, i) => {
    if (char === ' ') {
      if (current.length) {
        tokens.push({ type: 'word', chars: current })
        current = []
      }
      tokens.push({ type: 'space' })
    } else {
      current.push({ char, index: i })
    }
  })
  if (current.length) tokens.push({ type: 'word', chars: current })

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, ti) => {
        if (token.type === 'space') return ' '
        return (
          <span key={ti} className="inline-block whitespace-nowrap">
            {token.chars.map(({ char, index }) => (
              <Char
                key={index}
                char={char}
                progress={scrollYProgress}
                range={[index / total, (index + 1) / total]}
              />
            ))}
          </span>
        )
      })}
    </p>
  )
}
