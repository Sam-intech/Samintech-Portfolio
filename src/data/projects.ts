export type Project = {
  slug: string
  title: string
  blurb: string
  category: string
  tags: string[]
  stack: string[]
  links?: { label: string; href: string }[]
  image?: string
}

export const projects: Project[] = [
  {
    slug: "neutrofi",
    title: "NeutroFi — AI Crypto Advisor",
    blurb: "Multi-agent analysis combining sentiment, news, and technicals; Streamlit prototype with clear buy/hold/sell signals.",
    category: "AI Systems",
    tags: ["Agents", "RAG", "Sentiment"],
    stack: ["Python", "LangChain", "Streamlit"],
    links: [{ label: "Case study", href: "#" }],
    image: "/images/neutrofi.png", // add to public/images
  },
  {
    slug: "neutrofi",
    title: "NeutroFi — AI Crypto Advisor",
    blurb: "Multi-agent analysis combining sentiment, news, and technicals; Streamlit prototype with clear buy/hold/sell signals.",
    category: "AI Systems",
    tags: ["Agents", "RAG", "Sentiment"],
    stack: ["Python", "LangChain", "Streamlit"],
    links: [{ label: "Case study", href: "#" }],
    image: "/images/neutrofi.png", // add to public/images
  },
  // repeat for others…
]
