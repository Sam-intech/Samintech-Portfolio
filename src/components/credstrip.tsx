import { Section } from "./section"

const items = [
  "Python", "PyTorch", "scikit-learn", "LangChain",
  "Vector DBs", "RAG", "LLM Agents",
  "React / Vite", "Next.js", "TypeScript",
  "Tailwind", "shadcn/ui", "A11y", "Data Viz",
]

export function CredStrip() {
  return (
    <Section>
      <div className="container py-10">
        <div className="text-sm text-muted-foreground mb-3">Core skills & tools</div>
        <ul className="flex flex-wrap gap-2">
          {items.map((t) => (
            <li
              key={t}
              className="border rounded-full px-3 py-1 text-xs bg-card/50"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
