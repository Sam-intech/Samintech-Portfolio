import { Section } from "./section"
import { projects } from "../data/projects"
// import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"

export function Projects() {
  return (
    <Section id="projects" className="container flex flex-col justify-center items-start py-16">
      <div className="w-full mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <a href="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition">
          View all <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="w-full grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <a key={p.slug} href={`/projects/${p.slug}`} className="p-3 group relative overflow-hidden rounded-2xl border transition h-80">
            <img src={p.image} alt={p.title} className="h-full w-full rounded-2xl object-cover mt-10 mb-1 transition duration-500 group-hover:scale-105"/>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Overlay */}
            <div className="w-full absolute inset-0 flex flex-col justify-end items-start p-4 z-20">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="text-sm text-white/80">{p.category}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
