"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CodeTypingAnimation() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Building scalable backend systems with Node.js & NestJS",
    "Developing healthcare platforms like Clinrol",
    "Creating e-commerce solutions with PostgreSQL",
    "Architecting APIs for modern web applications",
    "Implementing headless CMS solutions with Strapi",
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (!isDeleting) {
          if (currentText.length < current.length) {
            setCurrentText(current.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2500)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(current.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 30 : 80,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <div className="font-mono text-center relative">
      <motion.span
        className="text-zinc-400"
        animate={{
          textShadow: [
            "0 0 5px rgba(161, 161, 170, 0.5)",
            "0 0 15px rgba(161, 161, 170, 0.8)",
            "0 0 5px rgba(161, 161, 170, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        &gt;
      </motion.span>{" "}
      <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        className="text-zinc-400"
        animate={{
          opacity: [1, 0],
          textShadow: [
            "0 0 5px rgba(161, 161, 170, 0.5)",
            "0 0 15px rgba(161, 161, 170, 0.8)",
            "0 0 5px rgba(161, 161, 170, 0.5)",
          ],
        }}
        transition={{
          opacity: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
          textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        █
      </motion.span>
    </div>
  )
}
