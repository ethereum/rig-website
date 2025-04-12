import { cn } from "@/lib/utils"

type HeroHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  prefix?: string
}

const HeroHeading = ({
  children,
  className,
  prefix = "All",
  ...props
}: HeroHeadingProps) => {
  return (
    <h1 className={cn("-space-y-12 py-20", className)} {...props}>
      <span className="block text-4xl sm:text-5xl leading-snug">{prefix}</span>{" "}
      <span className="text-9xl sm:text-10xl text-accent-foreground leading-snug">
        {children}
      </span>
    </h1>
  )
}

export default HeroHeading
