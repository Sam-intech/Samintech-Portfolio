import { projects } from "../data/projects"
import { ArrowUpRight, Tag } from "lucide-react"
import { Link } from "react-router-dom"
// ==================================================


export default function ProjectsIndex() {
  return (
    <section className="container py-14 md:py-20">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">All Projects</h1>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          Home <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map(p => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
            <div className="rounded-2xl border bg-[#1b1b1b] ring-1 ring-white/5 p-2 overflow-hidden">
              <div className="relative">
                <img src={p.cover} alt={p.title} className="h-64 w-full object-cover rounded-xl" />
                <div className="absolute inset-0 rounded-xl bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <div className="text-xs text-white/60 inline-flex items-center gap-1"><Tag className="h-3 w-3" /> {p.category}</div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70 line-clamp-2">{p.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
