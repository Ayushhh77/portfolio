"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function TechStack() {
  const technologies = [
    { name: "Node.js", color: "#8CC84B", level: 95 },
    { name: "Express", color: "#000000", level: 90 },
    { name: "MongoDB", color: "#4DB33D", level: 85 },
    { name: "PostgreSQL", color: "#336791", level: 88 },
    { name: "React", color: "#61DAFB", level: 82 },
    { name: "TypeScript", color: "#3178C6", level: 90 },
    { name: "Docker", color: "#2496ED", level: 85 },
    { name: "AWS", color: "#FF9900", level: 80 },
    { name: "GraphQL", color: "#E10098", level: 75 },
    { name: "Redis", color: "#DC382D", level: 88 },
    { name: "Next.js", color: "#000000", level: 85 },
    { name: "Kubernetes", color: "#326CE5", level: 78 },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="flex flex-col items-center justify-center h-24 bg-background/50 backdrop-blur-sm border border-muted hover:border-primary/50 transition-all duration-300">
            <div className="text-center">
              <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: tech.color }} />
              <p className="text-sm font-medium">{tech.name}</p>
              <div className="w-full mt-1 px-2">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
