import type {
  PaperSummary,
  PostSummary,
  ResearchFieldLookup,
  Tag,
} from "./types"

import { researchFields } from "@/data/research-fields"

import { TAGS } from "@/lib/constants"

export const fetchResearchFields = (
  posts: PostSummary[],
  papers: PaperSummary[]
): ResearchFieldLookup =>
  researchFields.reduce((acc, field) => {
    const postCount = posts.filter((post) =>
      post.frontmatter.tags.includes(TAGS[field.key])
    ).length

    const paperCount = papers.filter((paper) =>
      paper.frontmatter.tags.includes(TAGS[field.key])
    ).length

    acc[field.key] = {
      title: TAGS[field.key],
      description: field.description,
      postsCount: postCount,
      papersCount: paperCount,
    }
    return acc
  }, {} as ResearchFieldLookup)

export const fetchFieldList = (): Tag[] =>
  researchFields.map((field) => field.key)
