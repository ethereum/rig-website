import { join } from "path"

import { BracketLink } from "@/components/ui/link"
import PostCard from "@/components/PostCard"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"

import { fetchPapers } from "@/lib/papers"
import { fetchPosts } from "@/lib/posts"
import { fetchTalks } from "@/lib/talks"

import { PATH_PAPERS, PATH_POSTS, PATH_TALKS } from "@/lib/constants"
import PaperCard from "@/components/PaperCard"
import TalkCard from "@/components/TalkCard"

export default function Home() {
  const posts = fetchPosts()
  const papers = fetchPapers()
  const talks = fetchTalks()

  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <div className="max-w-4xl py-30">
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
          {posts.slice(0, 3).map(({ frontmatter, slug }) => (
            <PostCard
              key={slug}
              frontmatter={frontmatter}
              href={join(PATH_POSTS, slug)}
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
        <div className="grid grid-cols-1 gap-8">
          {papers.slice(0, 3).map(({ frontmatter, slug }) => (
            <PaperCard
              key={slug}
              frontmatter={frontmatter}
              href={join(PATH_PAPERS, slug)}
            />
          ))}
        </div>

        <BracketLink href="/papers" className="mx-auto lowercase">
          <span className="text-lg">View all papers</span>
        </BracketLink>
      </Section>
      <hr />
      <Section>
        <SectionHead>
          <SectionHeading>talks</SectionHeading>
          <SectionCounter>{talks.length}</SectionCounter>
        </SectionHead>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {talks.slice(0, 3).map(({ frontmatter, slug }) => (
            <TalkCard
              key={slug}
              frontmatter={frontmatter}
              href={join(PATH_TALKS, slug)}
            />
          ))}
        </div>

        <BracketLink href="/talks" className="mx-auto lowercase">
          <span className="text-lg">View all talks</span>
        </BracketLink>
      </Section>
    </main>
  )
}
