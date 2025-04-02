import type { PostFrontMatter } from "@/lib/types"
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Tag } from "./ui/tag"
import { cn } from "@/lib/utils"

type PostCardProps = {
  frontmatter: PostFrontMatter
  href: string
  className?: string
}

const PostCard = ({
  frontmatter: { title, authors, tags, datePublished },
  href,
  className,
}: PostCardProps) => (
  <div className={cn("row-span-2 grid grid-rows-subgrid gap-8", className)}>
    <CardHeader>
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

      <CardTitle>{title}</CardTitle>
      <p className="text-card-foreground font-sans text-sm">
        {new Intl.ListFormat("en", {
          style: "long",
          type: "conjunction",
        }).format(authors.map((author) => author))}
      </p>

      <CardContent>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </CardContent>
    </CardHeader>
    <CardFooter>
      {/* TODO: Abstract Link component */}
      <a
        href={href}
        className="hover:text-primary font-sans font-medium tracking-[0.02em]"
      >
        <span className="text-primary">&#91; </span>
        Read post
        <span className="text-primary"> &#93;</span>
      </a>
    </CardFooter>
  </div>
)

export default PostCard
