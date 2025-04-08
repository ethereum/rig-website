"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import ThemeIcon from "./ThemeIcon"

import useThemingKeyboardShortcuts from "@/hooks/useThemingKeyboardShortcuts"

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  useThemingKeyboardShortcuts(toggleColorMode)

  if (!mounted) return null

  const items = [
    {
      id: "light",
      label: "Light",
      icon: Sun,
    },
    {
      id: "dark",
      label: "Dark",
      icon: Moon,
    },
    {
      id: "system",
      label: "System",
      icon: Monitor,
    },
  ]
  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger className="group border-primary text-primary [&[data-state=open]]:bg-background-highlight box-content flex h-3.5 w-fit items-center gap-2 px-2 py-1.5"> */}
      <DropdownMenuTrigger asChild>
        <ThemeIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent side="left">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => setTheme(item.id)}
            className={cn(theme === item.id && "bg-background-active")}
          >
            <div className="flex items-center gap-2 p-2.5">
              <item.icon />
              {item.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle
