"use client";

import { useEffect, useRef } from "react";

import {
  motion,
  useScroll,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Terminal,
  ArrowRight,
  Download,
  Settings,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Code,
  Phone,
  MapPin,
} from "lucide-react";

import HeroAnimation from "@/components/hero-animation";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";
import TechStack from "@/components/tech-stack";
import Navbar from "@/components/navbar";
import CodeTypingAnimation from "@/components/code-typing-animation";
import TerminalAnimation from "@/components/terminal-animation";
import StatsCounter from "@/components/stats-counter";
import ScrollProgress from "@/components/scroll-progress";
import InteractiveCanvas from "@/components/interactive-canvas";
import ParallaxBackground from "@/components/parallax-background";
import AdvancedMouseFollower from "@/components/advanced-mouse-follower";
import ExperienceTimeline from "@/components/experience-timeline";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.5, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { threshold: 0.5, margin: "-100px" });
  const experienceInView = useInView(experienceRef, {
    threshold: 0.5,
    margin: "-100px",
  });
  const skillsInView = useInView(skillsRef, {
    threshold: 0.5,
    margin: "-100px",
  });
  const projectsInView = useInView(projectsRef, {
    threshold: 0.5,
    margin: "-100px",
  });
  const contactInView = useInView(contactRef, {
    threshold: 0.5,
    margin: "-100px",
  });

  // Enhanced mouse movement with 3D transforms
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const projects = [
    {
      title: "Clinrol - Clinical Trial Recruitment Platform",
      description:
        "Developed the backend for Clinrol, a platform connecting patients to clinical trials worldwide. Built using Strapi to create and manage APIs for patient recruitment, trial data, and content delivery with PostgreSQL integration.",
      tags: ["Node.js", "Strapi", "PostgreSQL", "RESTful APIs", "Healthcare"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Projects",
      demo: "https://clinrol.com",
      featured: true,
      stats: { patients: "1000+", trials: "500+", uptime: "99.9%" },
    },
    {
      title: "Kiin Creators - Parent Creator Review Platform",
      description:
        "Built the backend for Kiin Creators, enabling Aussie parents to review products. Developed using NestJS to create scalable APIs for user management, product reviews, and content delivery with PostgreSQL integration.",
      tags: ["Node.js", "NestJS", "PostgreSQL", "RESTful APIs", "Reviews"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Projects",
      demo: "https://kiincreators.com",
      featured: true,
      stats: { reviews: "5000+", creators: "200+", brands: "50+" },
    },
    {
      title: "HurryApp - Personalized E-commerce Marketplace",
      description:
        "Developed the backend for HurryApp, an innovative shopping platform using NestJS. Created APIs for product management, user wishlists, personalized deals, and gamified shopping experience with PostgreSQL.",
      tags: ["Node.js", "NestJS", "PostgreSQL", "E-commerce", "Gamification"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Projects",
      demo: "https://hurryapp.com.au",
      featured: false,
    },
    {
      title: "Otter Dating App",
      description:
        "Single-handedly developed the complete backend for Otters Dating App using NestJS. Created APIs for user authentication, profile management, real-time messaging, and matching algorithms with PostgreSQL.",
      tags: ["Node.js", "NestJS", "PostgreSQL", "Real-time", "Mobile"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Projects",
      demo: "#",
      featured: false,
    },
    {
      title: "Blood Bank Management System (MERN)",
      description:
        "Developed a comprehensive blood bank management system with inventory and user communication features. Built using MERN stack for maintaining blood inventory and emergency distribution.",
      tags: ["React", "Express", "Node.js", "MongoDB", "Healthcare"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Ragat-Sewa-",
      demo: "#",
      featured: false,
    },
    {
      title: "MVC E-commerce Clothing Website",
      description:
        "Developed a full-stack e-commerce clothing website following MVC architecture. Built with Java, SQL, Apache, and modern frontend technologies for complete online shopping experience.",
      tags: ["Java", "SQL", "Apache", "HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Aayushhh7/Projects",
      demo: "#",
      featured: false,
    },
  ];

  const skillCategories = [
    {
      id: "backend-core",
      title: "Backend Core",
      icon: Server,
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      skills: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Python",
        "Java",
        "PHP",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      id: "database-systems",
      title: "Database Systems",
      icon: Database,
      color: "from-blue-600 to-indigo-600",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
      ],
    },
    {
      id: "cms-platforms",
      title: "CMS & Frameworks",
      icon: Globe,
      color: "from-purple-600 to-violet-600",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      skills: [
        "Strapi",
        "Django",
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Headless CMS",
        "Content Management",
      ],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-cyan-600 to-sky-600",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      skills: [
        "AWS",
        "DigitalOcean",
        "Docker",
        "Nginx",
        "Apache",
        "CI/CD",
        "GitHub Actions",
        "Linux",
      ],
    },
    {
      id: "tools-testing",
      title: "Development Tools",
      icon: Terminal,
      color: "from-orange-600 to-amber-600",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
      skills: [
        "VSCode",
        "Git",
        "GitHub",
        "Postman",
        "JWT",
        "OAuth",
        "API Testing",
        "Version Control",
      ],
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: Code2,
      color: "from-pink-600 to-rose-600",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400",
      skills: [
        "AWS Cloud Foundations",
        "AWS Machine Learning",
        "Backend Development",
        "Full Stack Development",
      ],
    },
  ];

  const experience = [
    {
      title: "Backend Developer",
      company: "Probits Private Limited",
      period: "February 2024 - Present",
      description:
        "Developing and maintaining backend systems for multiple client projects including healthcare platforms, e-commerce solutions, and social applications. Working with Node.js, NestJS, Strapi, and PostgreSQL to build scalable APIs and database architectures.",
      technologies: [
        "Node.js",
        "NestJS",
        "Strapi",
        "PostgreSQL",
        "RESTful APIs",
        "Docker",
      ],
    },
    {
      title: "BSc (Hons) in Computing",
      company: "Islington College (London Metropolitan University)",
      period: "2021 - 2024",
      description:
        "Completed Bachelor's degree in Computing with focus on software development, database systems, and web technologies. Gained comprehensive knowledge in programming languages, system design, and modern development practices.",
      technologies: [
        "Java",
        "Python",
        "JavaScript",
        "Database Design",
        "Software Engineering",
        "Web Development",
      ],
    },
    {
      title: "Higher Secondary Education",
      company: "Nidi College (Tribhuvan University)",
      period: "2019 - 2021",
      description:
        "Completed higher secondary education with focus on science and mathematics, building strong analytical and problem-solving foundation for computer science studies.",
      technologies: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "Analytical Thinking",
      ],
    },
  ];

  const stats = [
    { label: "Years of Experience", value: 1, suffix: "+", icon: "⚡" },
    { label: "Projects Completed", value: 10, suffix: "+", icon: "🚀" },
    { label: "APIs Developed", value: 50, suffix: "+", icon: "🔗" },
    { label: "Client Satisfaction", value: 100, suffix: "%", icon: "📊" },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      {/* Interactive Canvas Background */}
      <InteractiveCanvas />
      <ParallaxBackground y1={y1} y2={y2} y3={y3} />
      <AdvancedMouseFollower mouseX={springX} mouseY={springY} />
      <ScrollProgress />
      <Navbar
        sections={{
          home: heroInView,
          about: aboutInView,
          experience: experienceInView,
          skills: skillsInView,
          projects: projectsInView,
          contact: contactInView,
        }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col justify-center px-4 py-16 md:py-20"
      >
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Profile Image - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="lg:col-span-2 flex justify-center lg:justify-start lg:mt-20"
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border-2 border-slate-700/50">
                  <img
                    src="/images/ayush-profile.png"
                    alt="Ayush Khatiwada - Backend Developer"
                    className="w-full h-full object-cover object-[center_2%] rounded-full"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Text Content - Takes 3 columns, shifted left */}
            <div className="lg:col-span-3 text-center lg:text-left space-y-8">
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                className="mb-1"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    springY.get() * 0.01
                  }deg) rotateY(${springX.get() * 0.01}deg)`,
                }}
              >
                <Badge
                  variant="outline"
                  className="px-10 py-5 text-xl border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-xl rounded-full relative overflow-hidden group shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                      rotate: [0, 360],
                    }}
                    transition={{
                      x: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      },
                      rotate: {
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                  />
                  <Server className="w-6 h-6 mr-4 relative z-10 text-emerald-400" />
                  <span className="relative z-10 font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Backend Developer & Full Stack Engineer
                  </span>
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.div
                className="relative"
                style={{
                  y: y1,
                  transform: `perspective(1200px) rotateX(${
                    springY.get() * 0.02
                  }deg) rotateY(${springX.get() * 0.02}deg)`,
                }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
                >
                  Ayush Khatiwada
                </motion.h1>

                {/* Subtle Shadow Layers */}
                {[...Array(2)].map((_, i) => (
                  <motion.h1
                    key={i}
                    className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-slate-800/15 leading-tight"
                    style={{
                      transform: `translate(${
                        springX.get() * (i + 1) * 0.01
                      }px, ${springY.get() * (i + 1) * 0.01}px) translateZ(${
                        -8 * (i + 1)
                      }px)`,
                      filter: `blur(${i * 1.5}px)`,
                    }}
                  >
                    Ayush Khatiwada
                  </motion.h1>
                ))}
              </motion.div>

              {/* Subtitle */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ y: y2 }}
              >
                <CodeTypingAnimation />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Thasikhel, Lalitpur, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+977 9806073373</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>ayushkhatiwada420@gmail.com</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                style={{ y: y3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gap-3 px-10 py-5 text-lg rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 border border-emerald-400/30"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Code2 className="w-6 h-6" />
                    <span className="font-semibold">View My Work</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-3 px-10 py-5 text-lg rounded-xl border-cyan-400/30 hover:bg-cyan-500/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/20 bg-transparent"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <Download className="w-6 h-6" />
                    <span className="font-semibold">Download CV</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="w-full mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-7xl"
            >
              <StatsCounter stats={stats} />
            </motion.div>
          </div>
        </div>

        {/* Hero Background Animation */}
        <div className="absolute inset-0 -z-10">
          <HeroAnimation />
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto my-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-16 md:py-20 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={
                  aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ delay: 0.3, duration: 1 }}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    springX.get() * 0.02
                  }deg)`,
                }}
              >
                <Badge
                  variant="outline"
                  className="mb-8 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-xl text-lg"
                >
                  <Terminal className="w-5 h-5 mr-3 text-cyan-400" />
                  About Me
                </Badge>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                  Passionate Developer
                </h2>
              </motion.div>

              <motion.div
                className="space-y-8 text-xl text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.6, duration: 1 }}
              >
                <p>
                  I'm a passionate and dedicated Backend Developer with
                  expertise in{" "}
                  <span className="text-cyan-400 font-bold">
                    Node.js, NestJS, and Strapi
                  </span>
                  . Currently working at Probits Private Limited, I specialize
                  in building scalable backend systems and APIs that power
                  modern web applications.
                </p>

                <p>
                  My journey includes developing healthcare platforms like{" "}
                  <span className="text-blue-400 font-bold">Clinrol</span>,
                  e-commerce solutions like{" "}
                  <span className="text-purple-400 font-bold">HurryApp</span>,
                  and social platforms like{" "}
                  <span className="text-emerald-400 font-bold">
                    Kiin Creators
                  </span>
                  . I'm passionate about clean architecture, database
                  optimization, and creating seamless user experiences.
                </p>

                <p>
                  With a{" "}
                  <span className="text-yellow-400 font-bold">
                    BSc (Hons) in Computing
                  </span>{" "}
                  from London Metropolitan University and AWS certifications, I
                  continuously strive to learn and implement cutting-edge
                  technologies in my projects.
                </p>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 1, duration: 1 }}
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Aayushhh7",
                    color: "hover:bg-slate-700",
                    glow: "hover:shadow-slate-500/50",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ayush-khatiwada-a67b72235/",
                    color: "hover:bg-blue-600",
                    glow: "hover:shadow-blue-500/50",
                  },
                  {
                    icon: Mail,
                    href: "mailto:ayushkhatiwada420@gmail.com",
                    color: "hover:bg-purple-600",
                    glow: "hover:shadow-purple-500/50",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.3,
                      y: -10,
                      rotateZ: 10,
                      rotateX: 15,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                    style={{ perspective: "1000px" }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`bg-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 ${social.color} ${social.glow} hover:text-white backdrop-blur-xl w-14 h-14`}
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <social.icon className="w-6 h-6" />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={
                aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                transform: `perspective(1000px) rotateY(${
                  springX.get() * -0.02
                }deg)`,
              }}
            >
              <TerminalAnimation />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="py-16 md:py-20 bg-slate-900/30 relative"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <Badge
              variant="outline"
              className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 backdrop-blur-xl text-lg"
            >
              <Zap className="w-5 h-5 mr-3 text-blue-400" />
              Professional Journey
            </Badge>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Career & Education
            </h2>

            <p className="text-2xl text-slate-400 max-w-5xl mx-auto">
              From academic excellence to professional development, building
              expertise in backend technologies and full-stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ delay: 0.3, duration: 1 }}
          >
            <ExperienceTimeline experience={experience} />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-16 md:py-20 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-xl text-lg"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  y: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <Cpu className="w-5 h-5 mr-3 text-purple-400" />
              </motion.div>
              Technical Expertise
            </Badge>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Technology Stack
            </motion.h2>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Comprehensive expertise in backend development, database
              management, and modern web technologies.
            </p>
          </motion.div>

          {/* Technology Categories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  skillsInView
                    ? {
                        opacity: 1,
                        y: [0, -5, 0],
                        scale: [1, 1.01, 1],
                      }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  opacity: { delay: categoryIndex * 0.1, duration: 0.6 },
                  y: {
                    delay: categoryIndex * 0.2,
                    duration: 2.5 + categoryIndex * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                  scale: {
                    delay: categoryIndex * 0.2,
                    duration: 2.5 + categoryIndex * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card
                  className={`bg-slate-900/50 backdrop-blur-xl border ${category.borderColor} hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden h-full`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          y: -5,
                        }}
                        animate={{
                          y: [0, -3, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          hover: { duration: 0.6, ease: "easeInOut" },
                          y: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                          rotate: {
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <CardTitle
                        className={`text-xl font-bold ${category.iconColor} group-hover:text-white transition-colors duration-300`}
                      >
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            skillsInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                          className="group/skill"
                        >
                          <div className="bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-3 text-center transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50 relative overflow-hidden">
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
                            />

                            <motion.div
                              className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-2 relative z-10`}
                              animate={{
                                boxShadow: [
                                  `0 0 0 0 ${
                                    category.iconColor.includes("emerald")
                                      ? "rgba(16, 185, 129, 0.4)"
                                      : category.iconColor.includes("blue")
                                      ? "rgba(59, 130, 246, 0.4)"
                                      : category.iconColor.includes("purple")
                                      ? "rgba(147, 51, 234, 0.4)"
                                      : category.iconColor.includes("orange")
                                      ? "rgba(249, 115, 22, 0.4)"
                                      : category.iconColor.includes("cyan")
                                      ? "rgba(6, 182, 212, 0.4)"
                                      : "rgba(236, 72, 153, 0.4)"
                                  }`,
                                  `0 0 0 4px transparent`,
                                ],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />

                            <span className="text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors duration-300 relative z-10">
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TechStack />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-16 md:py-20 bg-slate-900/30"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <Badge
              variant="outline"
              className="mb-8 px-6 py-3 bg-gradient-to-r from-pink-500/10 to-red-500/10 border-pink-500/30 backdrop-blur-xl text-lg"
            >
              <Settings className="w-5 h-5 mr-3 text-pink-400" />
              Portfolio Showcase
            </Badge>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <p className="text-2xl text-slate-400 max-w-5xl mx-auto">
              Real-world applications built with modern technologies including
              healthcare platforms, e-commerce solutions, and social
              applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  featured
                />
              ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} index={index + 2} />
              ))}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={
              projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-4 group bg-transparent px-10 py-5 text-xl rounded-2xl border-slate-700/50 hover:bg-slate-800/50 backdrop-blur-xl hover:border-slate-600/50 hover:scale-105 transition-all duration-500"
              onClick={() =>
                window.open("https://github.com/Aayushhh7", "_blank")
              }
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="font-bold">View All Projects</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <Badge
              variant="outline"
              className="mb-8 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-xl text-lg"
            >
              <Mail className="w-5 h-5 mr-3 text-cyan-400" />
              Let's Connect
            </Badge>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Start Your Next Project
            </h2>

            <p className="text-2xl text-slate-400 max-w-5xl mx-auto">
              Ready to build something amazing? Let's discuss your backend
              development needs, API architecture, or full-stack solutions and
              bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={
              contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
            transition={{ delay: 0.3, duration: 1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Redesigned Compact Footer */}
      <footer className="relative py-16 border-t border-slate-800/50 bg-gradient-to-b from-slate-950/95 to-slate-900/95 backdrop-blur-xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>

                <div>
                  <h3 className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ayush Khatiwada
                  </h3>
                  <p className="text-slate-400">
                    Backend Developer & Full Stack Engineer
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Building scalable backend systems and innovative solutions that
                power the digital world.
              </p>

              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Aayushhh7",
                    color: "hover:text-slate-300",
                    bg: "hover:bg-slate-800/50",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ayush-khatiwada-a67b72235/",
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-600/20",
                  },
                  {
                    icon: Mail,
                    href: "mailto:ayushkhatiwada420@gmail.com",
                    color: "hover:text-purple-400",
                    bg: "hover:bg-purple-600/20",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl border border-slate-700/50 ${social.bg} ${social.color} transition-all duration-300 backdrop-blur-sm`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links & Technologies Combined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { name: "About", href: "#about" },
                      { name: "Experience", href: "#experience" },
                      { name: "Skills", href: "#skills" },
                      { name: "Projects", href: "#projects" },
                      { name: "Contact", href: "#contact" },
                    ].map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <motion.a
                          href={item.href}
                          whileHover={{ x: 5 }}
                          className="text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                        >
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Core Technologies */}
                <div>
                  <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                    Core Technologies
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Node.js",
                        level: "Expert",
                        color: "from-green-400 to-emerald-500",
                      },
                      {
                        name: "NestJS",
                        level: "Advanced",
                        color: "from-red-400 to-pink-500",
                      },
                      {
                        name: "PostgreSQL",
                        level: "Expert",
                        color: "from-blue-400 to-cyan-500",
                      },
                      {
                        name: "Strapi",
                        level: "Advanced",
                        color: "from-purple-500 to-indigo-500",
                      },
                      {
                        name: "AWS",
                        level: "Certified",
                        color: "from-orange-400 to-yellow-500",
                      },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="flex justify-between items-center group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: 3 }}
                      >
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </span>
                        <motion.span
                          className={`text-xs px-3 py-1 bg-gradient-to-r ${tech.color} text-white rounded-full font-medium`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech.level}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-slate-400 mb-1">
                © {new Date().getFullYear()} Ayush Khatiwada. All rights
                reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Built with Next.js, Tailwind CSS, and Framer Motion ✨
              </p>
            </div>

            <div className="flex items-center gap-6">
              <motion.div
                className="flex items-center gap-2 text-slate-400"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 6px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <span className="text-sm font-medium">
                  Available for projects
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 bg-transparent px-4 py-2 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
                  onClick={() =>
                    (window.location.href =
                      "mailto:ayushkhatiwada420@gmail.com")
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
