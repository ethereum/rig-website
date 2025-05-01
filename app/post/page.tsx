import { redirect } from "next/navigation"

import { PATH_POSTS } from "@/lib/constants"

export default function RedirectPage() {
  redirect(`/${PATH_POSTS}s`)
}
