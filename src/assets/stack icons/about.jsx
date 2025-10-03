import { Section } from "./section"

export function About() {
  return (
    <Section id="about" className="container py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: copy card */}
        <div className="rounded-[1.75rem] border bg-[#1b1b1b] ring-1 ring-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="space-y-4 text-sm leading-6 text-white/80">
            <p>
              I’m Sam, an <span className="text-white">AI/ML Engineer</span> with a{" "}
              <span className="text-white">UX Engineering</span> background. I build usable,
              human-centred AI products—bridging model performance and real-world adoption.
            </p>
            <p>
              My work spans multi-agent systems, RAG pipelines, explainability, and clean front-end delivery
              (React/TypeScript, Tailwind, shadcn/ui). I care about clarity, speed, and measurable outcomes.
            </p>
            <ul className="grid gap-2">
              <li className="rounded-xl border bg-[#191919] px-3 py-2">• Multi-agent orchestration & evaluation</li>
              <li className="rounded-xl border bg-[#191919] px-3 py-2">• RAG pipelines with vector search</li>
              <li className="rounded-xl border bg-[#191919] px-3 py-2">• Frontend UX for adoption & trust</li>
            </ul>
          </div>
        </div>

        {/* Right: big media card with overlay caption */}
        <div className="rounded-[1.75rem] border bg-[#1b1b1b] ring-1 ring-white/5 p-2 md:p-3">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Replace with your own collage or headshot */}
            <img
              src="/about/mosaic.jpg"
              alt="Selected work & moments"
              className="h-[22rem] md:h-[26rem] w-full object-cover"
            />
            {/* bottom caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="inline-block rounded-2xl border bg-black/30 px-3 py-2 backdrop-blur">
                <div className="text-xl font-semibold text-white">About Sam</div>
                <div className="text-sm text-white/80">AI/ML • UX Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
