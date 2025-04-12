"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const ClientSideLinkDecorator = ({ href }: { href: string }) => {
  const isActive = usePathname() === href
  return (
    <div
      className={cn(
        "absolute inset-x-4 bottom-0.5 h-px",
        isActive && "bg-primary"
      )}
    />
  )
}
