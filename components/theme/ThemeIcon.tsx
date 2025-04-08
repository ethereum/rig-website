import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

const ThemeIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => {
  const iconClassName = "size-4 text-foreground"
  const { resolvedTheme } = useTheme()
  let icon = (
    <Moon ref={ref} className={cn(iconClassName, className)} {...props} />
  )
  if (resolvedTheme === "light") {
    icon = <Sun ref={ref} className={cn(iconClassName, className)} {...props} />
  }
  return (
    <>
      <div className="text-primary absolute inset-0 -top-2 grid size-8 place-items-center select-none">
        &#9140;
      </div>
      <div className="absolute inset-0 grid size-8 place-items-center">
        {icon}
      </div>
      <div className="text-primary absolute inset-0 grid size-8 place-items-center select-none">
        &#9141;
      </div>
    </>
  )
})
ThemeIcon.displayName = "ThemeIcon"

export default ThemeIcon
