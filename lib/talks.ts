import fs from "fs"
import path from "path"

import matter from "gray-matter"

import type { TalkFrontMatter, TalkSummary } from "@/lib/types"
import { MD_DIR_TALKS } from "@/lib/constants"
import { getSlug } from "./markdown"

export const fetchTalks = (): TalkSummary[] => {
  const talksDirContents = fs.readdirSync(MD_DIR_TALKS)

  const talks = talksDirContents
    .map((filename) => {
      const filePath = path.join(MD_DIR_TALKS, filename)
      const file = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(file)

      const frontmatter = data as TalkFrontMatter

      if (
        new Date(frontmatter.startDate)
          .toString()
          .toLowerCase()
          .includes("invalid")
      )
        throw new Error(
          `Invalid startDate in frontmatter for talk: ${filePath} - ${
            !!frontmatter.startDate
              ? "format not recognized: " + frontmatter.startDate
              : "startDate front matter field is required"
          }`
        )

      const slug = getSlug(filename)

      return { frontmatter, slug } as TalkSummary
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.startDate).getTime() -
        new Date(a.frontmatter.startDate).getTime()
    )

  return talks
}

export const getTalk = (slug: string) => {
  const filePath = path.join(MD_DIR_TALKS, slug + ".md")
  const file = fs.readFileSync(filePath, "utf-8")
  const { data: frontmatter, content } = matter(file)

  return { frontmatter, content } as {
    frontmatter: TalkFrontMatter
    content: string
  }
}
