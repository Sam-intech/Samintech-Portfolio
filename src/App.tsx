// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// import { SiteHeader } from './components/siteheader'
import { Hero } from './components/hero'
import { CredStrip } from './components/credstrip'
import { Projects } from './components/projects'
import { About } from './components/about'
import { Writing } from './components/writing'
// import { Contact } from './components/contact'
// import { SiteFooter } from './components/sitefooter'
import { TechStack } from './components/techstack'
import { FloatingDock } from './components/navbar'
import { Footer } from './components/footer'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* <SiteHeader /> */}
      <FloatingDock />
      <main className="flex-1">
        <Hero />
        <CredStrip />
        <Projects />
        <TechStack />
        <About />
        <Writing />
        {/* <Contact /> */}
      </main>
      {/* <SiteFooter /> */}
      <Footer />
    </div>
  )
}
