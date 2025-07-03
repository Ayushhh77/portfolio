"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      connections: number[]
      activity: number
    }> = []

    const nodeCount = 30

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        connections: [],
        activity: Math.random(),
      })
    }

    // Create connections
    nodes.forEach((node, index) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1
      for (let i = 0; i < connectionCount; i++) {
        const targetIndex = Math.floor(Math.random() * nodeCount)
        if (targetIndex !== index && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex)
        }
      }
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Update activity
        node.activity += (Math.random() - 0.5) * 0.1
        node.activity = Math.max(0, Math.min(1, node.activity))

        // Draw connections
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex]
          if (target) {
            const distance = Math.sqrt((node.x - target.x) ** 2 + (node.y - target.y) ** 2)
            if (distance < 200) {
              const opacity = (1 - distance / 200) * node.activity * 0.5
              const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
              gradient.addColorStop(0, `rgba(0, 255, 255, ${opacity})`)
              gradient.addColorStop(0.5, `rgba(255, 0, 255, ${opacity})`)
              gradient.addColorStop(1, `rgba(255, 255, 0, ${opacity})`)

              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(target.x, target.y)
              ctx.strokeStyle = gradient
              ctx.lineWidth = node.activity * 2
              ctx.stroke()
            }
          }
        })

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2)
        gradient.addColorStop(0, `rgba(0, 255, 255, ${node.activity})`)
        gradient.addColorStop(0.5, `rgba(255, 0, 255, ${node.activity * 0.5})`)
        gradient.addColorStop(1, "rgba(255, 255, 0, 0)")

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Pulse effect
        if (node.activity > 0.8) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${(node.activity - 0.8) * 2})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
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
