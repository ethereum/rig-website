"use client"

import { useState } from "react"
import { join } from "path"

import type { TalkSummary } from "@/lib/types"

import { PaginationNav } from "@/components/PaginationNav"
import TalkPreviewRow from "@/components/TalkPreviewRow"
import { Button } from "@/components/ui/button"

import { useFilters } from "@/hooks/useFilters"

import { cn } from "@/lib/utils"

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
  // Client-side pagination state
  const [currentPage, setCurrentPage] = useState(1)

  const { handlePageChange, resetFilters, searchParams, updateFilters } =
    useFilters(setCurrentPage)

  // Get filter values from URL query parameters
  const yearFilter = searchParams.get("year") || ""
  const speakerFilter = searchParams.get("speaker") || ""
  const locationFilter = searchParams.get("location") || ""

  const { years, authors, locations } = options

  // Check if any filter is active
  const filtered =
    yearFilter !== "" || speakerFilter !== "" || locationFilter !== ""

  // Filter talks based on selected filters
  const filteredTalks = allTalks.filter(({ frontmatter }) => {
    const matchesYear =
      yearFilter === "" ||
      new Date(frontmatter.startDate).getFullYear().toString() === yearFilter
    const matchesAuthor =
      speakerFilter === "" || frontmatter.authors.includes(speakerFilter)
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

  return (
    <>
      <div
        className={cn(
          "text-foreground-light border-primary grid gap-4 border-b p-4 font-sans text-sm lg:gap-x-10 lg:p-8",
          "grid-cols-3 lg:grid-cols-[auto_repeat(3,_10rem)_auto_1fr]"
        )}
      >
        <span className="col-start-1 row-start-1 self-center text-nowrap max-lg:col-span-2">
          Filter by:
        </span>
        <select
          id="filter-date"
          className={cn("border-b px-2 py-1", yearFilter && "bg-border")}
          value={yearFilter}
          onChange={(e) => updateFilters("year", e.target.value)}
        >
          <option value="">date</option>
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
          className={cn("border-b px-2 py-1", speakerFilter && "bg-border")}
          value={speakerFilter}
          onChange={(e) => updateFilters("speaker", e.target.value)}
        >
          <option value="">author</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <select
          id="filter-location"
          className={cn("border-b px-2 py-1", locationFilter && "bg-border")}
          value={locationFilter}
          onChange={(e) => updateFilters("location", e.target.value)}
        >
          <option value="">location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <div className="col-start-3 row-start-1 self-end max-lg:text-end lg:col-start-5">
          <Button
            variant="ghost"
            className={cn(
              "group text-primary hover:text-primary invisible relative h-fit rounded-none p-0 lowercase hover:bg-transparent hover:underline hover:underline-offset-2",
              filtered && "visible"
            )}
            onClick={resetFilters}
          >
            <span className="-me-1 group-hover:invisible">&#91;</span>
            Reset
            <span className="-ms-1 group-hover:invisible">&#93;</span>
          </Button>
        </div>
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
