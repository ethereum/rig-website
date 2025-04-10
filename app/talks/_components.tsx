"use client"

import { useState } from "react"
import { join } from "path"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import { PaginationNav } from "@/components/PaginationNav"
import TalkPreviewRow from "@/components/TalkPreviewRow"

import type { TalkSummary } from "@/lib/types"
import { MAX_PER_PAGE, PATH_TALKS } from "@/lib/constants"

type FilterOptions = {
  years: number[]
  authors: string[]
  locations: string[]
}

type TalksPageProps = {
  allTalks: TalkSummary[]
  options: FilterOptions
}

export function TalksPage({ allTalks, options }: TalksPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get filter values from URL query parameters
  const yearFilter = searchParams.get("year") || ""
  const authorFilter = searchParams.get("author") || ""
  const locationFilter = searchParams.get("location") || ""

  // Client-side pagination state
  const [currentPage, setCurrentPage] = useState(1)

  const { years, authors, locations } = options

  // Check if any filter is active
  const filtered =
    yearFilter !== "" || authorFilter !== "" || locationFilter !== ""

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

  // Filter talks based on selected filters
  const filteredTalks = allTalks.filter(({ frontmatter }) => {
    const matchesYear =
      yearFilter === "" ||
      new Date(frontmatter.startDate).getFullYear().toString() === yearFilter
    const matchesAuthor =
      authorFilter === "" || frontmatter.authors.includes(authorFilter)
    const matchesLocation =
      locationFilter === "" || frontmatter.location === locationFilter

    return matchesYear && matchesAuthor && matchesLocation
  })

  // Calculate pagination values
  const totalTalks = filteredTalks.length
  const totalPages = Math.max(1, Math.ceil(totalTalks / MAX_PER_PAGE))

  // Ensure current page is within valid range
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  // Get the talks for the current page
  const startIndex = (validCurrentPage - 1) * MAX_PER_PAGE
  const endIndex = startIndex + MAX_PER_PAGE
  const paginatedTalks = filteredTalks.slice(startIndex, endIndex)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-4 p-4 font-sans text-sm max-md:flex-col md:items-center md:p-8 [&>select]:w-full [&>select]:max-w-xs">
        <span className="text-nowrap">Filter by:</span>
        <select
          id="filter-date"
          className="max-w-24! border-b px-2 py-1"
          value={yearFilter}
          onChange={(e) => updateFilters("year", e.target.value)}
        >
          <option value="">Year</option>
          {years
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
        <select
          id="filter-author"
          className="border-b px-2 py-1"
          value={authorFilter}
          onChange={(e) => updateFilters("author", e.target.value)}
        >
          <option value="">Author</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <select
          id="filter-location"
          className="border-b px-2 py-1"
          value={locationFilter}
          onChange={(e) => updateFilters("location", e.target.value)}
        >
          <option value="">Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        {filtered && (
          <Link href="?" className="text-primary hover:underline">
            Reset
          </Link>
        )}
      </div>
      <div>
        {filteredTalks.length > 0 ? (
          <>
            <div className="grid w-full grid-cols-1 gap-x-8 md:grid-cols-[1fr_auto]">
              {paginatedTalks.map(({ frontmatter, slug }) => (
                <TalkPreviewRow
                  key={slug}
                  frontmatter={frontmatter}
                  href={join(PATH_TALKS, slug)}
                  className="border-b px-5"
                />
              ))}
            </div>

            {totalPages > 1 && (
              <PaginationNav
                currentPage={validCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-secondary-foreground mt-4 text-center">
            No talks found for the selected filters.
          </div>
        )}
      </div>
    </>
  )
}
