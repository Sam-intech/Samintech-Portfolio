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
      { name: "PyTorch",      logo: "src/assets/stack icons/pytorch.svg",      subtitle: "DL framework" },
      { name: "scikit-learn", logo: "/logos/scikit.svg",       subtitle: "Classical ML" },
      { name: "LangChain",    logo: "/logos/langchain.svg",    subtitle: "LLM tooling" },
      // { name: "Vector DBs",   logo: "/logos/vectordb.svg",     subtitle: "RAG index" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Html",        logo: "/logos/html.svg",         subtitle: "Markup" },
      { name: "Css",         logo: "/logos/css.svg",          subtitle: "Styling" },
      { name: "Javascript",   logo: "src/assets/stack icons/javascript.svg",   subtitle: "Language" },
      { name: "React",        logo: "/logos/react.svg",        subtitle: "JS Framework" },
      // { name: "TypeScript",   logo: "/logos/typescript.svg",   subtitle: "Typed JS" },
      // { name: "Vite",         logo: "/logos/vite.svg",         subtitle: "Build tool" },
      { name: "Tailwind",     logo: "/logos/tailwind.svg",     subtitle: "Styling" },
      { name: "shadcn/ui",    logo: "/logos/shadcn.svg",       subtitle: "Components" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma",        logo: "/logos/figma.svg",        subtitle: "Design tool" },
      // { name: "Framer",       logo: "/logos/framer.svg",       subtitle: "Website builder" },
      // { name: "Cursor",       logo: "/logos/cursor.svg",       subtitle: "Vibe Coding" },
      { name: "Notion",       logo: "/logos/notion.svg",       subtitle: "Docs & wiki" },
      { name: "Miro",         logo: "/logos/miro.svg",         subtitle: "Whiteboarding" },
      { name: "Canva",        logo: "/logos/canva.svg",        subtitle: "Graphics" },
      // { name: "After Effect", logo: "/logos/aftereffects.svg", subtitle: "Animation" },
    ],
  },
]
