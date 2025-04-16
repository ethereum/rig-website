import { Suspense } from "react"
import { join } from "path"

import AbsoluteBrackets from "@/components/AbsoluteBrackets"
import PostCard from "@/components/PostCard"
import PaperCard from "@/components/PaperCard"
import ResearchFields from "@/components/ResearchFields"
import TalkCard from "@/components/TalkCard"

import Link from "@/components/ui/link"
import { BracketLink } from "@/components/ui/bracket-link"
import { Card } from "@/components/ui/card"
import {
  Section,
  SectionHead,
  SectionHeading,
  SectionCounter,
} from "@/components/ui/section"
import { Skeleton } from "@/components/ui/skeleton"

import TwitterIcon from "@/components/svg/twitter.svg"
import EmailIcon from "@/components/svg/email.svg"

import { sortContributors } from "@/lib/contributors"
import { fetchPapers } from "@/lib/papers"
import { fetchPosts } from "@/lib/posts"
import { fetchFieldList, fetchResearchFields } from "@/lib/research"
import { fetchTalks } from "@/lib/talks"

import { members } from "@/data/profiles"

import { PATH_PAPERS, PATH_POSTS, PATH_TALKS } from "@/lib/constants"
import ResearchFieldsAccordion from "@/components/ResearchFieldsAccordion"

export default function Home() {
  const posts = fetchPosts()
  const papers = fetchPapers()
  const talks = fetchTalks()
  const research = fetchResearchFields(posts, papers)
  const fields = fetchFieldList()

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
            <AbsoluteBrackets />
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
            <AbsoluteBrackets />
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
            <AbsoluteBrackets />
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

      <Section id="research">
        <SectionHead>
          <SectionHeading>research fields</SectionHeading>
          <SectionCounter>{fields.length}</SectionCounter>
        </SectionHead>
        <div className="flex flex-col gap-4">
          <Suspense
            fallback={
              <>
                {/* Desktop */}
                <div className="grid grid-cols-2 gap-16 max-md:hidden">
                  <div className="flex flex-col gap-4">
                    {Array(fields.length)
                      .fill(0)
                      .map((_, idx) => (
                        <Skeleton key={idx} className="h-8 w-full" />
                      ))}
                  </div>
                  <Skeleton className="h-full w-full" />
                </div>
                {/* Mobile */}
                <div className="flex flex-col gap-4 md:hidden">
                  {Array(fields.length)
                    .fill(0)
                    .map((_, idx) => (
                      <Skeleton key={idx} className="h-8 w-full" />
                    ))}
                </div>
              </>
            }
          >
            <ResearchFields
              research={research}
              fields={fields}
              className="max-md:hidden"
            />

            <ResearchFieldsAccordion
              research={research}
              fields={fields}
              className="md:hidden"
            />
          </Suspense>
        </div>
      </Section>
      <hr />

      <Section
        id="team"
        className="grid grid-cols-1 gap-24 space-y-0 lg:grid-cols-2"
      >
        <h2 className="sr-only">The team</h2>
        <div className="flex flex-col gap-11">
          <p className="text-3xl leading-snug sm:text-4xl">
            Are you interested in joining RIG? We are always open for
            exceptional talent
          </p>
          <Card className="bg-card flex flex-col gap-4 border p-8">
            <p className="m-0 font-sans">
              While we may not always be actively hiring, we continuously seek
              top talent. If we are not actively searching, the selection
              process is more competitive, but we encourage applications from
              outstanding candidates at any time.
            </p>
            <BracketLink
              hideArrow
              href="https://jobs.lever.co/ethereumfoundation/dc609d02-780b-46e8-9d70-42b2e4d0a671"
            >
              apply today
            </BracketLink>
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
