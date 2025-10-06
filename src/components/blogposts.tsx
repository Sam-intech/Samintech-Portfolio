import { Section } from "../components/section"
import { posts } from "../data/posts"
import { Pencil, ArrowUpRight } from "lucide-react"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function BlogPosts() {
  return (
    <Section id="writing" className="container py-14 md:py-20">
      {/* header row (optional) */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Blogposts</h2>
        <a
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
        >
          View all <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* 1 / 2 / 3 columns */}
      <div className="flex justify-between items-start flex-no-wrap gap-3">
        {posts.map((p) => {
          const link = p.href || `/blog/${p.slug}`
          return (
            <a key={p.slug} href={link}
              className={["group w-full transition",
              ].join(" ")}
            >
              {/* inner panel */}
              <div className="min-h-[450px] flex flex-col justify-between rounded-2xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-1 ">
                {/* label row */}
                <div className="flex items-center justify-between px-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Pencil className="h-4 w-4" />
                    Blog
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/60 opacity-0 -translate-y-0.5 transition group-hover:opacity-100" />
                </div>

                {/* body */}
                <div className="flex flex-col items-start gap-2 px-2 pb-6 pt-8">
                  <div className="mb-2 text-sm text-white/50">
                    {formatDate(p.date)}
                  </div>

                  {/* big serif title like the reference */}
                  <h3 className="text-left text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
                    {p.title}
                  </h3>

                  <p className="text-left text-white/70 leading-tight">
                    {p.excerpt}
                  </p>
                </div>

                {/* subtle inner outline for the “glass” feel */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-white/8" />
              </div>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
