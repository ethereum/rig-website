import { TAGS } from "./constants"

type BaseFrontMatter = {
  title: string
  authors: string[]
  tags: string[]
}

export type PostFrontMatter = BaseFrontMatter & {
  datePublished: string
}

export type PaperFrontMatter = PostFrontMatter & {
  publicationVenue: string
}

export type TalkFrontMatter = BaseFrontMatter & {
  location: string
  startDate: string
  endDate?: string
}

export type PostSummary = {
  frontmatter: PostFrontMatter
  slug: string
}

export type PaperSummary = {
  frontmatter: PaperFrontMatter
  slug: string
}

export type Author = {
  id: string
  name?: string
  avatar?: string
  email?: string
}

export type Tag = keyof typeof TAGS
