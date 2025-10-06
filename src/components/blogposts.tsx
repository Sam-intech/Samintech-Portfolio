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
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const link = p.href || `/blog/${p.slug}`
          return (
            <a key={p.slug} href={link} className="group block w-full transition">
              {/* card */}
              <div className="relative overflow-hidden min-h-[450px] flex flex-col justify-between rounded-2xl border border-[#232323] bg-[#1b1b1b] focus:outline-none focus-visible:outline-none p-2">
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
                  <div className="mb-2 text-sm text-white/50">{formatDate(p.date)}</div>
                  <h3 className="text-left text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="text-left text-white/70 leading-tight">{p.excerpt}</p>
                </div>

                {/* inner outline (now clipped to the card) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#232323]" />
              </div>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
