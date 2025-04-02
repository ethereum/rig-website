import fs from "fs"
import path from "path"

import matter from "gray-matter"

import PostCard from "@/components/PostCard"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"
import type {
  PaperFrontMatter,
  PostFrontMatter,
  TalkFrontMatter,
} from "@/lib/types"
import { MD_DIR_POSTS } from "@/lib/constants"
import { getPostURL } from "@/lib/posts"

type PostSummary = { frontmatter: PostFrontMatter; path: string }

export default async function Home() {
  const postsDirContents = fs.readdirSync(MD_DIR_POSTS)

  const posts = postsDirContents
    .map((filename) => {
      const filePath = path.join(MD_DIR_POSTS, filename)
      const file = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(file)
      const frontmatter = data as PostFrontMatter
      if (
        new Date(frontmatter.datePublished)
          .toString()
          .toLowerCase()
          .includes("invalid")
      )
        throw new Error(
          `Invalid publishDate in frontmatter for file: ${filePath} - ${
            !!frontmatter.datePublished
              ? "format not recognized: " + frontmatter.datePublished
              : "datePublished front matter field is required"
          }`
        )

      const postPath = getPostURL(filename)

      return { frontmatter, path: postPath } as PostSummary
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.datePublished).getTime() -
        new Date(a.frontmatter.datePublished).getTime()
    ) as PostSummary[]

  const papers = [] as PaperFrontMatter[]

  const talks = [] as TalkFrontMatter[]

  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <div className="py-30">
        <h1 className="sr-only">Robust Incentives Group</h1>
        <p className="text-5xl">
          The{" "}
          <span className="text-primary-foreground">
            Robust Incentives Group
          </span>{" "}
          is an Ethereum Foundation research team dedicated to the study of
          protocol mechanisms with the lens of game theory, mechanism design,
          crypto-economics, formal methods and data science.
        </p>
      </div>
      <hr />
      <Section>
        <SectionHead>
          <SectionHeading>posts</SectionHeading>
          <SectionCounter>{posts.length}</SectionCounter>
        </SectionHead>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ frontmatter, path }) => (
            <PostCard key={path} frontmatter={frontmatter} href={path} />
          ))}
        </div>
      </Section>
      <hr />
      <Section>
        <SectionHead>
          <SectionHeading>papers</SectionHeading>
          <SectionCounter>{papers.length}</SectionCounter>
        </SectionHead>
      </Section>
      <hr />
      <Section>
        <SectionHead>
          <SectionHeading>talks</SectionHeading>
          <SectionCounter>{talks.length}</SectionCounter>
        </SectionHead>
      </Section>
    </main>
  )
}
