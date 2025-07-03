"use client"

import { motion, type MotionValue } from "framer-motion"

interface AdvancedMouseFollowerProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function AdvancedMouseFollower({ mouseX, mouseY }: AdvancedMouseFollowerProps) {
  return (
    <>
      {/* Main animated dot cursor */}
      <motion.div
        className="fixed w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference shadow-lg"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          boxShadow: [
            "0 0 10px rgba(16, 185, 129, 0.6)",
            "0 0 20px rgba(6, 182, 212, 0.8)",
            "0 0 10px rgba(16, 185, 129, 0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed w-8 h-8 border border-emerald-400/50 rounded-full pointer-events-none z-40"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
        }}
      />

      {/* Particle trail */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none z-30"
          style={{
            width: `${4 - i * 0.5}px`,
            height: `${4 - i * 0.5}px`,
            background: `rgba(16, 185, 129, ${0.6 - i * 0.1})`,
            left: mouseX,
            top: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{
            type: "spring",
            stiffness: 60 - i * 8,
            damping: 25 + i * 3,
          }}
        />
      ))}

      {/* Orbital dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbital-${i}`}
          className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-35"
          style={{
            background: i % 2 === 0 ? "#10b981" : "#06b6d4",
            left: mouseX,
            top: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: [0, Math.cos(i * 2.1) * 20, 0, Math.cos(i * 2.1 + Math.PI) * 20],
            y: [0, Math.sin(i * 2.1) * 20, 0, Math.sin(i * 2.1 + Math.PI) * 20],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Pulse ring */}
      <motion.div
        className="fixed border border-emerald-400/20 rounded-full pointer-events-none z-25"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: [0, 60],
          height: [0, 60],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
      />
    </>
  )
}
