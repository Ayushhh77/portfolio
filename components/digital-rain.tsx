"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Digital characters including tech symbols
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|`~+=_-"
    const charArray = chars.split("")

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: Array<{
      y: number
      speed: number
      opacity: number
      color: string
    }> = []

    const colors = ["#00ffff", "#ff00ff", "#ffff00", "#00ff00", "#ff0080"]

    for (let x = 0; x < columns; x++) {
      drops[x] = {
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + "px 'Courier New', monospace"

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i]
        const text = charArray[Math.floor(Math.random() * charArray.length)]

        // Create gradient effect
        const gradient = ctx.createLinearGradient(0, drop.y - 50, 0, drop.y + 50)
        gradient.addColorStop(0, drop.color + "00")
        gradient.addColorStop(
          0.5,
          drop.color +
            Math.floor(drop.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(1, drop.color + "00")

        ctx.fillStyle = gradient
        ctx.fillText(text, i * fontSize, drop.y)

        drop.y += drop.speed

        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = 0
          drop.speed = Math.random() * 3 + 1
          drop.opacity = Math.random() * 0.5 + 0.1
          drop.color = colors[Math.floor(Math.random() * colors.length)]
        }
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 3 }}
    />
  )
}
