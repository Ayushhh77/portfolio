"use client"

import { motion } from "framer-motion"

export default function HolographicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Holographic Grid */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border border-cyan-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Holographic Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="hologram" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="cyan" stopOpacity="0.3" />
            <stop offset="50%" stopColor="magenta" stopOpacity="0.3" />
            <stop offset="100%" stopColor="yellow" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 12.5}%`}
            y1="0%"
            x2={`${i * 12.5}%`}
            y2="100%"
            stroke="url(#hologram)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
