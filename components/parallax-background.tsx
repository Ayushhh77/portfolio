"use client"

import { motion, type MotionValue } from "framer-motion"

interface ParallaxBackgroundProps {
  y1: MotionValue<number>
  y2: MotionValue<number>
  y3: MotionValue<number>
}

export default function ParallaxBackground({ y1, y2, y3 }: ParallaxBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1 - Slowest */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: y1 }}>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div className="absolute inset-0 opacity-15" style={{ y: y2 }}>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute top-60 right-20 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Layer 3 - Fastest */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y: y3 }}>
        <div className="absolute top-80 left-60 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-60 right-60 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
      </motion.div>

      {/* Geometric shapes with parallax */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-slate-700/20 rounded-lg"
            style={{
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              left: `${10 + i * 12}%`,
              top: `${5 + i * 8}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
