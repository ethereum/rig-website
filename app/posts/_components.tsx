"use client"

import { useState } from "react"
import { join } from "path"
import { useRouter, useSearchParams } from "next/navigation"

import PostPreviewRow from "@/components/PostPreviewRow"
import { Paginate } from "@/components/Paginate"

import type { PostSummary } from "@/lib/types"
import { MAX_PER_PAGE, PATH_POSTS, TAGS } from "@/lib/constants"
import Link from "next/link"

type FilterOptions = {
  years: number[]
  authors: string[]
  tags: string[]
}

type PostsPageProps = {
  allPosts: PostSummary[]
  options: FilterOptions
}

export function PostsPage({ allPosts, options }: PostsPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get filter values from URL query parameters
  const yearFilter = searchParams.get("year") || ""
  const authorFilter = searchParams.get("author") || ""
  const tagFilter = searchParams.get("tag") || ""

  // Client-side pagination state
  const [currentPage, setCurrentPage] = useState(1)

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

    // Reset to page 1 when filters change
    setCurrentPage(1)
  }

  // Filter posts based on selected filters
  const filteredPosts = allPosts.filter(({ frontmatter }) => {
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

  // Calculate pagination values
  const totalPosts = filteredPosts.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / MAX_PER_PAGE))

  // Ensure current page is within valid range
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  // Get the posts for the current page
  const startIndex = (validCurrentPage - 1) * MAX_PER_PAGE
  const endIndex = startIndex + MAX_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="flex items-center gap-10 p-8 font-sans text-sm">
        <span>Filter by:</span>
        <select
          id="filter-date"
          className="border-b px-2 py-1"
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
          id="filter-tag"
          className="border-b px-2 py-1"
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
        {filteredPosts.length > 0 ? (
          <>
            {paginatedPosts.map(({ frontmatter, slug }) => (
              <PostPreviewRow
                key={slug}
                frontmatter={frontmatter}
                href={join(PATH_POSTS, slug)}
                className="border-b px-5"
              />
            ))}

            {totalPages > 1 && (
              <Paginate
                currentPage={validCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-secondary-foreground mt-4 text-center">
            No posts found for the selected filters.
          </div>
        )}
      </div>
    </>
  )
}
