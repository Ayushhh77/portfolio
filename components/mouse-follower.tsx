"use client"

import { motion, type MotionValue } from "framer-motion"

interface MouseFollowerProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function MouseFollower({ mouseX, mouseY }: MouseFollowerProps) {
  return (
    <>
      {/* Main cursor with enhanced glow */}
      <motion.div
        className="fixed w-6 h-6 bg-zinc-400 rounded-full pointer-events-none z-50 mix-blend-difference shadow-lg"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Enhanced trailing cursor with 3D effect */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-zinc-500/50 rounded-full pointer-events-none z-40 backdrop-blur-sm"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      />

      {/* Enhanced particle trail with varying sizes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none z-30"
          style={{
            width: `${6 - i}px`,
            height: `${6 - i}px`,
            backgroundColor: `rgba(161, 161, 170, ${0.6 - i * 0.08})`,
            left: mouseX,
            top: mouseY,
            x: "-50%",
            y: "-50%",
          }}
          transition={{
            type: "spring",
            stiffness: 30 - i * 3,
            damping: 15 + i * 2,
          }}
        />
      ))}

      {/* Orbital particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbital-${i}`}
          className="fixed w-2 h-2 bg-zinc-400/40 rounded-full pointer-events-none z-35"
          style={{
            left: mouseX,
            top: mouseY,
          }}
          animate={{
            x: [0, Math.cos(i * 2.1) * 30, 0, Math.cos(i * 2.1 + Math.PI) * 30],
            y: [0, Math.sin(i * 2.1) * 30, 0, Math.sin(i * 2.1 + Math.PI) * 30],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </>
  )
}
