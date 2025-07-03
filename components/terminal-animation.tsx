"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Terminal } from "lucide-react"

export default function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  const terminalCommands = [
    "$ whoami",
    "ayush-khatiwada",
    "$ cat skills.txt",
    "Backend Development ✓",
    "Database Design ✓",
    "API Architecture ✓",
    "DevOps & Cloud ✓",
    "Frontend Development ✓",
    "$ docker ps",
    "CONTAINER ID   IMAGE           STATUS",
    "a1b2c3d4e5f6   node:18-alpine  Up 2 hours",
    "b2c3d4e5f6g7   postgres:14     Up 2 hours",
    "c3d4e5f6g7h8   redis:7-alpine  Up 2 hours",
    "$ kubectl get pods",
    "NAME                    READY   STATUS",
    "api-deployment-xyz      3/3     Running",
    "worker-deployment-abc   2/2     Running",
    "$ echo 'Ready to build amazing things!'",
    "Ready to build amazing things! 🚀",
  ]

  useEffect(() => {
    if (currentLine < terminalCommands.length) {
      const timeout = setTimeout(
        () => {
          setLines((prev) => [...prev, terminalCommands[currentLine]])
          setCurrentLine((prev) => prev + 1)
        },
        currentLine === 0 ? 1000 : 800,
      )

      return () => clearTimeout(timeout)
    }
  }, [currentLine, terminalCommands])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl"
    >
      <Card className="bg-gray-900 border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300 font-mono">terminal</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
            <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-900 font-mono text-sm">
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-1 ${
                  line.startsWith("$")
                    ? "text-green-400"
                    : line.includes("✓")
                      ? "text-blue-400"
                      : line.includes("Up") || line.includes("Running")
                        ? "text-green-300"
                        : line.includes("🚀")
                          ? "text-yellow-400"
                          : "text-gray-300"
                }`}
              >
                {line}
                {index === lines.length - 1 && (
                  <motion.span
                    className="text-green-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    █
                  </motion.span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}
