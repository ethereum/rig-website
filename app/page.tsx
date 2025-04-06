import { join } from "path"

import { BracketLink } from "@/components/ui/link"
import PostCard from "@/components/PostCard"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"

import type { PaperFrontMatter, TalkFrontMatter } from "@/lib/types"
import { fetchPosts } from "@/lib/posts"
import { POSTS_PATH } from "@/lib/constants"

export default function Home() {
  const posts = fetchPosts()

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
          {posts.map(({ frontmatter, slug: path }) => (
            <PostCard
              key={path}
              frontmatter={frontmatter}
              href={join(POSTS_PATH, path)}
            />
          ))}
        </div>

        <BracketLink href="/posts" className="mx-auto lowercase">
          <span className="text-lg">View all posts</span>
        </BracketLink>
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
