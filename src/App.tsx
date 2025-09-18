import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { SiteHeader } from './components/siteheader'
// import { Hero } from '@/components/Hero'
import { CredStrip } from './components/credstrip'
// import { Projects } from '@/components/Projects'
import { About } from './components/about'
import { Writing } from './components/writing'
import { Contact } from './components/contact'
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
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
