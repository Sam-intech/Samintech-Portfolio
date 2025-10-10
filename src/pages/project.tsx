import { useMemo, useState } from "react"
import { Section } from "../components/section"
import { projects } from "../data/projects"
import { ArrowLeft, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Footer } from "../components/footer"

//  ===================================================

type P = typeof projects[number]
const allTags = Array.from(new Set(projects.flatMap(p => p.tags ?? []))).sort()

export function ProjectsIndex() {
  const [q, setQ] = useState("")
  const [tag, setTag] = useState<string | null>(null)

  const items = useMemo(() => {
    const qn = q.trim().toLowerCase()
    return projects.filter(p => {
      const matchesQ =
        !qn ||
        p.title.toLowerCase().includes(qn) ||
        (p.description?.toLowerCase().includes(qn) ?? false)
      const matchesTag = !tag || (p.tags ?? []).includes(tag)
      return matchesQ && matchesTag
    })
  }, [q, tag])

  return (
    <>
      <Section id="projects-index" className="container py-14 md:py-20">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <span className="mx-2 text-muted-foreground/50">/</span>
            <h1 className="text-xl md:text-2xl font-semibold">All Projects</h1>
          </div>

          {/* Search */}
          <label className="hidden md:flex items-center gap-2 rounded-full border border-[#232323] bg-[#1b1b1b] px-3 py-1.5 ring-1 ring-white/5">
            <Search className="h-4 w-4 text-white/60" />
            <input placeholder="Search projects…" className="bg-transparent outline-none text-sm" value={q} onChange={(e) => setQ(e.target.value)}/>
          </label>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button onClick={() => setTag(null)}
            className={[
              "rounded-full border px-3 py-1 text-sm",
              tag === null ? "bg-[#232323] text-white" : "bg-[#1b1b1b] text-white/80",
              "border-[#2b2b2b] ring-1 ring-white/5",
            ].join(" ")}
          >
            All
          </button>
          {allTags.map(t => (
            <button
              key={t}
              onClick={() => setTag(t === tag ? null : t)}
              className={[
                "rounded-full border px-3 py-1 text-sm",
                tag === t ? "bg-[#232323] text-white" : "bg-[#1b1b1b] text-white/80",
                "border-[#2b2b2b] ring-1 ring-white/5",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(p => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  )
}

function ProjectCard({ p }: { p: P }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-[#232323] transition min-h-[550px] bg-[#1b1b1b] ring-1 ring-white/5 hover:ring-white/10"
    >
      {/* Top bar: dotted left + label + hover arrow right */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 pt-4 text-sm">
        <div className="flex items-center gap-2 text-white/70">
          <span aria-hidden className="h-3 w-3" style={{background:"radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "4px 4px"}} />
          <span className="opacity-80">Project</span>
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-white/70 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
          aria-hidden
        />
      </div>
      {/* Media wrapper */}
      <div className="relative h-full w-full p-3 pt-20">
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#191919]">
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#151515]/55 group-hover:bg-[#151515]/45 transition" />
          <div className="absolute inset-x-0 bottom-0 z-10 w-full flex flex-col justify-end items-start p-5">
            <h3 className="text-2xl font-semibold text-white drop-shadow-sm">
              {p.title}
            </h3>
            <p className="text-sm text-white/75">{p.category}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}