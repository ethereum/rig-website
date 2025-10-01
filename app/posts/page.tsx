import { Metadata } from "next"
import { Suspense } from "react"

import { SkeletonLines } from "@/components/ui/skeleton"
import HeroHeading from "@/components/HeroHeading"
import { PostsPage } from "./_components"

import { fetchPosts } from "@/lib/posts"
import { getMetadata } from "@/lib/metadata"
import { members } from "@/data/profiles"
import { normalizeAuthorFirst } from "@/lib/authors"

export const metadata: Metadata = getMetadata({
  title: "Posts",
  description: "Explore our posts on Ethereum protocol and mechanism design",
  path: "/posts",
})

export default function Page() {
  const posts = fetchPosts()

  // Get unique values for filter dropdowns
  const filterOptions = {
    years: [
      ...new Set(
        posts.map(({ frontmatter }) =>
          new Date(frontmatter.datePublished).getFullYear()
        )
      ),
    ].sort((a, b) => b - a),
    authors: members
      .filter((member) =>
        posts.some(({ frontmatter }) =>
          frontmatter.authors.some((a) => normalizeAuthorFirst(a) === member.id)
        )
      )
      .map((m) => m.name)
      .sort(),
    tags: [
      ...new Set(posts.flatMap(({ frontmatter }) => frontmatter.tags)),
    ].sort(),
  }

  return (
    <main className="row-start-2 w-full">
      <HeroHeading>Posts</HeroHeading>
      <Suspense fallback={<SkeletonLines noOfLines={5} />}>
        <PostsPage allPosts={posts} options={filterOptions} />
      </Suspense>
    </main>
  )
}
