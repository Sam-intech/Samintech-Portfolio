export type TechStack = {
  name: string
  logo: string
  subtitle?: string   // 👈 add this
}
export type StackGroup = {
  title: string
  items: TechStack[]
}

export const Stack: StackGroup[] = [
  {
    title: "AI / ML",
    items: [
      { name: "Python",       logo: "/stackicons/python.svg",       subtitle: "Language" },
      { name: "PyTorch",      logo: "/stackicons/pytorch.svg",      subtitle: "AI/ML framework" },
      { name: "scikit-learn", logo: "/stackicons/scikrit.svg",       subtitle: "Classical ML" },
      { name: "LangChain",    logo: "/stackicons/langchain.svg",    subtitle: "LLM tooling" },
      { name: "Matlplotlib",   logo: "/stackicons/metlabplit.svg",   subtitle: "ML Plotting" },
      // { name: "Vector DBs",   logo: "/logos/vectordb.svg",     subtitle: "RAG index" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML",        logo: "/stackicons/html.svg",         subtitle: "Markup" },
      { name: "CSS",         logo: "/stackicons/css.svg",          subtitle: "Web Styling" },
      { name: "Javascript",   logo: "/stackicons/javascript.svg",   subtitle: "Language" },
      { name: "React",        logo: "/stackicons/react.svg",        subtitle: "JS Framework" },
      // { name: "TypeScript",   logo: "/logos/typescript.svg",   subtitle: "Typed JS" },
      // { name: "Vite",         logo: "/logos/vite.svg",         subtitle: "Build tool" },
      { name: "Tailwind",     logo: "/stackicons/tailwind.svg",     subtitle: "Styling" },
      { name: "shadcn/ui",    logo: "/stackicons/shadcn.svg",       subtitle: "Components" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma",        logo: "/stackicons/html.svg",        subtitle: "Design tool" },
      // { name: "Framer",       logo: "/logos/framer.svg",       subtitle: "Website builder" },
      // { name: "Cursor",       logo: "/logos/cursor.svg",       subtitle: "Vibe Coding" },
      { name: "Notion",       logo: "/stackicons/react.svg",       subtitle: "Docs & wiki" },
      { name: "Miro",         logo: "/logos/miro.svg",         subtitle: "Whiteboarding" },
      { name: "Canva",        logo: "/logos/canva.svg",        subtitle: "Graphics" },
      // { name: "After Effect", logo: "/logos/aftereffects.svg", subtitle: "Animation" },
    ],
  },
]
