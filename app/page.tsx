import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import FloatingButton from "@/components/floating-button"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary text-secondary overflow-hidden">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-primary/50 pointer-events-none" />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FloatingButton />
    </main>
  )
}
