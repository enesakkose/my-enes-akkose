import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import MyWorks from '@/components/my-works'
import Education from '@/components/education'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Experience />
        <MyWorks />
        <Education />
      </main>
      <Footer />
    </>
  )
}
