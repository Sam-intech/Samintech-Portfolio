export type ExperienceItem = {
  company: string
  role: string
  period: string // e.g., "2023 – Present"
  href?: string
}

export const experience: ExperienceItem[] = [
  { company: "Alpha Training Lab", role: "User Experience Engineer", period: "2022 – 2025", href: "#" },
  { company: "P2P CryptoHub", role: "User Experience Designer", period: "2023", href: "#" },
  { company: "Hooman Digitals", role: "UI/UX Designer", period: "2023", href: "#" },
  // { company: "Cygnet", role: "Product Engineer", period: "2022", href: "#" },
  // add yours…
]

