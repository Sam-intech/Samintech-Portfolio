import { cn } from "../lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement> & { 
  id?: string
  showDivider?: boolean  
}

export function Section({ className, showDivider = false, ...props }: Props) {
  // return <section className={cn("border-b", className)} {...props} />
  return (
    <section
      className={cn(showDivider ? "border-b" : "", className)}
      {...props}
    />
  )
}
