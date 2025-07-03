"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealAnimationProps {
  text: string
  className?: string
}

export default function TextRevealAnimation({ text, className = "" }: TextRevealAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
