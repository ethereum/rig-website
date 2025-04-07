"use client"

// TODO: Add pagination

import { join } from "path"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import PostPreviewRow from "@/components/PostPreviewRow"

import type { PaperSummary } from "@/lib/types"
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
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get filter values from URL query parameters
  const yearFilter = searchParams.get("year") || ""
  const authorFilter = searchParams.get("author") || ""
  const tagFilter = searchParams.get("tag") || ""

  const { years, authors, tags } = options

  // Check if any filter is active
  const filtered = yearFilter !== "" || authorFilter !== "" || tagFilter !== ""

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
      <div className="flex items-center space-x-4 p-8 font-sans text-sm">
        <span>Filter by:</span>
        <select
          id="filter-date"
          className="rounded border px-2 py-1"
          value={yearFilter}
          onChange={(e) => updateFilters("year", e.target.value)}
        >
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="filter-author"
          className="rounded border px-2 py-1"
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
          id="filter-tag"
          className="rounded border px-2 py-1"
          value={tagFilter}
          onChange={(e) => updateFilters("tag", e.target.value)}
        >
          <option value="">Field</option>
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
        {filtered && (
          <Link href="?" className="text-primary hover:underline">
            Reset
          </Link>
        )}
      </div>
      <div>
        {filteredPapers.map(({ frontmatter, slug }) => (
          // TODO: Update to use PaperPreviewRow when ready
          <PostPreviewRow
            key={slug}
            frontmatter={frontmatter}
            href={join(PATH_PAPERS, slug)}
            className="border-b px-5"
          />
        ))}
        {filteredPapers.length === 0 && (
          <div className="text-secondary-foreground mt-4 text-center">
            No papers found for the selected filters.
          </div>
        )}
      </div>
    </>
  )
}
