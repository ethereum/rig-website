"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { PATH_TALKS } from "@/lib/constants"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${PATH_TALKS}s`)
  }, [router])

  return null
}
