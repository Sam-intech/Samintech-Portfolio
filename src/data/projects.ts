export type Project = {
  slug: string
  title: string
  tagline?: string
  category: string
  year?: string
  role?: string
  cover: string          // path in /public/images
  summary: string
  links?: { label: string; href: string }[]
  stats?: { label: string; value: string }[]
  stack?: string[]
  // long-form content blocks (for the case-study page)
  sections?: { heading: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: "neutrofi",
    title: "NeutroFi — AI Crypto Advisor",
    tagline: "Multi-agent analysis with explainability and risk-aware signals",
    category: "AI/ML",
    year: "2025",
    role: "AI/ML Engineer • Product",
    cover: "/landing.png",
    summary:
      "A modular, human-centred multi-agent system that analyzes on/off-chain signals and produces buy/hold insights with reasoning and guardrails.",
    links: [
      { label: "Case study (Medium)", href: "https://medium.com/@sonowosamuel" },
      { label: "Prototype", href: "#" }
    ],
    stats: [
      { label: "Decision Latency", value: "~6.2s" },
      { label: "Coverage", value: "Top 200 coins" },
      { label: "Agents", value: "4 (orchestrated)" }
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Vector DB", "Streamlit"],
    sections: [
      {
        heading: "Overview",
        body:
          "NeutroFi helps retail users cut through market noise. The system coordinates specialized agents (data, sentiment, technicals, and reasoning) to fuse signals into a transparent recommendation with an explanation UI."
      },
      {
        heading: "Problem & Goals",
        body:
          "Crypto data is noisy, fragmented, and time-sensitive. Goals: (1) fuse diverse signals, (2) show human-readable reasons, (3) enforce risk and ethics guardrails, and (4) keep latency low for interactive use."
      },
      {
        heading: "Architecture",
        body:
          "An orchestrator routes tasks to domain agents. Each agent summarizes its evidence; a judge/critic agent reconciles conflicts and writes the final rationale. Embeddings + a vector index cache relevant context. The UI presents a verdict, confidence, key drivers, and links back to sources."
      },
      {
        heading: "Evaluation",
        body:
          "Offline backtests and spot-checks compare agent recommendations with market outcomes; qualitative UX checks ensure users can understand and contest a verdict. Metrics include latency, coverage, and rationale quality."
      },
      {
        heading: "What I did",
        body:
          "Agent design + orchestration, prompt + memory strategy, safety rails, data adapters, and delivery UI. I focused on explainability and ‘trust by design’ to drive adoption."
      },
      {
        heading: "Next",
        body:
          "Broker integration, portfolio simulation, and live experiments to quantify real-world impact."
      }
    ]
  },
  // add more projects here...
]
