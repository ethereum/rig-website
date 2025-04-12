"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useThemingKeyboardShortcuts from "@/hooks/useThemingKeyboardShortcuts"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  useThemingKeyboardShortcuts(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="empty" size="icon" className="relative">
          <div
            className="border-primary absolute inset-1.5 border-2"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 5px, 0 5px, 0 calc(100% - 5px), 100% calc(100% - 5px), 100% 100%, 0 100%)",
            }}
          />
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-none border-2">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
