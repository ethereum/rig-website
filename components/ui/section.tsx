import * as React from "react"

import { cn } from "@/lib/utils"

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("w-full space-y-8 py-12 sm:py-20", className)}
    {...props}
  />
))
Section.displayName = "Section"

const SectionHead = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn("space-x-2", className)} {...props} />
))
SectionHead.displayName = "SectionHead"

const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-primary inline font-sans text-4xl lowercase",
      className
    )}
    {...props}
  />
))
SectionHeading.displayName = "SectionHeading"

const SectionCounter = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span ref={ref} className={cn("font-sans", className)} {...props}>
    &#91;{children}&#93;
  </span>
))
SectionCounter.displayName = "SectionCounter"

export { Section, SectionHead, SectionHeading, SectionCounter }
