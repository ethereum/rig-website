import { resolve } from "path"
import type { Metadata } from "next"

import { Contributors } from "@/components/Contributors"
import { MarkdownProvider } from "@/components/Markdown/Provider"

import { PATH_TALKS } from "@/lib/constants"
import { fetchTalks, getTalk } from "@/lib/talks"
import { getMetadata } from "@/lib/metadata"

export async function generateStaticParams() {
  const allTalks = fetchTalks()
  return allTalks.map(({ slug }) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const {
    frontmatter: { title },
  } = getTalk(slug)
  const path = resolve("/", PATH_TALKS, slug)
  return getMetadata({ title, path })
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const { frontmatter, content } = getTalk(slug)
  const { title, authors, startDate, endDate } = frontmatter

  return (
    <main className="row-start-2 mt-8 w-full max-w-7xl">
      <div className="mb-8 max-w-3xl space-y-3">
        <time
          dateTime={startDate}
          className="text-secondary-foreground block font-sans text-sm font-semibold"
        >
          {endDate
            ? new Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).formatRange(new Date(startDate), new Date(endDate))
            : new Date(startDate).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
        </time>

        <h1 className="text-4xl font-bold tracking-[0.01em] md:text-5xl">
          {title}
        </h1>

        <Contributors names={authors} avatarClass="size-8" />
      </div>

      <hr className="my-12" />

      <article className="font-sans">
        <MarkdownProvider>{content}</MarkdownProvider>
      </article>
    </main>
  )
}
