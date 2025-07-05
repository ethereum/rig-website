import type { PostFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
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
  <Link
    href={href}
    className={cn(
      "group hover:bg-card grid grid-cols-subgrid items-center gap-8 py-8 md:col-span-2",
      className
    )}
  >
    <Card className="grid grid-cols-subgrid items-center md:col-span-2">
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

          <CardTitle className="group-hover:text-primary text-foreground">
            {title}
          </CardTitle>

          <Contributors names={authors} skipLinks />
        </CardHeader>
        <CardContent className="flex flex-wrap gap-x-4 md:flex-col md:justify-self-end">
          {tags.map((tag, i) => (
            <Tag key={i} className="text-foreground block leading-[2]">
              {tag}
            </Tag>
          ))}
        </CardContent>
      </div>
    </Card>
  </Link>
)

export default PostPreviewRow
