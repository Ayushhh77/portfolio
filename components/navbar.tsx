"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Menu, X, Download, Home, User, FolderOpen, Mail, Terminal, Briefcase } from "lucide-react"

interface NavbarProps {
  sections: {
    home: boolean
    about: boolean
    experience: boolean
    skills: boolean
    projects: boolean
    contact: boolean
  }
}

export default function Navbar({ sections }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Determine active section with priority order
  const getActiveSection = () => {
    if (sections.contact) return "contact"
    if (sections.projects) return "projects"
    if (sections.skills) return "skills"
    if (sections.experience) return "experience"
    if (sections.about) return "about"
    return "home"
  }

  const activeSection = getActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Skills", href: "#skills", id: "skills", icon: Terminal },
    { name: "Projects", href: "#projects", id: "projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  ]

  const scrollToSection = (href: string, id: string) => {
    setIsOpen(false)

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-slate-950/95 backdrop-blur-2xl shadow-2xl border-b border-cyan-500/20" : "bg-transparent"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => scrollToSection("#home", "home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative w-12 h-12"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity shadow-lg shadow-emerald-500/25" />
                <div className="absolute inset-1 bg-slate-950 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Code className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Ayush Khatiwada
                </span>
                <span className="text-sm text-slate-400">Backend Engineer</span>
              </div>
            </motion.div>

            {/* Desktop Navigation - Always Visible on Desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  const isActive = activeSection === link.id
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Button
                        variant="ghost"
                        className={`relative gap-2 px-6 py-3 rounded-xl transition-all duration-300 group ${
                          isActive ? "text-white" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                        onClick={() => scrollToSection(link.href, link.id)}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-lg shadow-emerald-500/25"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        <Icon
                          className={`w-4 h-4 relative z-10 ${
                            isActive ? "text-white" : "group-hover:text-emerald-400"
                          } transition-colors duration-300`}
                        />
                        <span className="relative z-10 font-medium">{link.name}</span>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                className="ml-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-lg shadow-teal-500/25 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button - Only on Mobile/Tablet */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-12 h-12 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 relative z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Only for Mobile/Tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed top-20 left-4 right-4 bg-slate-950/98 backdrop-blur-2xl z-50 border border-slate-800/50 rounded-3xl shadow-2xl lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
            style={{ transform: "translateZ(0)" }}
          >
            <nav className="p-8 space-y-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon
                const isActive = activeSection === link.id
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start gap-4 py-4 px-6 rounded-2xl transition-all duration-300 text-lg ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                          : "hover:bg-slate-800/50 text-slate-300 hover:text-white"
                      }`}
                      onClick={() => scrollToSection(link.href, link.id)}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-medium">{link.name}</span>
                    </Button>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="pt-6 border-t border-slate-800/50"
              >
                <Button className="w-full gap-4 py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg text-lg">
                  <Download className="w-6 h-6" />
                  Download Resume
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
