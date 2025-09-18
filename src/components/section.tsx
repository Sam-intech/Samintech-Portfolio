import { cn } from "../lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & { id?: string }

export function Section({ className, ...props }: Props) {
  return <section className={cn("border-b", className)} {...props} />
}
