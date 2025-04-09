"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { PATH_PAPERS } from "@/lib/constants"

export default function Error() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${PATH_PAPERS}s`)
  }, [router])

  return null
}
