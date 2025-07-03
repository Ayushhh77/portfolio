"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    let glitchInterval: NodeJS.Timeout

    const startGlitch = () => {
      let iterations = 0
      glitchInterval = setInterval(() => {
        setGlitchText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index]
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join(""),
        )

        if (iterations >= text.length) {
          clearInterval(glitchInterval)
          setGlitchText(text)
        }

        iterations += 1 / 3
      }, 30)
    }

    const glitchTimeout = setTimeout(() => {
      startGlitch()
    }, 1000)

    const repeatGlitch = setInterval(() => {
      if (Math.random() > 0.95) {
        startGlitch()
      }
    }, 3000)

    return () => {
      clearTimeout(glitchTimeout)
      clearInterval(glitchInterval)
      clearInterval(repeatGlitch)
    }
  }, [text])

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      {glitchText}
      <motion.span
        className="absolute inset-0 text-cyan-400/30"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 4,
        }}
      >
        {glitchText}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-pink-400/30"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 0.7, 0, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 4,
          delay: 0.1,
        }}
      >
        {glitchText}
      </motion.span>
    </motion.h1>
  )
}
