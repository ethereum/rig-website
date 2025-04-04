import fs from "fs"
import path from "path"

import matter from "gray-matter"

import type { PostFrontMatter, PostSummary, Tag } from "@/lib/types"
import { MD_DIR_POSTS, TAGS } from "@/lib/constants"

export const getPostURL = (filePath: string) =>
  filePath.replace(/^public|\.md$/g, "")

const updateFrontMatterTags = (
  frontmatter: PostFrontMatter
): PostFrontMatter => {
  const { tags } = frontmatter
  const newTags = tags.map((tag) => TAGS[tag as Tag] || "").filter(Boolean)
  return { ...frontmatter, tags: newTags }
}

export const fetchPosts = (): PostSummary[] => {
  const postsDirContents = fs.readdirSync(MD_DIR_POSTS)

  const posts = postsDirContents
    .map((filename) => {
      const filePath = path.join(MD_DIR_POSTS, filename)
      const file = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(file)
      const frontmatter = updateFrontMatterTags(data as PostFrontMatter)
      if (
        new Date(frontmatter.datePublished)
          .toString()
          .toLowerCase()
          .includes("invalid")
      )
        throw new Error(
          `Invalid datePublished in frontmatter for post: ${filePath} - ${
            !!frontmatter.datePublished
              ? "format not recognized: " + frontmatter.datePublished
              : "datePublished front matter field is required"
          }`
        )

      const postPath = getPostURL(filename)

      return {
        frontmatter,
        href: path.join("post", postPath),
      } as PostSummary
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.datePublished).getTime() -
        new Date(a.frontmatter.datePublished).getTime()
    )
    .slice(0, 3)

  return posts
}

export const getPost = (slug: string) => {
  const filePath = path.join(MD_DIR_POSTS, slug + ".md")
  const file = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(file)
  const frontmatter = updateFrontMatterTags(data as PostFrontMatter)

  return { frontmatter, content } as {
    frontmatter: PostFrontMatter
    content: string
  }
}
