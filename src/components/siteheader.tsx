import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Menu, X} from "lucide-react"
// If you added the theme provider earlier, uncomment this:
// import { ModeToggle } from "@/components/ModeToggle"
// ===================================================


const NAV = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // lock body scroll when menu is open
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className={["sticky top-0 z-50 w-full border-b transition-colors", scrolled ? "bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background/40" ].join(" ")}>
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-semibold tracking-tight">
          Sam · <span className="text-primary">AI/ML Engineer</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="opacity-80 hover:opacity-100 transition-opacity">
              {item.label}
            </a>
          ))}
          {/* If using theme toggle, show it: */}
          {/* <ModeToggle /> */}
          <div className="ml-2 flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/Sam_Sonowo_CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      <nav
        className={[
          "md:hidden fixed top-16 left-0 right-0 z-50 border-b bg-background transition-transform",
          open ? "translate-y-0" : "-translate-y-full"
        ].join(" ")}
        aria-hidden={!open}
      >
        <ul className="container py-4 grid gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-xl px-3 py-3 text-sm hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex gap-2 px-3 py-2">
            <Button variant="outline" className="flex-1" asChild>
              <a href="https://docs.google.com/document/d/1KjAfzbX0T0dIlfjmq1RRMSIBWNsIz1SzM5H1dlxrUL4/edit?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
            </Button>
            <Button className="flex-1" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
