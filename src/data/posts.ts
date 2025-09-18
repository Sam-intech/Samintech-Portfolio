export type Post = {
  slug: string
  title: string
  blurb: string
  date: string
}

export const posts: Post[] = [
  {
    slug: "ux-patterns-for-llm-apps",
    title: "UX Patterns for LLM Apps",
    blurb: "Design choices that improve trust, comprehension, and control in AI interfaces.",
    date: "2025-09-10",
  },
  {
    slug: "evaluating-agentic-systems",
    title: "Evaluating Agentic Systems",
    blurb: "Lightweight eval loops and metrics beyond accuracy: latency, reliability, UX signals.",
    date: "2025-08-29",
  },
  {
    slug: "streamlit-to-react-migrations",
    title: "Streamlit → React Migrations",
    blurb: "When to keep Streamlit and when to move to a typed React front-end.",
    date: "2025-08-18",
  },
]
