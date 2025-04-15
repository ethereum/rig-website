import { Button } from "./ui/button"
import { BracketLink } from "./ui/bracket-link"

import { Menu } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  type DrawerProps,
  DrawerTrigger,
} from "./ui/drawer"
import { NAV_ITEMS } from "@/lib/constants"

export const MobileMenu = ({
  className,
  ...props
}: DrawerProps & { className?: string }) => (
  <Drawer direction="right" {...props}>
    <DrawerTrigger asChild className={className}>
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
    </DrawerTrigger>
    <DrawerContent className="flex flex-col items-center gap-12 p-32">
      {NAV_ITEMS.map(({ href, title }) => (
        <DrawerClose key={href} asChild>
          <BracketLink href={href}>{title}</BracketLink>
        </DrawerClose>
      ))}
    </DrawerContent>
  </Drawer>
)
