export type Social = {
  name: string
  handle: string
  href: string
  icon: "x" | "instagram" | "linkedin" | "mail"
}

export const socials: Social[] = [
  { name: "X",    handle: "@Sam_intech",    href: "https://x.com/Sam_intech",   icon: "x" },
  { name: "Instagram",    handle: "@samintech",   href: "https://instagram.com/samintech",    icon: "instagram" },
  { name: "LinkedIn",   handle: "@thecreativesam",    href: "https://linkedin.com/in/samintech",    icon: "linkedin" },
  { name: "Email",    handle: "sonowosamuel@icloud.com",    href: "mailto:sonowosamuel@icloud.com",   icon: "mail" },
]
