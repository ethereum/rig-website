import { fetchPosts } from "@/lib/posts"
import { PostsPage } from "./_components"

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
    ].sort(),
    authors: [
      ...new Set(posts.flatMap(({ frontmatter }) => frontmatter.authors)),
    ].sort(),
    tags: [
      ...new Set(posts.flatMap(({ frontmatter }) => frontmatter.tags)),
    ].sort(),
  }

  // TODO: Add pagination

  return (
    <main className="row-start-2 w-full">
      <PostsPage allPosts={posts} options={filterOptions} />
    </main>
  )
}
