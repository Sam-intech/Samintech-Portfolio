// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// import { SiteHeader } from './components/siteheader'
import { Hero } from './components/hero'
// import { CredStrip } from './components/credstrip'
import { Projects } from './components/projects'
import { Writing } from './components/writing'
// import { Contact } from './components/contact'
// import { SiteFooter } from './components/sitefooter'
import { TechStack } from './components/techstack'
import { FloatingDock } from './components/navbar'
import { Footer } from './components/footer'
import { Experience} from './components/experience'
import { About } from './components/about'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* <SiteHeader /> */}
      <FloatingDock />
      <main className="flex-1">
        <Hero />
        {/* <CredStrip /> */}
        <Projects />
        <TechStack />
        <div id="experience" className='flex justify-between items-stretch gap-0'>
          <div className="basis-[400px] shrink-o">
            <Experience />
          </div>
          <div className="flex-1 min-w-0">
            <div className="h-full">
              <About />
            </div>
          </div>
        </div>
        <Writing />
        {/* <Contact /> */}
      </main>
      {/* <SiteFooter /> */}
      <Footer />
    </div>
  )
}
