"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceTimelineProps {
  experience: Experience[]
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600"></div>

      {experience.map((exp, index) => (
        <motion.div
          key={index}
          className="relative flex items-start mb-12 last:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          {/* Timeline dot */}
          <motion.div
            className="absolute left-6 w-5 h-5 bg-zinc-400 rounded-full border-4 border-zinc-900 z-10"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(161, 161, 170, 0.4)",
                "0 0 0 8px rgba(161, 161, 170, 0)",
                "0 0 0 0 rgba(161, 161, 170, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
          />

          {/* Content card */}
          <motion.div className="ml-16 flex-1" whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
            <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-500/20">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
