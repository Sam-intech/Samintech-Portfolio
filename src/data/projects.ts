export type Project = {
  slug: string
  title: string
  // blurb: string
  category: string
  tags?: string[]
  // stack: string[]
  // links?: { label: string; href: string }[]
  image?: string
  href: string
  description?: string
}

export const projects: Project[] = [
  {
    slug: "neutrofi",
    title: "NeutroFi — AI Crypto Advisor",
    category: "Agentic AI, Full-Stack",
    image: "/projectcover/landing.png",
    href: "https://neutrofi.vercel.app",
  },
  {
    slug: "seams-reivew",
    title: "Seams Review Sentiment Analysis",
    category: "Machine Learning",
    image: "/projectcover/seamscover.png",
    href: "https://voteable.xyz",
  },
]
