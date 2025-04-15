import { join } from "path"

import PostCard from "@/components/PostCard"
import PaperCard from "@/components/PaperCard"
import TalkCard from "@/components/TalkCard"

import { BracketLink } from "@/components/ui/bracket-link"
import { Card } from "@/components/ui/card"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"

import TwitterIcon from "@/components/svg/twitter.svg"
import EmailIcon from "@/components/svg/email.svg"

import { fetchPapers } from "@/lib/papers"
import { fetchPosts } from "@/lib/posts"
import { fetchTalks } from "@/lib/talks"

import {
  PATH_PAPERS,
  PATH_POSTS,
  PATH_TALKS,
  // TAGS, // TODO: Reenable and complete, or remove
} from "@/lib/constants"

import { members } from "@/data/profiles"
import { sortContributors } from "@/lib/contributors"
import Link from "@/components/ui/link"

export default function Home() {
  const posts = fetchPosts()
  const papers = fetchPapers()
  const talks = fetchTalks()
  // const research = Object.entries(TAGS) // TODO: Reenable and complete, or remove

  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <div className="max-w-4xl py-30">
        <h1 className="sr-only">Robust Incentives Group</h1>
        <p className="text-3xl sm:text-5xl">
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

      <Section id="posts">
        <SectionHead>
          <Link href="/posts" className="group relative text-4xl">
            <SectionHeading className="group-hover:text-foreground">
              posts
            </SectionHeading>
            <div
              className="border-primary absolute inset-x-0 top-1 -bottom-0.5 border-2 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 4px, 0 4px, 0 calc(100% - 4px), 100% calc(100% - 4px), 100% 100%, 0 100%)",
              }}
            />
          </Link>
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

      <Section id="papers">
        <SectionHead>
          <Link href="/papers" className="group relative text-4xl">
            <SectionHeading className="group-hover:text-foreground">
              papers
            </SectionHeading>
            <div
              className="border-primary absolute inset-x-0 top-1 -bottom-0.5 border-2 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 4px, 0 4px, 0 calc(100% - 4px), 100% calc(100% - 4px), 100% 100%, 0 100%)",
              }}
            />
          </Link>
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

      <Section id="talks">
        <SectionHead>
          <Link href="/talks" className="group relative text-4xl">
            <SectionHeading className="group-hover:text-foreground">
              talks
            </SectionHeading>
            <div
              className="border-primary absolute inset-x-0 top-1 -bottom-0.5 border-2 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 4px, 0 4px, 0 calc(100% - 4px), 100% calc(100% - 4px), 100% 100%, 0 100%)",
              }}
            />
          </Link>
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

      {/* TODO: Reenable and complete, or remove */}
      {/* <Section id="research">
        <SectionHead>
          <SectionHeading>research fields</SectionHeading>
          <SectionCounter>{research.length}</SectionCounter>
        </SectionHead>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="align-start flex flex-col gap-4">
            {research.map(([key, value]) => {
              return (
                <div key={key} className="flex">
                  <button
                    key={key}
                    className="w-fit flex-1 cursor-pointer text-start font-sans text-lg uppercase"
                  >
                    {value}
                  </button>
                  <div id="TODO:client-side-active-indicator" />
                </div>
              )
            })}
          </div>
          <div className="border-s-2"></div>
        </div>
      </Section>
      <hr /> */}

      <Section
        id="team"
        className="grid grid-cols-1 gap-24 space-y-0 lg:grid-cols-2"
      >
        <h2 className="sr-only">The team</h2>
        <div className="flex flex-col gap-11">
          <p className="text-3xl leading-snug sm:text-4xl">
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
          {members
            .sort(sortContributors)
            .map(({ name, avatar, twitter, email }) => (
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
                  {email && (
                    <BracketLink
                      hideArrow
                      href={`mailto:${email}`}
                      className="flex items-center"
                    >
                      <EmailIcon />
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
