"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { PATH_POSTS } from "@/lib/constants"

export default function Error() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${PATH_POSTS}s`)
  }, [router])

  return null
}
