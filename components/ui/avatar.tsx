"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  const getColorClassFromChildren = (children: React.ReactNode): string => {
    if (typeof children === "string" && children.length > 0) {
      const charCodeSum = children
        .split("")
        .reduce((sum, char) => sum + char.charCodeAt(0), 0)
      const colorClasses = [
        "bg-red-100 dark:bg-red-900",
        "bg-blue-100 dark:bg-blue-900",
        "bg-green-100 dark:bg-green-900",
        "bg-yellow-100 dark:bg-yellow-900",
        "bg-orange-100 dark:bg-orange-900",
        "bg-purple-100 dark:bg-purple-900",
        "bg-pink-100 dark:bg-pink-900",
        "bg-teal-100 dark:bg-teal-900",
        "bg-indigo-100 dark:bg-indigo-900",
        "bg-lime-100 dark:bg-lime-900",
      ]
      return colorClasses[charCodeSum % colorClasses.length]
    }
    return "bg-gray-200 dark:bg-gray-800" // Default color class
  }

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full",
        getColorClassFromChildren(props.children),
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
