"use client"

import { motion } from "framer-motion"

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.path
              d="M10 10 L90 10 L90 90 L10 90 Z"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-primary/30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            />
            <motion.circle
              cx="10"
              cy="10"
              r="2"
              fill="currentColor"
              className="text-primary/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
            />
            <motion.circle
              cx="90"
              cy="90"
              r="2"
              fill="currentColor"
              className="text-primary/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}
