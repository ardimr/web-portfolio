"use client"
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Projects from '@/components/Projects/Projects'
import Footer from '@/components/footer/footer'
import Contact from '@/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
