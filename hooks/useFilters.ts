import { useRouter, useSearchParams } from "next/navigation"

export const useFilters = (
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
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

    // Reset to page 1 when filters change
    setCurrentPage(1)
  }

  // Reset all filters
  const resetFilters = () => {
    router.push("?")
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return {
    handlePageChange,
    resetFilters,
    searchParams,
    updateFilters,
  }
}
