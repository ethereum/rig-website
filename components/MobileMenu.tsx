import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "./ui/button"

import { Menu } from "lucide-react"
import { BracketLink } from "./ui/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { NAV_ITEMS } from "@/lib/constants"

export const MobileMenu = ({
  className,
  ...props
}: DropdownMenuProps & { className?: string }) => (
  <DropdownMenu {...props}>
    <DropdownMenuTrigger asChild className={className}>
      <Button
        variant="empty"
        size="icon"
        className="data-[state=open]:text-primary relative data-[state=open]:[&>div]:rotate-90"
      >
        <div
          className="border-primary absolute inset-1.5 border-2 transition-transform"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 5px, 0 5px, 0 calc(100% - 5px), 100% calc(100% - 5px), 100% 100%, 0 100%)",
          }}
        />
        <Menu strokeLinecap="square" className="focus-within:text-primary" />
        <span className="sr-only">Mobile navigation menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="rounded-none border-2">
      {NAV_ITEMS.map(({ href, title }) => (
        <DropdownMenuItem key={href} className="justify-end lowercase">
          <BracketLink href={href}>{title}</BracketLink>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)
