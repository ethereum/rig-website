import { cn } from "@/lib/utils"

const HeroHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "text-accent-foreground mb-20 -space-y-12 text-8xl leading-snug sm:text-9xl",
      className
    )}
    {...props}
  >
    {children}
  </h1>
)

export default HeroHeading
