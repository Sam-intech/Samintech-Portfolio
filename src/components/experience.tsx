import { Section } from "./section"
import { experience } from "../data/experience"
import { Briefcase } from "lucide-react"
import React from "react"
// ===================================================


export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="container py-0 md:py-20">
      {/* Outer frame */}
      <div className="min-h-[450px] flex flex-col justify-between rounded-2xl p-2 border border-[#232323] bg-[#1b1b1b]">
        {/* Label (inside the frame, top-left) */}
        <div className="px-3 flex items-center gap-1 text-sm text-white/70">
          <Briefcase className="h-4 w-4" />
          Experience
        </div>

        {/* Inner panel */}
        <div className="relative rounded-2xl border-[#232323] border bg-[#191919] p-6">
          {/* Timeline rail */}
          <div className="absolute top-8 bottom-8 w-px bg-white/10 z-0" aria-hidden />

          <ul className="relative z-10 flex flex-col gap-8">
            {experience.map((item, i) => (
              <li key={`${item.company}-${i}`} className="relative">
                {/* Node */}
                <span
                  aria-hidden
                  className="
                    absolute -translate-x-1/2 top-1.5
                    grid h-3 w-3 place-items-center rounded-full
                    bg-white/10 border border-white/20
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                </span>


                {/* Content */}
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="block group flex flex-col items-start pl-5"
                  >
                    <div className="text-[15px] font-semibold group-hover:underline underline-offset-4">
                      {item.company}
                    </div>
                    <div className="text-sm text-white/70">
                      {item.role} • {item.period}
                    </div>
                  </a>
                ) : (
                  <div>
                    <div className="text-[15px] font-semibold">{item.company}</div>
                    <div className="text-sm text-white/70">
                      {item.role} • {item.period}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
