import * as React from "react"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

const ThemeIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>((props, ref) => {
  const iconClassName = "size-4 text-foreground"
  const { resolvedTheme } = useTheme()
  let icon = <Moon ref={ref} className={iconClassName} {...props} />
  if (resolvedTheme === "light") {
    icon = <Sun ref={ref} className={iconClassName} {...props} />
  }
  return (
    <div className="relative grid size-8 place-items-center">
      <div className="absolute inset-0 grid place-items-center">{icon}</div>

      <span className="text-primary absolute inset-0 grid rotate-90 place-items-center whitespace-nowrap">
        [&nbsp;&nbsp;&nbsp;&nbsp;]
      </span>
    </div>
  )
})
ThemeIcon.displayName = "ThemeIcon"

export default ThemeIcon
