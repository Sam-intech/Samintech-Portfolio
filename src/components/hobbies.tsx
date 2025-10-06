import { Section } from "../components/section"
import { hobbies } from "../data/hobbies"

export function Hobbies() {
  return (
    <Section id="hobbies" className="p-0">
      <div className="min-h-[450px] flex flex-col justify-between rounded-2xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-2">
        <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
          <span className="h-2.5 w-2.5 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-cyan-500" />
          Hobbies
        </div>

        <div className="rounded-2xl border border-[#232323] bg-[#191919] overflow-hidden">
          {hobbies.map((h, i) => {
            const isLast = i === hobbies.length - 1
            return (
              <div key={h.name}
                className={[
                  "flex items-center gap-3 px-4 md:px-5 py-4",
                  !isLast ? "border-b border-white/10" : ""
                ].join(" ")}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#232323] bg-[#1b1b1b] text-lg">
                  <span aria-hidden>{h.icon}</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[15px]">{h.name}</div>
                  {h.sub && <div className="text-sm text-white/65">{h.sub}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
