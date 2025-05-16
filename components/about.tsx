"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { y: 30, opacity: 0 },
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
    <section id="about" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="relative h-[400px] rounded-xl overflow-hidden" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl" />
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Designer portrait"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div className="space-y-3" variants={itemVariants}>
              <h3 className="text-2xl font-bold font-heading">Who I Am</h3>
              <p className="text-secondary/80 font-body">
                I'm a passionate UI/UX designer with a keen eye for detail and a love for creating intuitive, engaging
                digital experiences. Currently pursuing my degree in Design, I blend creativity with user-centered
                principles to craft solutions that delight users.
              </p>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <h3 className="text-2xl font-bold font-heading">What I Do</h3>
              <p className="text-secondary/80 font-body">
                My design process involves thorough research, wireframing, prototyping, and user testing. I specialize
                in creating visually stunning interfaces that are both functional and delightful to use. I'm proficient
                in tools like Figma, Adobe XD, and have experience with front-end development.
              </p>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <h3 className="text-2xl font-bold font-heading">Why Hire Me</h3>
              <p className="text-secondary/80 font-body">
                I bring a fresh perspective, attention to detail, and a strong work ethic to every project. My
                background in both design and development allows me to create solutions that are not only beautiful but
                also technically feasible and user-friendly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
