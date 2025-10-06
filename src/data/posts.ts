export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string          // ISO: "2025-09-12"
  tag?: string
  image: string         // /blog/slug.jpg
  href?: string         // external override; if absent, use /blog/:slug
}

export const posts: Post[] = [
  {
    slug: "human-centered-rag",
    title: "Human-Centered RAG: Patterns for Trust",
    excerpt: "Designing retrieval flows and UI affordances that make LLM answers explainable and auditable.",
    date: "2025-08-21",
    tag: "AI/UX",
    image: "/blog/rag-trust.jpg",
  },
  {
    slug: "agents-in-the-wild",
    title: "Agents in the Wild: Orchestrating Multi-Agent Systems",
    excerpt: "How to scope tasks, route tools, and evaluate behaviors before production.",
    date: "2025-06-10",
    tag: "Agents",
    image: "/blog/agents.jpg",
  },
  {
    slug: "ux-for-ml",
    title: "UX for ML Interfaces",
    excerpt: "From affordances to guardrails: patterns that turn models into products.",
    date: "2025-04-03",
    tag: "UX",
    image: "/blog/ux-ml.jpg",
  },
  // add more…
]
