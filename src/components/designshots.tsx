import { Section } from "../components/section"
import { Dribbble, ArrowUpRight } from "lucide-react"

export function DesignShots() {
  return (
    <Section id="shots" className="p-0">
      <a href="https://dribbble.com/" target="_blank" rel="noreferrer"
        className="min-h-[450px] flex flex-col justify-between rounded-2xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-2"
      >
        {/* Label row */}
        <div className="mb-3 flex items-center justify-between text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Dribbble className="h-4 w-4" />
            Dribbble Shots
          </div>
          <ArrowUpRight className="h-4 w-4 opacity-60" />
        </div>

        {/* Media */}
        <div className="relative overflow-hidden rounded-2xl min-h-[380px] h-full">
          <img
            src="/Designcover.jpg"
            alt="Dribbble shots collage"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
          <div className="absolute left-0 bottom-0 flex flex-col items-start gap-1 p-5">
            <h3 className="text-4xl font-semibold text-white tracking-tight">Once a Creative</h3>
            <p className="text-white/85">Check out shots on Dribbble</p>
          </div>
        </div>
      </a>
    </Section>
  )
}
