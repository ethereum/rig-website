import type {
  PaperFrontMatter,
  PaperSummary,
  PostFrontMatter,
  PostSummary,
  TalkFrontMatter,
  TalkSummary,
} from "@/lib/types"

export type WorkItem = {
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

export type WorksListProps = {
  authorFilter: string
  posts: PostSummary[]
  papers: PaperSummary[]
  talks: TalkSummary[]
}
