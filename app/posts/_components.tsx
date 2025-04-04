"use client"

// TODO: Add pagination

import { useState } from "react"
import PostPreviewRow from "@/components/PostPreviewRow"
import { PostSummary } from "@/lib/types"

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
  const [yearFilter, setYearFilter] = useState<string>("")
  const [authorFilter, setAuthorFilter] = useState<string>("")
  const [tagFilter, setTagFilter] = useState<string>("")

  const { years, authors, tags } = options

  // Check if any filter is active
  const filtered = yearFilter !== "" || authorFilter !== "" || tagFilter !== ""

  // Reset all filters function
  const resetAllFilters = () => {
    setYearFilter("")
    setAuthorFilter("")
    setTagFilter("")
  }

  // Filter posts based on selected filters
  const filteredPosts = allPosts.filter(({ frontmatter }) => {
    const matchesYear =
      yearFilter === "" ||
      new Date(frontmatter.datePublished).getFullYear().toString() ===
        yearFilter
    const matchesAuthor =
      authorFilter === "" || frontmatter.authors.includes(authorFilter)
    const matchesTag = tagFilter === "" || frontmatter.tags.includes(tagFilter)
    return matchesYear && matchesAuthor && matchesTag
  })

  return (
    <>
      <div className="mt-16 flex items-center space-x-4 font-sans text-sm">
        <span>Filter by:</span>
        <select
          id="filter-date"
          className="rounded border px-2 py-1"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
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
          onChange={(e) => setAuthorFilter(e.target.value)}
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
          onChange={(e) => setTagFilter(e.target.value)}
        >
          <option value="">Field</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {filtered && (
          <button
            onClick={resetAllFilters}
            className="text-primary hover:underline"
          >
            Reset
          </button>
        )}
      </div>
      <div>
        {filteredPosts.map(({ frontmatter, href: path }) => (
          <PostPreviewRow
            key={path}
            frontmatter={frontmatter}
            href={path}
            className="border-b"
          />
        ))}
        {filteredPosts.length === 0 && (
          <div className="text-secondary-foreground mt-4 text-center">
            No posts found for the selected filters.
          </div>
        )}
      </div>
    </>
  )
}
