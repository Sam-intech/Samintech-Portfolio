import { Section } from "./section"
import { experience } from "../data/experience"
import { Briefcase } from "lucide-react"
import React from "react"

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="container py-0 md:py-20">
      {/* Outer frame */}
      <div className="min-h-[450px] flex flex-col justify-between rounded-2xl p-2 border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 ">
        {/* Label (inside the frame, top-left) */}
        <div className="px-3 flex items-center gap-1 text-sm text-white/70">
          <Briefcase className="h-4 w-4" />
          Experience
        </div>

        {/* Inner panel */}
        <div className="relative rounded-2xl border-[#232323] border bg-[#191919] p-5">
          {/* Timeline rail */}
          {/* <div className="absolute left-9 top-6 bottom-6 w-px bg-white/15 md:left-10" aria-hidden /> */}

          <ul className="flex flex-col gap-5">
            {experience.map((item, i) => (
              <li key={`${item.company}-${i}`} className="relative flex items-start ">
                {/* Dot */}
                {/* <span className="absolute left-7 md:left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-white/30 bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                </span> */}

                {/* Content */}
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="block group flex flex-col items-start"
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
