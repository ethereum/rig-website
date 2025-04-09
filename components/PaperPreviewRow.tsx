import { join } from "path"

import type { PaperFrontMatter } from "@/lib/types"

import { Authors } from "./Authors"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"
import { Tag } from "./ui/tag"

import { cn } from "@/lib/utils"
import { PATH_ASSETS } from "@/lib/constants"

type PaperPreviewRowProps = {
  frontmatter: PaperFrontMatter
  href: string
  className?: string
}

const PaperPreviewRow = ({
  frontmatter: { title, authors, tags, datePublished, image },
  href,
  className,
}: PaperPreviewRowProps) => (
  <Card
    className={cn(
      "hover:bg-card flex w-full items-center gap-8 py-12 max-lg:flex-col",
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

        <CardTitle>
          <Link href={href} className="hover:text-primary text-foreground">
            {title}
          </Link>
        </CardTitle>

        <Authors authors={authors} />
      </CardHeader>

      <CardContent className="flex flex-col sm:items-end">
        {tags.map((tag, i) => (
          <Tag key={i} className="text-foreground block leading-[2]">
            {tag}
          </Tag>
        ))}
      </CardContent>
    </div>

    <img
      src={join(PATH_ASSETS, image)}
      alt=""
      className="max-h-60 lg:max-w-1/4"
    />
  </Card>
)

export default PaperPreviewRow
