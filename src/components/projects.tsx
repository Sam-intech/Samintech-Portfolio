import { Section } from "./section"
import { projects } from "../data/projects"
// import { Badge } from "./ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
      {/* Grid */}
      <div className="w-full grid gap-6 md:gap-8 md:grid-cols-2 pb-10">
        {projects.map((p) => (
          <a key={p.slug} href={`/projects/${p.slug}`}
            className={[
              "group relative overflow-hidden rounded-3xl border border-[#232323] transition",
              // card height
              "h-[22rem] md:h-[28rem]",
              // card base tone (distinct from page #151515 but close)
              "bg-[#1b1b1b]",
              // subtle outer ring for pop
              "ring-1 ring-white/5 hover:ring-white/10",
              "shadow-[0_10px_30px_rgba(0,0,0,.25)]",
            ].join(" ")}
          >
            {/* Top bar: dotted left + label + hover arrow right */}
            <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 pt-4 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                {/* dotted glyph */}
                <span aria-hidden className="h-3 w-3" style={{background:"radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "4px 4px",}}/>
                <span className="opacity-80">Project</span>
              </div>

              <ArrowUpRight
                className="h-4 w-4 text-white/70 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
                aria-hidden
              />
            </div>

            {/* Media wrapper (keeps image fully visible) */}
            <div className="relative h-full w-full p-3 pt-20">
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#191919]">
                {/* Full image: not cropped */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Harmonized overlay for legibility (theme-matched, not pure black) */}
                <div className="absolute inset-0 bg-[#151515]/55 group-hover:bg-[#151515]/45 transition" />

                {/* Bottom text overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 w-full flex flex-col justify-end items-start p-5">
                  <h3 className="text-2xl font-semibold text-white drop-shadow-sm">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/75">{p.category}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
