"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface Cube3DProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function Cube3D({ mouseX, mouseY }: Cube3DProps) {
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [30, -30])
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-30, 30])

  return (
    <motion.div
      className="relative w-32 h-32"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Cube faces */}
        {[
          { transform: "rotateY(0deg) translateZ(64px)", bg: "bg-emerald-500/20" },
          { transform: "rotateY(90deg) translateZ(64px)", bg: "bg-blue-500/20" },
          { transform: "rotateY(180deg) translateZ(64px)", bg: "bg-purple-500/20" },
          { transform: "rotateY(-90deg) translateZ(64px)", bg: "bg-pink-500/20" },
          { transform: "rotateX(90deg) translateZ(64px)", bg: "bg-yellow-500/20" },
          { transform: "rotateX(-90deg) translateZ(64px)", bg: "bg-red-500/20" },
        ].map((face, index) => (
          <div
            key={index}
            className={`absolute w-32 h-32 border border-emerald-400/30 backdrop-blur-sm ${face.bg}`}
            style={{
              transform: face.transform,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
