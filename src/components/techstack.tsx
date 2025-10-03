import { Section } from "./section"
import { Stack, type TechStack } from "../data/stack"
import { Bookmark } from "lucide-react"

function rowsOf<T>(arr: T[], perRow: number) {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += perRow) out.push(arr.slice(i, i + perRow))
  return out
}

function AppCell({ item }: { item: TechStack }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border bg-[#191919]">
        <img src={item.logo} alt="" className="h-6 w-6 object-contain" loading="lazy" />
      </div>
      <div>
        <div className="text-[15px] leading-tight">{item.name}</div>
        {item.subtitle && <div className="text-xs text-white/60">{item.subtitle}</div>}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <Section id="stack" className="container py-14 md:py-20">
      {/* Section header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <span className="text-sm text-muted-foreground">Core tools I use daily</span>
      </div>

      {/* One card per group (stacked vertically) */}
      <div className="flex justify-center items-start flex-no-wrap gap-3">
        {Stack.map((group) => {
          // two columns like your reference (collapses to 1 on small screens)
          const pairs = rowsOf(group.items, 2)
          return (
            <div
              key={group.title}
              className="rounded-2xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-3 min-h-[450px] flex flex-col justify-between gap-full"
            >
              {/* bookmark label row INSIDE the frame */}
              <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
                <Bookmark className="h-4 w-4" />
                {group.title}
              </div>

              {/* inner panel */}
              <div className="rounded-2xl border border-[#232323] bg-[#191919] overflow-hidden">
                {pairs.map((pair, rIdx) => {
                  const isLastRow = rIdx === pairs.length - 1
                  return (
                    <div key={rIdx} className={["grid grid-cols-1 md:grid-cols-2",!isLastRow ? "border-b border-white/10" : "",].join(" ")}>
                      {pair.map((item, cIdx) => {
                        const isRightCol = cIdx === 1
                        return (
                          <div key={item.name} className={["p-4 md:p-5", isRightCol ? "md:border-l md:border-white/10" : "",].join(" ")}>
                            <AppCell item={item} />
                          </div>
                        )
                      })}
                      {/* keep grid balanced if odd count */}
                      {pair.length === 1 && <div className="hidden md:block" />}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
