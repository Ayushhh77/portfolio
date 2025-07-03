"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Loader2, CheckCircle, Sparkles } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)
    }, 2000)
  }

  const inputVariants = {
    focused: {
      scale: 1.02,
      borderColor: "hsl(var(--primary))",
      boxShadow: "0 0 0 3px hsl(var(--primary) / 0.1)",
    },
    unfocused: {
      scale: 1,
      borderColor: "hsl(var(--border))",
      boxShadow: "0 0 0 0px transparent",
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-gradient-to-r from-green-500/10 to-primary/10 border border-green-500/30 rounded-xl p-8 text-center relative overflow-hidden"
          >
            {/* Success animation particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + Math.cos((i * 30 * Math.PI) / 180) * 100}%`,
                  y: `${50 + Math.sin((i * 30 * Math.PI) / 180) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>

            <motion.h3
              className="text-2xl font-bold mb-2 text-green-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Message Sent Successfully!
            </motion.h3>

            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Thank you for reaching out! I'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="space-y-2" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Label htmlFor="name" className="text-sm font-medium">
                  Name *
                </Label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "name" ? "focused" : "unfocused"}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 backdrop-blur-sm transition-all duration-300"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>

              <motion.div className="space-y-2" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email *
                </Label>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "email" ? "focused" : "unfocused"}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 backdrop-blur-sm transition-all duration-300"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div className="space-y-2" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </Label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === "subject" ? "focused" : "unfocused"}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="subject"
                  placeholder="Project discussion, collaboration, etc."
                  required
                  disabled={isSubmitting}
                  className="bg-background/50 backdrop-blur-sm transition-all duration-300"
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-2" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <motion.div
                variants={inputVariants}
                animate={focusedField === "message" ? "focused" : "unfocused"}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="bg-background/50 backdrop-blur-sm resize-none transition-all duration-300"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
                disabled={isSubmitting}
                size="lg"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  animate={{
                    x: isSubmitting ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />

                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Send Message
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
