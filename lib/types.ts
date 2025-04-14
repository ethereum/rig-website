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
  image: string
}

export type TalkFrontMatter = Omit<BaseFrontMatter, "tags"> & {
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

export type TalkSummary = {
  frontmatter: TalkFrontMatter
  slug: string
}

export type Contributor = {
  id: string
  name: string
  avatar?: string
  email?: string
  twitter?: string
}

export type Tag = keyof typeof TAGS

export type NavItem = { title: string; href: string }
