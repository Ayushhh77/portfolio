"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function TechBackground() {
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

    // Enhanced tech grid with depth
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(161, 161, 170, 0.08)"
      ctx.lineWidth = 1

      const gridSize = 60
      const offset = Date.now() * 0.001

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const alpha = 0.08 + Math.sin(x * 0.01 + offset) * 0.02
        ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        const alpha = 0.08 + Math.sin(y * 0.01 + offset) * 0.02
        ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Enhanced animated nodes with connections
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulse: number
    }> = []

    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawGrid()

      const time = Date.now() * 0.001

      // Update and draw nodes
      nodes.forEach((node, index) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.02

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Enhanced node rendering with glow
        const pulseSize = node.size + Math.sin(node.pulse) * 2
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 3)
        gradient.addColorStop(0, `rgba(161, 161, 170, ${node.opacity})`)
        gradient.addColorStop(0.5, `rgba(161, 161, 170, ${node.opacity * 0.3})`)
        gradient.addColorStop(1, "rgba(161, 161, 170, 0)")

        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Enhanced connections with data flow effect
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              const opacity = (1 - distance / 200) * node.opacity * otherNode.opacity * 0.5

              // Main connection line
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(161, 161, 170, ${opacity})`
              ctx.lineWidth = 1
              ctx.stroke()

              // Data flow particles
              const flowProgress = (time + index * 0.5) % 2
              if (flowProgress < 1) {
                const flowX = node.x + (otherNode.x - node.x) * flowProgress
                const flowY = node.y + (otherNode.y - node.y) * flowProgress

                ctx.beginPath()
                ctx.arc(flowX, flowY, 2, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(161, 161, 170, ${opacity * 2})`
                ctx.fill()
              }
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
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
