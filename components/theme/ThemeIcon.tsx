import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "../ui/button"

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
    <Button className="relative size-8 text-3xl font-medium">
      <span className="text-primary absolute inset-0 -top-2 grid size-8 place-items-center select-none">
        &#9140;
      </span>
      <div className="absolute inset-0 grid size-8 place-items-center">
        {icon}
      </div>
      <span className="text-primary absolute inset-0 grid size-8 place-items-center select-none">
        &#9141;
      </span>
    </Button>
  )
})
ThemeIcon.displayName = "ThemeIcon"

export default ThemeIcon
