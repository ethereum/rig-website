import { useRouter, useSearchParams } from "next/navigation"

export const useFilters = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Update URL with filters
  const updateFilters = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === "") {
      params.delete(param)
    } else {
      params.set(param, value)
    }

    router.push(`?${params.toString()}`)
  }

  // Reset all filters
  const resetFilters = () => {
    router.push("?")
  }

  return {
    resetFilters,
    searchParams,
    updateFilters,
  }
}
