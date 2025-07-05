import { Metadata } from "next"
import { notFound } from "next/navigation"

import HeroHeading from "@/components/HeroHeading"

import { getMetadata } from "@/lib/metadata"
import { members } from "@/data/profiles"
import { fetchPosts } from "@/lib/posts"
import { fetchPapers } from "@/lib/papers"
import { fetchTalks } from "@/lib/talks"

import TalkPreviewRow from "@/components/TalkPreviewRow"
import { join } from "path"
import PaperPreviewRow from "@/components/PaperPreviewRow"
import PostPreviewRow from "@/components/PostPreviewRow"
import { PATH_POSTS, PATH_PAPERS, PATH_TALKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { processWorks } from "./utils"

type PageProps = { params: Promise<{ author: string }> }

export async function generateStaticParams() {
  return members.map((member) => ({
    author: member.id,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { author } = await params

  const member = members.find((m) => m.id === author)

  if (!member) {
    return getMetadata({
      title: "Author Not Found",
      path: `/all-works/${author}`,
    })
  }

  return getMetadata({
    title: `All Works by ${member.name}`,
    description: `Explore all posts, papers, and talks by ${member.name}`,
    path: `/all-works/${author}`,
  })
}

export default async function Page({ params }: PageProps) {
  const { author } = await params

  // Validate that the author exists in our members list
  const member = members.find((m) => m.id === author)

  if (!member) notFound()

  // Fetch all data on the server
  const posts = fetchPosts()
  const papers = fetchPapers()
  const talks = fetchTalks()

  const works = processWorks({
    authorFilter: member.name,
    posts,
    papers,
    talks,
  })

  return (
    <main className="row-start-2 w-full">
      <HeroHeading>All Works</HeroHeading>

      <div className="border-primary flex gap-2 border-b p-4 max-sm:px-0 lg:p-8">
        <h2 className="text-primary group-hover:text-foreground inline font-sans text-3xl md:text-4xl">
          {member.name}
        </h2>
        <span className="self-end font-sans">[{works.length}]</span>
      </div>

      <div className="p-4 lg:p-8">
        <div className="space-y-4">
          <div className="grid w-full grid-cols-1 gap-x-8 md:grid-cols-[1fr_auto]">
            {works.map((work) => {
              const key = `${work.type}-${work.slug}`

              switch (work.type) {
                case "post":
                  return (
                    <PostPreviewRow
                      key={key}
                      frontmatter={work.frontmatter}
                      href={join("/", PATH_POSTS, work.slug)}
                      className="border-b px-5 max-sm:-mx-5"
                    />
                  )
                case "paper":
                  return (
                    <PaperPreviewRow
                      key={key}
                      frontmatter={work.frontmatter}
                      href={join("/", PATH_PAPERS, work.slug)}
                      className={cn(
                        "w-full border-b px-5 max-sm:-mx-5",
                        "md:col-span-2 md:grid md:grid-cols-subgrid",
                        "md:[&>div]:col-span-2 md:[&>div]:grid md:[&>div]:grid-cols-subgrid",
                        "max-md:[&_[data-label='tags']]:flex-row max-md:[&_[data-label='tags']]:flex-wrap max-md:[&_[data-label='tags']]:!items-start max-md:[&_[data-label='tags']]:gap-4 [&>div]:flex-col sm:[&>div]:items-start"
                      )}
                    />
                  )
                case "talk":
                  return (
                    <TalkPreviewRow
                      key={key}
                      frontmatter={work.frontmatter}
                      href={join("/", PATH_TALKS, work.slug)}
                      className="border-b px-5 max-sm:-mx-5"
                    />
                  )
                default:
                  return null
              }
            })}
            {works.length === 0 && (
              <div className="text-secondary-foreground mt-4 text-center">
                No works found for this author.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
