"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import CountUp from "@/components/count-up"

interface Project {
  id: number
  title: string
  description: string
  image: string
  stats: {
    label: string
    value: number
  }
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
    >
      <Card className="overflow-hidden border-0 bg-white/5 backdrop-blur-sm relative group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg" />
          <div className="absolute inset-0 border border-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
        </div>

        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
          <p className="text-secondary/80 mb-4 font-body">{project.description}</p>

          <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg">
            <div className="text-sm font-body">
              <span className="block text-secondary/60">{project.stats.label}</span>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <CountUp end={project.stats.value} />
                </span>
                <span className="ml-1 text-secondary/80">%</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={isLoading}
            className="w-full relative overflow-hidden group/button rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 group-hover/button:opacity-100 transition-opacity duration-300" />
            <div className="relative px-6 py-3 flex items-center justify-center">
              {isLoading ? (
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, delay: 0.4 }}
                  />
                </div>
              ) : (
                <span className="text-white font-medium font-body">View Case Study</span>
              )}
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full opacity-30">
              <motion.div
                className="absolute top-0 -left-[100%] w-[200%] h-full bg-white/30"
                animate={{ left: ["0%", "100%"] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
            </div>
          </button>
        </div>
      </Card>
    </motion.div>
  )
}
