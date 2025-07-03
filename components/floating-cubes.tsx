"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface FloatingCubesProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function FloatingCubes({ mouseX, mouseY }: FloatingCubesProps) {
  const rotateX = useTransform(mouseY, [-50, 50], [15, -15])
  const rotateY = useTransform(mouseX, [-50, 50], [-15, 15])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            perspective: "1000px",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <motion.div
            className="relative"
            style={{
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }}
            animate={{
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Enhanced 3D cube with better materials */}
            <div className="relative w-16 h-16">
              {[
                { transform: "rotateY(0deg) translateZ(32px)", bg: "bg-zinc-700/20", border: "border-zinc-600/30" },
                { transform: "rotateY(90deg) translateZ(32px)", bg: "bg-zinc-600/20", border: "border-zinc-500/30" },
                { transform: "rotateY(180deg) translateZ(32px)", bg: "bg-zinc-500/20", border: "border-zinc-400/30" },
                { transform: "rotateY(-90deg) translateZ(32px)", bg: "bg-zinc-600/20", border: "border-zinc-500/30" },
                { transform: "rotateX(90deg) translateZ(32px)", bg: "bg-zinc-800/20", border: "border-zinc-700/30" },
                { transform: "rotateX(-90deg) translateZ(32px)", bg: "bg-zinc-400/20", border: "border-zinc-300/30" },
              ].map((face, faceIndex) => (
                <div
                  key={faceIndex}
                  className={`absolute w-16 h-16 border backdrop-blur-sm ${face.bg} ${face.border}`}
                  style={{
                    transform: face.transform,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      className="w-3 h-3 bg-zinc-400/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: faceIndex * 0.2,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
