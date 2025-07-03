"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Activity } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
  featured?: boolean
  stats?: { [key: string]: string }
}

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className={featured ? "lg:col-span-1" : ""}
    >
      <Card
        className={`overflow-hidden h-full border-muted bg-background/50 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group relative ${
          featured ? "border-primary/30 bg-gradient-to-br from-primary/5 to-background/50" : ""
        }`}
      >
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-primary/90 text-primary-foreground gap-1">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </Badge>
          </div>
        )}

        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
              featured ? "h-64" : "h-48"
            }`}
          />

          {/* Tech overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "linear-gradient(to top, rgba(0,0,0,0.8), transparent, transparent)",
                "linear-gradient(to top, rgba(59,130,246,0.2), transparent, transparent)",
                "linear-gradient(to top, rgba(0,0,0,0.8), transparent, transparent)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-1 opacity-0 group-hover:opacity-100"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <CardContent className={`p-6 ${featured ? "pb-4" : ""}`}>
          <motion.h3
            className={`font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${
              featured ? "text-2xl" : "text-xl"
            }`}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          <p className={`text-muted-foreground mb-4 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
            {project.description}
          </p>

          {/* Stats for featured projects */}
          {featured && project.stats && (
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-sm font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="secondary"
                  className="hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{tag}</span>
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Github className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Code</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Demo</span>
            </Button>
          </motion.div>

          {featured && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
              >
                <Activity className="w-4 h-4 text-green-500" />
                <span>Live</span>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
