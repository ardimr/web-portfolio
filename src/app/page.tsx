import Hero from '@/components/hero/Hero'
import Image from 'next/image'
import RootLayout from './layout'
import About from '@/components/about/About'
import Projects from '@/components/Projects/Projects'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}
