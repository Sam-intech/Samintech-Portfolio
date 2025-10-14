import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"
import { ArrowLeft, Link as LinkIcon } from "lucide-react"
// ==================================================


export default function ProjectCase() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <section className="container py-20">
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 mt-4 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </section>
    )
  }

  return (
    <article className="container py-10 md:py-16 space-y-10">
      {/* header */}
      <header className="space-y-4">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
        {project.tagline && <p className="text-white/70">{project.tagline}</p>}

        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          {project.year && <span className="rounded-full border px-2.5 py-1">{project.year}</span>}
          <span className="rounded-full border px-2.5 py-1">{project.category}</span>
          {project.role && <span className="rounded-full border px-2.5 py-1">{project.role}</span>}
        </div>

        <div className="rounded-2xl overflow-hidden border ring-1 ring-white/5">
          <img src={project.cover} alt={project.title} className="w-full h-[360px] md:h-[520px] object-cover" />
        </div>
      </header>

      {/* quick facts */}
      {(project.stats?.length || project.stack?.length) && (
        <section className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-[#1b1b1b] ring-1 ring-white/5 p-4 md:col-span-2">
            <h3 className="text-sm text-white/70 mb-3">Highlights</h3>
            <ul className="grid sm:grid-cols-3 gap-3">
              {project.stats?.map(s => (
                <li key={s.label} className="rounded-xl border bg-[#191919] p-3">
                  <div className="text-[13px] text-white/60">{s.label}</div>
                  <div className="text-lg font-semibold">{s.value}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-[#1b1b1b] ring-1 ring-white/5 p-4">
            <h3 className="text-sm text-white/70 mb-3">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map(t => <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>)}
            </div>
          </div>
        </section>
      )}

      {/* sections */}
      {project.sections?.map(sec => (
        <section key={sec.heading} className="rounded-2xl border bg-[#1b1b1b] ring-1 ring-white/5 p-6">
          <h2 className="text-xl font-semibold mb-3">{sec.heading}</h2>
          <p className="text-white/80 leading-relaxed">{sec.body}</p>
        </section>
      ))}

      {/* links */}
      {project.links?.length ? (
        <section className="rounded-2xl border bg-[#1b1b1b] ring-1 ring-white/5 p-6">
          <h3 className="text-sm text-white/70 mb-3">Links</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.links.map(l => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-xl border bg-[#191919] px-3 py-2 hocus:bg-[#202020]">
                  <LinkIcon className="h-4 w-4" /> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
