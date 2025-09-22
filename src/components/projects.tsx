// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
// import { Badge } from "./ui/badge"
// import { projects } from "../data/projects"
// import { Section } from "./section"


// export function Projects() {
//     return (
//         <Section id="projects">
//             <div className="container py-16">
//                 <div className="mb-8">
//                     <h2 className="text-2xl font-semibold">Featured Projects</h2>
//                     <p className="text-sm text-muted-foreground">
//                     Selected work spanning multi-agent AI systems, UX engineering, and production-ready frontends.
//                     </p>
//                 </div>


//                 <div className="grid gap-6 md:grid-cols-2">
//                     {projects.map((p) => (
//                         <Card key={p.slug} className="flex flex-col justify-between">
//                             <CardHeader>
//                                 <CardTitle>{p.title}</CardTitle>
//                                 <CardDescription>{p.blurb}</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {p.tags.map((t) => (
//                                         <Badge key={t}>{t}</Badge>
//                                     ))}
//                                 </div>
//                                 {p.link && (
//                                     <a
//                                         href={p.link}
//                                         className="text-sm text-primary hover:underline"
//                                     >
//                                         View case study →
//                                     </a>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </Section>
//     )
// }

import { Section } from "./section"
import { projects } from "../data/projects"
import { Badge } from "./ui/badge"

export function Projects() {
  return (
    <Section id="projects">
      <div className="container py-20 space-y-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-lg">
            Selected work spanning multi-agent AI systems, data-driven UX, and
            production-ready frontends.
          </p>
        </div>

        <div className="flex items-center gap-12">
          {projects.map((p) => (
            <div key={p.slug} className="grid gap-6 md:grid-cols-2 md:items-center">
              {/* image/thumbnail */}
              <div className="relative aspect-video rounded-2xl border bg-gradient-to-br from-muted to-background" />
              
              {/* copy */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-muted-foreground">{p.blurb}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground">
                  Stack: {p.stack.join(" · ")}
                </div>

                {p.links && (
                  <div className="flex flex-wrap gap-4 pt-2 text-sm">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noreferrer" : undefined} 
                      className="underline underline-offset-4 hover:no-underline">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
