"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface Hero3DObjectProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function Hero3DObject({ mouseX, mouseY }: Hero3DObjectProps) {
  const rotateX = useTransform(mouseY, [-100, 100], [30, -30])
  const rotateY = useTransform(mouseX, [-100, 100], [-30, 30])

  return (
    <motion.div
      className="relative w-48 h-48"
      style={{
        perspective: "1000px",
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
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
        {/* Complex 3D object with multiple faces */}
        {[
          {
            transform: "rotateY(0deg) translateZ(96px)",
            bg: "from-cyan-500/30 to-blue-500/30",
            border: "border-cyan-400/50",
          },
          {
            transform: "rotateY(60deg) translateZ(96px)",
            bg: "from-blue-500/30 to-purple-500/30",
            border: "border-blue-400/50",
          },
          {
            transform: "rotateY(120deg) translateZ(96px)",
            bg: "from-purple-500/30 to-pink-500/30",
            border: "border-purple-400/50",
          },
          {
            transform: "rotateY(180deg) translateZ(96px)",
            bg: "from-pink-500/30 to-red-500/30",
            border: "border-pink-400/50",
          },
          {
            transform: "rotateY(240deg) translateZ(96px)",
            bg: "from-red-500/30 to-orange-500/30",
            border: "border-red-400/50",
          },
          {
            transform: "rotateY(300deg) translateZ(96px)",
            bg: "from-orange-500/30 to-cyan-500/30",
            border: "border-orange-400/50",
          },
        ].map((face, index) => (
          <div
            key={index}
            className={`absolute w-48 h-48 border backdrop-blur-sm bg-gradient-to-br ${face.bg} ${face.border} rounded-2xl`}
            style={{
              transform: face.transform,
            }}
          >
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-white/40 to-white/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              />
              {/* Inner geometric patterns */}
              <div className="absolute inset-4 border border-white/20 rounded-xl">
                <div className="absolute inset-2 border border-white/10 rounded-lg">
                  <motion.div
                    className="absolute inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-md"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
