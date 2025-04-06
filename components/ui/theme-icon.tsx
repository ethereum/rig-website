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
    <div className="grid size-8 place-items-center text-xl">
      {/* <span className="text-primary select-none">&#9140;</span> */}
      <div className="">{icon}</div>
      {/* <span className="text-primary select-none">&#9141;</span> */}
    </div>
  )
})
ThemeIcon.displayName = "ThemeIcon"

export default ThemeIcon
