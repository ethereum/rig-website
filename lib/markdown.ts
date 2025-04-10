import { TAGS } from "./constants"
import type { PaperFrontMatter, PostFrontMatter, Tag } from "./types"

export const updateFrontMatterTags = <
  T extends PaperFrontMatter | PostFrontMatter,
>(
  frontmatter: T
): T => {
  const { tags } = frontmatter
  const newTags = tags
    .map((tag) => TAGS[tag.toLowerCase() as Tag] || "")
    .filter(Boolean)
  return { ...frontmatter, tags: newTags } as T
}

export const getSlug = (filePath: string) =>
  filePath.replace(/^\/public|\.md$/g, "")
