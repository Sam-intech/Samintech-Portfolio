// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import { SiteHeader } from './components/siteheader'
// import { Hero } from '@/components/Hero'
import { CredStrip } from './components/credstrip'
// import { Projects } from '@/components/Projects'
import { About } from './components/about'
import { Writing } from './components/writing'
// import { Contact } from './components/contact'
import { SiteFooter } from './components/sitefooter'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* <Hero /> */}
        <CredStrip />
        {/* <Projects /> */}
        <About />
        <Writing />
        {/* <Contact /> */}
      </main>
      <SiteFooter />
    </div>
  )
}
