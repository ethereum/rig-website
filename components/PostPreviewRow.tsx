import type { PostFrontMatter } from "@/lib/types"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tag } from "./ui/tag"
import Link from "./ui/link"

import { cn } from "@/lib/utils"

type PostPreviewRowProps = {
  frontmatter: PostFrontMatter
  href: string
  className?: string
}

const PostPreviewRow = ({
  frontmatter: { title, authors, tags, datePublished },
  href,
  className,
}: PostPreviewRowProps) => (
  <Card className={cn("hover:bg-card w-full py-12", className)}>
    <div className="flex gap-8 max-sm:flex-col sm:items-center">
      <CardHeader className="w-full">
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

        <CardTitle>
          <Link href={href} className="hover:text-primary text-foreground">
            {title}
          </Link>
        </CardTitle>
        <p className="text-card-foreground font-sans text-sm">
          {new Intl.ListFormat("en", {
            style: "long",
            type: "conjunction",
          }).format(authors.map((author) => author))}
        </p>
      </CardHeader>
      <CardContent>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </CardContent>
    </div>
  </Card>
)

export default PostPreviewRow
