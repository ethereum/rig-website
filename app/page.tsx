import { join } from "path"

import { BracketLink } from "@/components/ui/link"
import PostCard from "@/components/PostCard"
import PaperCard from "@/components/PaperCard"
import TalkCard from "@/components/TalkCard"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"

import { fetchPapers } from "@/lib/papers"
import { fetchPosts } from "@/lib/posts"
import { fetchTalks } from "@/lib/talks"
import TwitterIcon from "@/components/svg/twitter.svg"

import { PATH_PAPERS, PATH_POSTS, PATH_TALKS } from "@/lib/constants"
import { authors } from "@/data/authors"
import { Card } from "@/components/ui/card"

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
      <hr />
      <Section className="grid grid-cols-1 gap-24 space-y-0 lg:grid-cols-2">
        <h2 className="sr-only">The team</h2>
        <div className="flex flex-col gap-11">
          <p className="text-4xl leading-snug">
            Some text about the team that can help engage and create some
            connection with the team
          </p>
          <Card className="bg-card flex flex-col gap-4 border p-8">
            <p className="m-0 font-sans">
              looking for some super exciting research job? look no further
            </p>
            {/* TODO: Get link */}
            <BracketLink href="#">we are hiring</BracketLink>
          </Card>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8">
          {authors.map(({ name, avatar, twitter, email }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 font-sans"
            >
              <img
                src={avatar?.replace(/^public/, "")}
                alt={name}
                className="size-22 rounded-full border"
              />
              <h3 className="text-center text-sm">{name}</h3>
              <div className="flex justify-center">
                {twitter && (
                  <BracketLink
                    hideArrow
                    href={new URL(twitter, "https://x.com").toString()}
                    className="flex items-center"
                  >
                    <TwitterIcon />
                  </BracketLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
