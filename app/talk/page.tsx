import { redirect } from "next/navigation"

import { PATH_TALKS } from "@/lib/constants"

export default function RedirectPage() {
  redirect(`/${PATH_TALKS}s`)
}
