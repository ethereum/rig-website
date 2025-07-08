import { Home } from "lucide-react"

import ParentPathLink from "@/components/ParentPathLink"
import Link from "@/components/ui/link"

export default function NotFound() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold tracking-[0.01em] md:text-5xl">
        Page not found
      </h1>

      <ParentPathLink />

      <Link href="/" className="flex items-center font-sans hover:underline">
        <Home className="me-2 inline-block size-5" />
        Go back home
      </Link>
    </main>
  )
}
