import type { PaperFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
import { CardContent, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"
import { Tag } from "./ui/tag"

import { cn } from "@/lib/utils"

type PaperPreviewRowProps = {
  frontmatter: PaperFrontMatter
  href: string
  className?: string
}

const PaperPreviewRow = ({
  frontmatter: { title, authors, tags, datePublished },
  href,
  className,
}: PaperPreviewRowProps) => (
  <Link
    href={href}
    className={cn(
      "group hover:bg-card flex w-full items-center gap-8 py-8",
      className
    )}
  >
    <div className="flex w-full gap-8 max-sm:flex-col sm:items-center">
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

      <CardContent data-label="tags" className="flex flex-col sm:items-end">
        {tags.map((tag, i) => (
          <Tag key={i} className="text-foreground block leading-[2]">
            {tag}
          </Tag>
        ))}
      </CardContent>
    </div>
  </Link>
)

export default PaperPreviewRow
