"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      description: "Redesigned user flow and interface for a banking application",
      image: "/placeholder.svg?height=400&width=600",
      stats: { label: "Increased conversions", value: 23 },
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Created a seamless shopping experience with intuitive navigation",
      image: "/placeholder.svg?height=400&width=600",
      stats: { label: "Reduced bounce rate", value: 41 },
    },
    {
      id: 3,
      title: "Health Tracking Dashboard",
      description: "Designed an accessible dashboard for monitoring health metrics",
      image: "/placeholder.svg?height=400&width=600",
      stats: { label: "Improved user retention", value: 35 },
    },
    {
      id: 4,
      title: "Travel Planning Platform",
      description: "Built a comprehensive travel planning tool with interactive maps",
      image: "/placeholder.svg?height=400&width=600",
      stats: { label: "Increased engagement", value: 52 },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-2" variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight relative inline-block">
              My Work
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h2>
            <p className="max-w-[700px] text-secondary/80 md:text-xl/relaxed font-body">
              Check out some of my recent UI/UX design projects
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
