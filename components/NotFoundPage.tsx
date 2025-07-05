import Link from "@/components/ui/link"
import { ArrowLeft } from "lucide-react"

const NotFoundPage = () => (
  <main className="space-y-8">
    <h1 className="text-4xl font-bold tracking-[0.01em] md:text-5xl">
      Page not found
    </h1>
    <Link
      href="/"
      className="inline-flex items-center font-sans hover:underline"
    >
      <ArrowLeft className="me-2 inline-block size-5" />
      Go back home
    </Link>
  </main>
)

export default NotFoundPage