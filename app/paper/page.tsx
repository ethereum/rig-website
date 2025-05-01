import { redirect } from "next/navigation"

import { PATH_PAPERS } from "@/lib/constants"

export default function RedirectPage() {
  redirect(`/${PATH_PAPERS}s`)
}
