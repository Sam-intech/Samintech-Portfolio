import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

const SOCIALS = [
  { label: "X", href: "https://x.com/Sam_intech", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sonowosamuel/", icon: Linkedin },
  { label: "Email", href: "mailto:sonowosamuel@icloud.com", icon: Mail },
  // Add your GitHub repo once public:
  { label: "GitHub", href: "https://github.com/Sam-intech", icon: Github },
]

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        {/* Brand / Bio */}
        <div className="space-y-3 flex flex-col items-start">
          <div className="font-semibold">Samuel Sonowo</div>
          <p className="text-sm text-muted-foreground text-left">
            AI/ML Engineer with a UX Engineering background—building usable, human-centred AI products.
          </p>
        </div>

        {/* Quick links */}
        <nav className="space-y-3">
          <div className="text-sm font-medium">Explore</div>
          <ul className="grid gap-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Social - connect</div>
          <div className="flex gap-3 items-end">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Samuel Sonowo. All rights reserved.</p>
          <p>Built with React · Tailwind · shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
