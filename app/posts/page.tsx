import PostPreviewRow from "@/components/PostPreviewRow"
import { fetchPosts } from "@/lib/posts"

export default function Page() {
  const posts = fetchPosts()

  // TODO: Add pagination

  return (
    <main className="row-start-2">
      <div>
        {posts.map(({ frontmatter, href: path }) => (
          <PostPreviewRow
            key={path}
            frontmatter={frontmatter}
            href={path}
            className="border-b"
          />
        ))}
      </div>
    </main>
  )
}
