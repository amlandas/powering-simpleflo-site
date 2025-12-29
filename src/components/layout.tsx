import * as React from "react"

import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("container-tight", className)} {...props} />
}

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div"
}

export function Section({
  as: Comp = "section",
  className,
  ...props
}: SectionProps) {
  return <Comp className={cn("section-pad", className)} {...props} />
}

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg"
}

const stackSizes: Record<NonNullable<StackProps["size"]>, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-10",
}

export function Stack({ className, size = "md", ...props }: StackProps) {
  return <div className={cn("flex flex-col", stackSizes[size], className)} {...props} />
}
