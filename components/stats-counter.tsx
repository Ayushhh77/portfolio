"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Stat {
  label: string
  value: number
  suffix: string
  icon: string
}

interface StatsCounterProps {
  stats: Stat[]
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)

        return () => clearInterval(timer)
      })
    }
  }, [isInView, stats])

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1 font-mono">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
