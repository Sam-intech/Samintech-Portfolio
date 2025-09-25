export type Stack = {
  name: string
  category: "AI/ML" | "Frontend" | "Design"
  logo?: string // optional, if we add icons later
}

export const techstacks: Stack[] = [
  { name: "Python", category: "AI/ML", logo: "/logo/vite.svg" },
  { name: "PyTorch", category: "AI/ML", logo: "/logo/vite.svg" },
  { name: "scikit-learn", category: "AI/ML", logo: "/logo/vite.svg" },
  { name: "LangChain", category: "AI/ML", logo: "/logo/vite.svg" },
  { name: "Vector DBs", category: "AI/ML", logo: "/logo/vite.svg" },

  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },

  { name: "Figma", category: "Design" },
  { name: "Framer", category: "Design" },
]
