import { Section } from "./section"

export function About() {
  return (
    <Section id="about" className="container md:py-0">
      {/* Outer frame */}
      <div className="min-h-[450px] rounded-3xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-1">
        {/* Media card */}
        <div className="relative overflow-hidden rounded-3xl h-full w-full min-h-[450px]">
          {/* Image (collage) */}
          <img
            src="src/assets/samtower.jpeg"
            alt="Image of sam at tower bridge"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Soft bottom gradient for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Bottom-left caption (no pill, just text on image) */}
          <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6">
            <div className="flex flex-col items-start gap-2 max-w-[80%]">
              <h3 className="text-3xl md:text-5xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.55)]">
                About Sam
              </h3>
              <p className="text-left text-sm text-white/85">
                I’m Sam, an AI/ML Engineer with a UX Engineering background. I design and ship human-centred AI products — 
                from modelling and agent orchestration to interfaces that earn user trust and drive adoption. Comfortable from 
                notebooks to production UI: data prep, prototyping, evaluation, and front-end implementation with React/Tailwind/shadcn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
