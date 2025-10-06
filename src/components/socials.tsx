import { socials } from "../data/socials"
import { Section } from "../components/section"
import { Mail, Instagram, Linkedin, ExternalLink, CircleSlash2 } from "lucide-react"

function SocialIcon({ kind }: { kind: "x" | "instagram" | "linkedin" | "mail" }) {
  if (kind === "instagram") return <Instagram className="h-4 w-4" />
  if (kind === "linkedin")  return <Linkedin className="h-4 w-4" />
  if (kind === "mail")      return <Mail className="h-4 w-4" />
  // X icon (closest in lucide is CircleSlash2; you can drop an SVG instead)
  return <CircleSlash2 className="h-4 w-4" />
}

export function Socials() {
  return (
    <Section id="socials" className="p-0">
      <div className="min-h-[450px] flex flex-col justify-between rounded-2xl border border-[#232323] bg-[#1b1b1b] ring-1 ring-white/5 p-2">
        {/* Label row with gradient dot */}
        <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
          <span className="h-2.5 w-2.5 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400 to-pink-500" />
          Social
        </div>

        {/* Inner panel */}
        <div className="rounded-2xl border border-[#232323] bg-[#191919] overflow-hidden">
          {socials.map((s, i) => {
            const isLast = i === socials.length - 1
            return (
              <a key={s.name} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className={[
                  "flex items-center gap-3 px-4 md:px-5 py-4",
                  !isLast ? "border-b border-white/10" : "",
                  "hover:bg-white/[.03] transition"
                ].join(" ")}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#232323] bg-[#1b1b1b] text-white/80">
                  <SocialIcon kind={s.icon} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col items-start">
                  <div className="text-[15px]">{s.name}</div>
                  <div className="truncate text-sm text-white/65">{s.handle}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-white/40" />
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
