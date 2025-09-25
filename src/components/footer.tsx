export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t">
      {/* subtle noise overlay */}
      {/* <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')", backgroundSize: "240px 240px",}}
      /> */}

      <div className="container py-5">
        <div className="flex items-center justify-between text-sm">
          <p className="flex items-center gap-2 text-foreground/90">
            <span aria-hidden>©</span> {year} Samuel Sonowo. All Rights Reserved.
          </p>

          <p>Built with React · Tailwind · shadcn/ui</p>
        </div>
      </div>

      {/* spacing so the floating dock never overlaps the footer */}
      {/* <div className="h-16 md:h-20" /> */}
    </footer>
  )
}
