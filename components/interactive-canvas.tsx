"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Interactive particles that respond to mouse
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      targetX: number
      targetY: number
    }> = []

    const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"]

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Mouse interaction (skip if distance ~ 0 to avoid NaN)
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.hypot(dx, dy)

        if (distance > 1 && distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.5
          particle.vy += (dy / distance) * force * 0.5
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.5
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.5

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Skip rendering if coordinates are not finite
        if (!Number.isFinite(particle.x) || !Number.isFinite(particle.y)) {
          return
        }

        // Draw particle with glow effect
        const gradRadius = Math.max(particle.size * 4, 0.1)
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, gradRadius)
        gradient.addColorStop(
          0,
          particle.color +
            Math.floor(particle.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(0.5, particle.color + "40")
        gradient.addColorStop(1, particle.color + "00")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            if (
              !Number.isFinite(particle.x) ||
              !Number.isFinite(particle.y) ||
              !Number.isFinite(otherParticle.x) ||
              !Number.isFinite(otherParticle.y)
            )
              return
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              const opacity = (1 - distance / 100) * particle.opacity * otherParticle.opacity
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle =
                particle.color +
                Math.floor(opacity * 100)
                  .toString(16)
                  .padStart(2, "0")
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
