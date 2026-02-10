import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Projects from '@/components/projects'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
