"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
      }, 3000)
    }, 1500)
  }

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
    <section id="contact" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight relative inline-block">
              Let's Work Together
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h2>
            <p className="max-w-[700px] text-secondary/80 md:text-xl/relaxed font-body">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-[600px] mt-12 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {isSubmitted ? (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center p-8">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold font-heading mb-2">Thank You!</h3>
                <p className="text-secondary/80 font-body">
                  Your message has been sent successfully. I'll get back to you soon!
                </p>
              </div>
            </motion.div>
          ) : null}

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2" variants={itemVariants}>
              <div className="grid gap-2">
                <Input
                  id="name"
                  placeholder="Name"
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-secondary placeholder:text-secondary/50 font-body"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-secondary placeholder:text-secondary/50 font-body"
                  required
                />
              </div>
            </motion.div>

            <motion.div className="grid gap-2" variants={itemVariants}>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] bg-white/5 border-white/10 focus:border-purple-500 text-secondary placeholder:text-secondary/50 font-body"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative px-6 py-3 flex items-center justify-center h-12">
                  {isSubmitting ? (
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
                    <span className="text-white font-medium font-body">Send Message</span>
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
              </Button>
            </motion.div>
          </form>

          <motion.div className="mt-12 flex justify-center space-x-8" variants={itemVariants}>
            {[
              { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
              { icon: <Github className="h-6 w-6" />, label: "GitHub" },
              { icon: <Mail className="h-6 w-6" />, label: "Email" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-secondary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="sr-only">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
