"use client"

import { forwardRef } from "react"

import { BaseLink, type LinkProps } from "./link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const BracketLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...props }: LinkProps, ref) => {
    const isActive = usePathname() === props.href
    return (
      <BaseLink
        data-active={isActive}
        className={cn(
          "hover:text-primary text-foreground block w-fit font-sans tracking-[0.02em] lowercase",
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "text-primary font-medium select-none",
            isActive && "invisible"
          )}
        >
          &#91;&nbsp;
        </span>
        <span className={cn(isActive && "text-primary")}>{children}</span>
        <span
          className={cn(
            "text-primary font-medium select-none",
            isActive && "invisible"
          )}
        >
          &nbsp;&#93;
        </span>
      </BaseLink>
    )
  }
)
BracketLink.displayName = "BracketLink"

export { BracketLink }
