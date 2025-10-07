import { Mail, FileText } from "lucide-react"
import { Button } from "./ui/button"


export function Hero() {
  return (
    <section className="relative border-b bg-background">
      <div className="container flex flex-col items-start justify-center gap-10 py-20 sm:py-10">
        <div className="container flex flex-col items-start gap-2">
          {/* Avatar + Name */}
          <div className="flex flex-col w-full justify-start items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs text-muted-foreground, sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-400 to-lime-300 animate-pulse" />
              Available for AI/ML Engineer roles · England / Remote
            </div>
            <div className="flex items-center gap-4 sm:gap-10">
              <img src="src/assets/IMG_8849.JPG" alt="Sam Sonowo" className="h-14 w-14 rounded-full border object-cover"/>
              <div className="flex flex-col leading-tight items-start">
                <p className="text-xl font-semibold, sm:text-xl">Samuel Sonowo</p>
                <p className="text-sm text-muted-foreground, sm:text-sm">AI/ML Engineer</p>
              </div>
            </div>
          </div>


          {/* Headline */}
          <h1 className="w-[500px] text-3xl font-medium leading-snug text-left sm:w-full">
            Blending technical excellence with product vision.
            {/* I help teams turn complex models into intuitive, user-focused solutions that drive real business impact. */}
            {/* <span className="block mt-2 text-primary font-bold animate-fade">{WORDS[index]}</span> */}
          </h1>
        </div>


        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <a href="mailto:sonowosamuel@icloud.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Connect
            </a>
          </Button>
          <Button asChild>
            <a href="https://docs.google.com/document/d/1KjAfzbX0T0dIlfjmq1RRMSIBWNsIz1SzM5H1dlxrUL4/edit?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Resume
            </a>
          </Button>
          {/* <Button asChild variant="outline">
            <a href="https://github.com/Sam-intech" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/sonowosamuel/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
