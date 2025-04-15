import { cn } from "@/lib/utils"

type HeroHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  prefix?: string
}

const HeroHeading = ({
  children,
  className,
  prefix,
  ...props
}: HeroHeadingProps) => {
  return (
    <h1 className={cn("-space-y-12 py-20", className)} {...props}>
      {prefix && (
        <span className="block text-4xl leading-snug sm:text-5xl">
          {prefix}
        </span>
      )}
      <span className="sm:text-10xl text-accent-foreground text-9xl leading-snug">
        {children}
      </span>
    </h1>
  )
}

export default HeroHeading
