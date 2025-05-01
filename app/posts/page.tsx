import { Metadata } from "next"
import { Suspense } from "react"

import { SkeletonLines } from "@/components/ui/skeleton"
import HeroHeading from "@/components/HeroHeading"
import { PostsPage } from "./_components"

import { fetchPosts } from "@/lib/posts"
import { getMetadata } from "@/lib/metadata"

export const metadata: Metadata = getMetadata({
  title: "Posts",
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
    authors: [
      ...new Set(posts.flatMap(({ frontmatter }) => frontmatter.authors)),
    ].sort(),
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
