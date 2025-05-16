"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={scrollToContact}
        className="relative px-6 py-3 rounded-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 hover:opacity-100 transition-opacity duration-300" />

        {/* Animated border */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-[400%] h-[400%]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 270deg, rgba(255,255,255,0.8) 310deg, transparent 360deg)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        {/* Pulse effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        )}

        <span className="relative text-white font-medium z-10 font-body">Get in Touch</span>
      </motion.button>
    </motion.div>
  )
}
