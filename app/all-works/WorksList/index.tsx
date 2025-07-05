"use client"

import { useEffect, useState } from "react"
import { join } from "path"

import PostPreviewRow from "@/components/PostPreviewRow"
import PaperPreviewRow from "@/components/PaperPreviewRow"
import TalkPreviewRow from "@/components/TalkPreviewRow"

import { getContributorsFromIDs } from "@/lib/contributors"

import { PATH_POSTS, PATH_PAPERS, PATH_TALKS } from "@/lib/constants"

import type {
  PostSummary,
  PaperSummary,
  TalkSummary,
  TalkFrontMatter,
  PaperFrontMatter,
  PostFrontMatter,
} from "@/lib/types"

import Loading from "./loading"
import { cn } from "@/lib/utils"

type WorkItem = {
  slug: string
  date: Date
} & (
  | {
      type: "post"
      frontmatter: PostFrontMatter
    }
  | {
      type: "paper"
      frontmatter: PaperFrontMatter
    }
  | {
      type: "talk"
      frontmatter: TalkFrontMatter
    }
)

type WorksListProps = {
  authorFilter: string
  posts: PostSummary[]
  papers: PaperSummary[]
  talks: TalkSummary[]
}

export default function WorksList({
  authorFilter,
  posts,
  papers,
  talks,
}: WorksListProps) {
  const [works, setWorks] = useState<WorkItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const processWorks = () => {
      setLoading(true)

      try {
        // Filter by author and create unified work items
        const allWorks: WorkItem[] = []

        // Process posts
        posts.forEach((post) => {
          const normalizedAuthors = getContributorsFromIDs(
            post.frontmatter.authors
          )
          if (
            normalizedAuthors.some(
              (contributor) => contributor.name === authorFilter
            )
          ) {
            allWorks.push({
              type: "post",
              slug: post.slug,
              frontmatter: post.frontmatter,
              date: new Date(post.frontmatter.datePublished),
            })
          }
        })

        // Process papers
        papers.forEach((paper) => {
          const normalizedAuthors = getContributorsFromIDs(
            paper.frontmatter.authors
          )
          if (
            normalizedAuthors.some(
              (contributor) => contributor.name === authorFilter
            )
          ) {
            allWorks.push({
              type: "paper",
              slug: paper.slug,
              frontmatter: paper.frontmatter,
              date: new Date(paper.frontmatter.datePublished),
            })
          }
        })

        // Process talks
        talks.forEach((talk) => {
          const normalizedAuthors = getContributorsFromIDs(
            talk.frontmatter.authors
          )
          if (
            normalizedAuthors.some(
              (contributor) => contributor.name === authorFilter
            )
          ) {
            allWorks.push({
              type: "talk",
              slug: talk.slug,
              frontmatter: talk.frontmatter,
              date: new Date(talk.frontmatter.startDate),
            })
          }
        })

        // Sort by date (newest first)
        allWorks.sort((a, b) => b.date.getTime() - a.date.getTime())

        setWorks(allWorks)
      } catch (error) {
        console.error("Error processing works:", error)
      } finally {
        setLoading(false)
      }
    }

    processWorks()
  }, [authorFilter, posts, papers, talks])

  if (loading) return <Loading />

  if (works.length === 0) {
    return (
      <div className="text-secondary-foreground py-8 text-center">
        No works found for {authorFilter}.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-secondary-foreground mb-4 text-sm">
        Found {works.length} work{works.length !== 1 ? "s" : ""} by{" "}
        {authorFilter}
      </div>

      <div className="grid w-full grid-cols-1 gap-x-8 md:grid-cols-[1fr_auto]">
        {works.map((work) => {
          const key = `${work.type}-${work.slug}`

          switch (work.type) {
            case "post":
              return (
                <PostPreviewRow
                  key={key}
                  frontmatter={work.frontmatter}
                  href={join(PATH_POSTS, work.slug)}
                  className="border-b px-5 max-sm:-mx-5"
                />
              )
            case "paper":
              return (
                <PaperPreviewRow
                  key={key}
                  frontmatter={work.frontmatter}
                  href={join(PATH_PAPERS, work.slug)}
                  className={cn(
                    "w-full border-b px-5 max-sm:-mx-5",
                    "md:col-span-2 md:grid md:grid-cols-subgrid",
                    "md:[&>div]:col-span-2 md:[&>div]:grid md:[&>div]:grid-cols-subgrid",
                    "max-md:[&_[data-label='tags']]:flex-row max-md:[&_[data-label='tags']]:flex-wrap max-md:[&_[data-label='tags']]:!items-start max-md:[&_[data-label='tags']]:gap-4 [&>div]:flex-col sm:[&>div]:items-start"
                  )}
                />
              )
            case "talk":
              return (
                <TalkPreviewRow
                  key={key}
                  frontmatter={work.frontmatter}
                  href={join(PATH_TALKS, work.slug)}
                  className="border-b px-5 max-sm:-mx-5"
                />
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
