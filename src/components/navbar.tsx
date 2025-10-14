import { useEffect, useState } from "react"
import { Bookmark, Grid3X3, Pencil, Sparkles, Ellipsis } from "lucide-react"
// ===================================================


// optional: pass links/handlers via props if you like
export function FloatingDock() {
  const [hidden, setHidden] = useState(false)

  // Auto-hide on scroll down, show on scroll up (subtle behavior)
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80) // hide when scrolling down beyond hero
      lastY = y
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4",
        "transition-transform duration-300",
        hidden ? "translate-y-24" : "translate-y-0",
      ].join(" ")}
    >
      <nav
        aria-label="Quick actions"
        className={[
          // container
          "flex items-center gap-3 rounded-full border bg-background/80 px-3 py-2",
          "shadow-[0_10px_30px_rgba(0,0,0,.25)] backdrop-blur supports-[backdrop-filter]:bg-background/60",
          // ring for pop
          "ring-1 ring-black/5 dark:ring-white/10",
          // max width
          "max-w-[min(95vw,800px)]",
        ].join(" ")}
      >
        {/* Avatar button */}
        <a href="#about" className="group relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-card ring-1 ring-black/5 dark:ring-white/10" aria-label="About Sam">
          {/* replace src with your image in /public */}
          <img src="/favicon.svg" alt="Sam Sonowo" className="h-10 w-10 rounded-full object-cover" loading="eager"/>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-primary/50 transition" />
        </a>

        {/* Dot dividers */}
        <Divider />

        {/* Icon buttons */}
        <IconButton href="#projects" label="Projects">
          <Grid3X3 className="h-5 w-5" />
        </IconButton>

        <IconButton href="#writing" label="Saved / Writing">
          <Bookmark className="h-5 w-5" />
        </IconButton>

        <IconButton href="mailto:sonowosamuel@icloud.com" label="Contact">
          <Pencil className="h-5 w-5" />
        </IconButton>

        <IconButton href="#highlights" label="Highlights">
          <Sparkles className="h-5 w-5" />
        </IconButton>

        <IconButton href="#more" label="More">
          <Ellipsis className="h-5 w-5" />
        </IconButton>
      </nav>
    </div>
  )
}

function IconButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={[
        "inline-flex h-12 w-12 items-center justify-center rounded-full",
        "border bg-card/70 hover:bg-card transition",
        "ring-1 ring-black/5 dark:ring-white/10",
        "text-foreground/80 hover:text-foreground",
      ].join(" ")}
    >
      {children}
    </a>
  )
}

function Divider() {
  return (
    <span
      aria-hidden
      className="mx-1 inline-block h-8 w-[2px] rounded-full bg-border"
    />
  )
}
