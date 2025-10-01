"use client"

import { usePathname } from "next/navigation"
import { SquareArrowLeft } from "lucide-react"

import Link from "@/components/ui/link"

const ParentPathLink = () => {
  const pathname = usePathname()

  if (pathname.startsWith("/all-works/")) return null

  const parentPath = pathname.split("/").slice(0, -1).join("/") || "/"

  return (
    <Link
      href={parentPath}
      className="flex items-center font-sans hover:underline"
    >
      <SquareArrowLeft className="me-2 inline-block size-5" />
      Go up to {parentPath}
    </Link>
  )
}

export default ParentPathLink
