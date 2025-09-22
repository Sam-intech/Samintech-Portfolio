import { Section } from "./section"
import { Button } from "./ui/button"

export function Hero() {
  return (
    // <section className="relative overflow-hidden">
    <Section id="hero">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 right-1/2 h-64 w-[36rem] -translate-x-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(40rem 16rem at 50% 50%, hsl(var(--ring)/.18), transparent 55%)",
          }}
        />
        <div
          className="absolute -bottom-24 left-1/2 h-64 w-[36rem] translate-x-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(40rem 16rem at 50% 50%, hsl(var(--primary)/.18), transparent 55%)",
          }}
        />
      </div>

      <div className="container py-20 md:py-28">
        {/* Availability badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Available for AI/ML Engineer roles · London / Remote
        </div>

        {/* Main copy */}
        <div className="max-w-100% space-y-6 flex flex-col items-center text-center">
          <h1 className="text-4xl w-60% md:text-5xl font-semibold leading-tight">
            AI/ML Engineer building usable, human-centred AI products
          </h1>

          <p className="text-muted-foreground">
            Bridging model performance and real-world adoption with UX engineering,
            clean frontend architecture, and measurable outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Sam_Sonowo_CV.pdf" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Cred chips */}
          <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {[
              "Python",
              "PyTorch",
              "scikit-learn",
              "LangChain",
              "RAG",
              "Agents",
              "React/Next",
              "TypeScript",
              "Tailwind/shadcn",
              "Data Viz",
              "A11y",
            ].map((t) => (
              <li
                key={t}
                className="border rounded-full px-2.5 py-1 bg-card/50"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick proof / stats */}
        <div className="mt-10 grid max-w-100% grid-cols-3 overflow-hidden rounded-2xl border text-center text-sm">
          {[
            { k: "Projects", v: "8+" },
            { k: "Focus", v: "AI/ML · UX Eng" },
            { k: "Stack", v: "PyTorch · React" },
          ].map(({ k, v }) => (
            <div key={k} className="p-4 [&:not(:last-child)]:border-r">
              <div className="text-xl font-semibold">{v}</div>
              <div className="text-muted-foreground">{k}</div>
            </div>
          ))}
        </div>
      </div>
    {/* </section> */}
    </Section>
  )
}
