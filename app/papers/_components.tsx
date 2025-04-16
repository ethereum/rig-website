"use client"

import { join } from "path"

import type { PaperSummary } from "@/lib/types"

import PaperPreviewRow from "@/components/PaperPreviewRow"
import { Button } from "@/components/ui/button"

import { useFilters } from "@/hooks/useFilters"

import { cn } from "@/lib/utils"

import { PATH_PAPERS, TAGS } from "@/lib/constants"

type FilterOptions = {
  years: number[]
  authors: string[]
  tags: string[]
}

type PapersPageProps = {
  allPapers: PaperSummary[]
  options: FilterOptions
}

export function PapersPage({ allPapers, options }: PapersPageProps) {
  const { resetFilters, searchParams, updateFilters } = useFilters()

  // Get filter values from URL query parameters
  const yearFilter = searchParams.get("year") || ""
  const authorFilter = searchParams.get("author") || ""
  const tagFilter = searchParams.get("tag") || ""

  const { years, authors, tags } = options

  // Check if any filter is active
  const filtered = yearFilter !== "" || authorFilter !== "" || tagFilter !== ""

  // Filter papers based on selected filters
  const filteredPapers = allPapers.filter(({ frontmatter }) => {
    const matchesYear =
      yearFilter === "" ||
      new Date(frontmatter.datePublished).getFullYear().toString() ===
        yearFilter
    const matchesAuthor =
      authorFilter === "" || frontmatter.authors.includes(authorFilter)

    const matchesTag =
      tagFilter === "" ||
      frontmatter.tags.some((tag) => {
        // Find the key in TAGS object that corresponds to this tag
        const tagKey = Object.entries(TAGS).find(
          ([, value]) => value === tag
        )?.[0]
        return tagKey === tagFilter
      })

    return matchesYear && matchesAuthor && matchesTag
  })

  return (
    <>
      <div
        className={cn(
          "text-foreground-light border-primary grid gap-4 border-b p-4 font-sans text-sm max-sm:px-0 lg:gap-x-10 lg:p-8",
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
          className={cn("border-b px-2 py-1", authorFilter && "bg-border")}
          value={authorFilter}
          onChange={(e) => updateFilters("author", e.target.value)}
        >
          <option value="">author</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <select
          id="filter-tag"
          className={cn("border-b px-2 py-1", tagFilter && "bg-border")}
          value={tagFilter}
          onChange={(e) => updateFilters("tag", e.target.value)}
        >
          <option value="">field</option>
          {tags.map((tag) => {
            // Find the key in TAGS object that corresponds to this tag
            const tagKey =
              Object.entries(TAGS).find(([, value]) => value === tag)?.[0] || ""
            return (
              <option key={tagKey} value={tagKey}>
                {tag}
              </option>
            )
          })}
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
        {filteredPapers.length > 0 ? (
          <>
            {filteredPapers.map(({ frontmatter, slug }) => (
              <PaperPreviewRow
                key={slug}
                frontmatter={frontmatter}
                href={join(PATH_PAPERS, slug)}
                className="border-b px-5 max-sm:-mx-5"
              />
            ))}
          </>
        ) : (
          <div className="text-secondary-foreground mt-4 text-center">
            No papers found for the selected filters.
          </div>
        )}
      </div>
    </>
  )
}
