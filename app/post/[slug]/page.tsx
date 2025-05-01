import { resolve } from "path"
import type { Metadata } from "next"

import { Contributors } from "@/components/Contributors"
import { MarkdownProvider } from "@/components/Markdown/Provider"
import TagLink from "@/components/TagLink"

import { PATH_POSTS } from "@/lib/constants"
import { fetchPosts, getPost } from "@/lib/posts"
import { getMetadata } from "@/lib/metadata"

export async function generateStaticParams() {
  const allPosts = fetchPosts()
  return allPosts.map(({ slug }) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const {
    frontmatter: { title },
  } = getPost(slug)
  const path = resolve("/", PATH_POSTS, slug)
  return getMetadata({ title, path })
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const { frontmatter, content } = getPost(slug)
  const { title, authors, tags, datePublished } = frontmatter

  return (
    <main className="row-start-2 mt-8 w-full max-w-7xl">
      <div className="mb-8 max-w-3xl space-y-3">
        <time
          dateTime={datePublished}
          className="text-secondary-foreground block font-sans text-sm font-semibold"
        >
          {new Date(datePublished).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <h1 className="text-4xl font-bold tracking-[0.01em] md:text-5xl">
          {title}
        </h1>

        <Contributors names={authors} avatarClass="size-8" />

        <div className="space-x-4">
          {tags.map((tag, i) => (
            <TagLink key={i} type="post">
              {tag}
            </TagLink>
          ))}
        </div>
      </div>

      <hr className="my-12" />

      <article className="max-w-3xl font-sans">
        <MarkdownProvider>{content}</MarkdownProvider>
      </article>
    </main>
  )
}
