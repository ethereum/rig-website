"use client"

// TODO: Add pagination

import { join } from "path"
import { useRouter, useSearchParams } from "next/navigation"

import PostPreviewRow from "@/components/PostPreviewRow"

import type { PostSummary } from "@/lib/types"
import { POSTS_PATH, TAGS } from "@/lib/constants"
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
        {filteredPosts.map(({ frontmatter, slug }) => (
          <PostPreviewRow
            key={slug}
            frontmatter={frontmatter}
            href={join(POSTS_PATH, slug)}
            className="border-b px-5"
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
