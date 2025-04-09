import fs from "fs"
import path from "path"

import matter from "gray-matter"

import type { PaperFrontMatter, PaperSummary } from "@/lib/types"
import { MD_DIR_PAPERS } from "@/lib/constants"
import { getSlug, updateFrontMatterTags } from "./markdown"

export const fetchPapers = (): PaperSummary[] => {
  const papersDirContents = fs.readdirSync(MD_DIR_PAPERS)

  const papers = papersDirContents
    .map((filename) => {
      const filePath = path.join(MD_DIR_PAPERS, filename)
      const file = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(file)
      const frontmatter = updateFrontMatterTags(data as PaperFrontMatter)
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

      const slug = getSlug(filename)

      return { frontmatter, slug } as PaperSummary
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.datePublished).getTime() -
        new Date(a.frontmatter.datePublished).getTime()
    )

  return papers
}

export const getPaper = (slug: string) => {
  const filePath = path.join(MD_DIR_PAPERS, slug + ".md")
  const file = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(file)
  const frontmatter = updateFrontMatterTags(data as PaperFrontMatter)

  return { frontmatter, content } as {
    frontmatter: PaperFrontMatter
    content: string
  }
}
