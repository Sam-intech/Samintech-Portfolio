import { Section } from "./section"
import { Button } from "./ui/button"
import { useState } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    // Replace with your form handler (Resend/Formspree/etc.)
    setTimeout(() => setStatus("sent"), 800)
  }

  return (
    <Section id="contact">
      <div className="container py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-muted-foreground">
            Reach out for roles, collaborations, or to chat about AI UX.
          </p>
        </div>

        <form onSubmit={onSubmit} className="max-w-xl grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm">Name</span>
            <input
              className="h-10 rounded-xl border bg-background px-3"
              name="name" placeholder="Your name" required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm">Email</span>
            <input
              className="h-10 rounded-xl border bg-background px-3"
              type="email" name="email" placeholder="you@example.com" required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm">Message</span>
            <textarea
              className="min-h-[120px] rounded-xl border bg-background p-3"
              name="message" placeholder="Tell me a bit about your project or role…" required
            />
          </label>

          <div className="flex gap-3">
            <Button type="submit" disabled={status !== "idle"}>
              {status === "idle" ? "Send message" : status === "sending" ? "Sending…" : "Sent ✓"}
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:sonowosamuel@icloud.com">Email directly</a>
            </Button>
          </div>
        </form>
      </div>
    </Section>
  )
}
