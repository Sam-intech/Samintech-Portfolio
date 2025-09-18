import { Section } from "./section"
import { posts } from "../data/posts"

export function Writing() {
  return (
    <Section id="writing">
      <div className="container py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Writing</h2>
          <p className="text-sm text-muted-foreground">
            Short reads on building usable AI systems — patterns, trade-offs, and practical tips.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.slug} className="group block rounded-2xl border p-5 h-full hover:border-foreground/20 transition-colors" href={`#/posts/${p.slug}`}>
              <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="mt-2 text-lg font-semibold group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
