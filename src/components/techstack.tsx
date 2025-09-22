import { Section } from "./section"
import { techstacks } from "../data/stack"

const CATEGORIES: ("AI/ML" | "Frontend" | "Design")[] = ["AI/ML", "Frontend", "Design"]

export function TechStack() {
  return (
    <Section id="stack">
      <div className="container py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Tool Stack</h2>
          <p className="text-sm text-muted-foreground">
            Core technologies and design tools I use daily.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">{cat}</h3>
              <ul className="flex flex-wrap gap-2">
                {techstacks
                  .filter((t) => t.category === cat)
                  .map((t) => (
                    <li key={t.name} className="rounded-xl border bg-card/50 px-3 py-1 text-sm">
                      {t.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
