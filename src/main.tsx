import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ProjectsIndex } from "./pages/project"
// import { ProjectDetail } from "./pages/ProjectDetail" // placeholder stub below

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
