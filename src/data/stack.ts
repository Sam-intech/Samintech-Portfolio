export type Stack = {
  name: string
  category: "AI/ML" | "Frontend" | "Design"
  logo?: string // optional, if we add icons later
}

export const techstacks: Stack[] = [
  { name: "Python", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "scikit-learn", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "Vector DBs", category: "AI/ML" },

  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },

  { name: "Figma", category: "Design" },
  { name: "Framer", category: "Design" },
]
