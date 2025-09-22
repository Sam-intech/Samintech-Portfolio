import { Section } from "./section"
import { Button } from "./ui/button"

export function About() {
  return (
    <Section id="about">
      <div className="container py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-muted-foreground">
            I’m Sam, an AI/ML Engineer with a UX Engineering background. I design and ship
            human-centred AI products — from modelling and agent orchestration to interfaces
            that earn user trust and drive adoption.
          </p>
          <p className="text-muted-foreground">
            Comfortable from notebooks to production UI: data prep, prototyping, evaluation,
            and front-end implementation with React/Tailwind/shadcn.
          </p>
          <div className="flex gap-3">
            <Button asChild><a href="#projects">View Projects</a></Button>
            <Button variant="outline" asChild><a href="/Sam_Sonowo_CV.pdf" target="_blank" rel="noreferrer">Download CV</a></Button>
          </div>
        </div>
        <div className="rounded-2xl border aspect-video bg-gradient-to-br from-muted to-background grid place-items-center text-sm text-muted-foreground">
          {/* Drop your headshot or illustration here */}
          {/* Add photo / graphic */}
          <img
            // src="../assets/sam.JPG"
            src="/IMG_8849.JPG"
            alt="Samuel Sonowo"
            className="h-full w-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </Section>
  )
}
