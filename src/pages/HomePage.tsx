import { About } from '../components/About'
import { BackToTop } from '../components/BackToTop'
import { Contact } from '../components/Contact'
import { CurrentlyLearning } from '../components/CurrentlyLearning'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Philosophy } from '../components/Philosophy'
import { Projects } from '../components/Projects'
import { ScrollProgress } from '../components/ScrollProgress'
import { Skills } from '../components/Skills'
import { SkipLink } from '../components/SkipLink'
import { YouTube } from '../components/YouTube'

export function HomePage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <CurrentlyLearning />
        <YouTube />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
