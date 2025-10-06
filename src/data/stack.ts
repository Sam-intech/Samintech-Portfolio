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
      { name: "Python",       logo: "src/assets/stack icons/python.svg",       subtitle: "Language" },
      { name: "PyTorch",      logo: "src/assets/stack icons/pytorch.svg",      subtitle: "AI/ML framework" },
      { name: "scikit-learn", logo: "src/assets/stack icons/scikrit.svg",       subtitle: "Classical ML" },
      { name: "LangChain",    logo: "/logos/langchain.svg",    subtitle: "LLM tooling" },
      { name: "Matlplotlib",   logo: "src/assets/stack icons/metlabplit.svg",   subtitle: "ML Plotting" },
      // { name: "Vector DBs",   logo: "/logos/vectordb.svg",     subtitle: "RAG index" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML",        logo: "src/assets/stack icons/html.svg",         subtitle: "Markup" },
      { name: "CSS",         logo: "src/assets/stack icons/css.svg",          subtitle: "Web Styling" },
      { name: "Javascript",   logo: "src/assets/stack icons/javascript.svg",   subtitle: "Language" },
      { name: "React",        logo: "src/assets/stack icons/react.svg",        subtitle: "JS Framework" },
      // { name: "TypeScript",   logo: "/logos/typescript.svg",   subtitle: "Typed JS" },
      // { name: "Vite",         logo: "/logos/vite.svg",         subtitle: "Build tool" },
      { name: "Tailwind",     logo: "src/assets/stack icons/tailwind.svg",     subtitle: "Styling" },
      { name: "shadcn/ui",    logo: "src/assets/stack icons/shadcn.svg",       subtitle: "Components" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma",        logo: "src/assets/stack icons/html.svg",        subtitle: "Design tool" },
      // { name: "Framer",       logo: "/logos/framer.svg",       subtitle: "Website builder" },
      // { name: "Cursor",       logo: "/logos/cursor.svg",       subtitle: "Vibe Coding" },
      { name: "Notion",       logo: "src/assets/stack icons/react.svg",       subtitle: "Docs & wiki" },
      { name: "Miro",         logo: "/logos/miro.svg",         subtitle: "Whiteboarding" },
      { name: "Canva",        logo: "/logos/canva.svg",        subtitle: "Graphics" },
      // { name: "After Effect", logo: "/logos/aftereffects.svg", subtitle: "Animation" },
    ],
  },
]
