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
    <div className="text grid size-7 rotate-90 grid-cols-3 place-items-center font-sans">
      <p className="text-primary mb-[3px]">[</p>
      {icon}
      <p className="text-primary mb-[3px]">]</p>
    </div>
  )
})
ThemeIcon.displayName = "ThemeIcon"

export default ThemeIcon
