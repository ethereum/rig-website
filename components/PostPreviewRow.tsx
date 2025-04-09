import type { PostFrontMatter } from "@/lib/types"

import { Authors } from "./Authors"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"
import { Tag } from "./ui/tag"

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

        <Authors authors={authors} />
      </CardHeader>
      <CardContent className="flex flex-col items-end">
        {tags.map((tag, i) => (
          <Tag key={i} className="text-foreground block leading-[2]">
            {tag}
          </Tag>
        ))}
      </CardContent>
    </div>
  </Card>
)

export default PostPreviewRow
