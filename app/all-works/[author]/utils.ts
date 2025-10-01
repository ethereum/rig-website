import { getContributorsFromIDs } from "@/lib/contributors"
import type { WorkItem, WorksListProps } from "./types"

export const processWorks = ({
  authorFilter,
  posts,
  papers,
  talks,
}: WorksListProps) => {
  // Filter by author and create unified work items
  const allWorks: WorkItem[] = []

  // Process posts
  posts.forEach((post) => {
    const normalizedAuthors = getContributorsFromIDs(post.frontmatter.authors)
    if (
      normalizedAuthors.some((contributor) => contributor.name === authorFilter)
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
    const normalizedAuthors = getContributorsFromIDs(paper.frontmatter.authors)
    if (
      normalizedAuthors.some((contributor) => contributor.name === authorFilter)
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
    const normalizedAuthors = getContributorsFromIDs(talk.frontmatter.authors)
    if (
      normalizedAuthors.some((contributor) => contributor.name === authorFilter)
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
  return allWorks.sort((a, b) => b.date.getTime() - a.date.getTime())
}
