import { Routes, Route } from "react-router-dom"
import { FloatingDock } from "./components/navbar"
import { Footer } from "./components/footer"
import Home from "./pages/home"
import ProjectsIndex from "./pages/projectindex"
import ProjectCase from "./pages/projectcase"
// ==================================================

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <FloatingDock />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:slug" element={<ProjectCase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
