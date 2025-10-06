import './App.css'

import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { BlogPosts } from './components/blogposts'
import { TechStack } from './components/techstack'
import { FloatingDock } from './components/navbar'
import { Footer } from './components/footer'
import { Experience} from './components/experience'
import { About } from './components/about'
import { Section } from "./components/section"
import { Socials } from "./components/socials"
import { Hobbies } from "./components/hobbies"
import { DesignShots } from "./components/designshots"


export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <FloatingDock />
      <main className="flex-1">
        <Hero />
        <Projects />
        <TechStack />
        <Section id="experience" className='container flex justify-between items-center p-0'>
          <div className="basis-[400px] shrink-o pl-0">
            <Experience />
          </div>
          <div className="flex-1 min-w-0 pr-0">
            <div className="h-full">
              <About />
            </div>
          </div>
        </Section>
        <BlogPosts />
        <Section id="final" className="container flex flex-col justify-between items-start py-14 mb-20">
          <h2 className="mb-8 text-2xl font-semibold">Extras</h2>
          <div className="w-full flex justify-between items-stretch gap-2">
            <div className="flex-1">
              <Socials />
            </div>
            <div className="flex-1">
              <Hobbies />
            </div>
            <div className="flex-1">
              <DesignShots />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
