"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll(".floating-image")
      elements.forEach((el) => {
        const element = el as HTMLElement
        const factor = Number.parseFloat(element.dataset.factor || "1")
        element.style.transform = `translate(${x * 20 * factor}px, ${y * 20 * factor}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight"
              variants={itemVariants}
            >
              Divyansh</motion.h1>
            <motion.p className="text-xl md:text-2xl text-secondary/80 font-body max-w-[600px]" variants={itemVariants}>
              UI/UX designer crafting intuitive digital experiences that blend creativity with user-centered design
              principles.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="relative px-8 py-3 text-lg font-medium overflow-hidden group rounded-full">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <span className="relative text-secondary group-hover:text-primary transition-colors duration-300">
                  Explore My Work
                </span>
              </button>
            </motion.div>
          </div>
          <div ref={containerRef} className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 absolute inset-0">
              <div className="relative rounded-lg overflow-hidden floating-image" data-factor="1.2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project preview"
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden floating-image" data-factor="0.8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project preview"
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden floating-image" data-factor="1.5">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project preview"
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden floating-image" data-factor="1">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Project preview"
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
