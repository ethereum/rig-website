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
  <Card
    className={cn(
      "hover:bg-card grid grid-cols-subgrid items-center gap-8 py-12 md:col-span-2",
      className
    )}
  >
    <div className="grid grid-cols-subgrid gap-8 sm:items-center md:col-span-2">
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
      <CardContent className="flex flex-wrap gap-x-4 md:flex-col md:text-end">
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
