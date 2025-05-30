import type { TalkFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"

import { cn } from "@/lib/utils"

type TalkPreviewRowProps = {
  frontmatter: TalkFrontMatter
  href: string
  className?: string
}

const TalkPreviewRow = ({
  frontmatter: { title, authors, startDate, endDate, location },
  href,
  className,
}: TalkPreviewRowProps) => (
  <Link
    href={href}
    className={cn(
      "group hover:bg-card grid grid-cols-subgrid items-center py-8 md:col-span-2",
      className
    )}
  >
    <Card className="grid grid-cols-subgrid gap-8 sm:items-center md:col-span-2">
      <CardHeader className="w-full">
        <time
          dateTime={startDate}
          className="text-secondary-foreground block font-sans text-sm font-semibold"
        >
          {endDate
            ? new Intl.DateTimeFormat("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).formatRange(new Date(startDate), new Date(endDate))
            : new Date(startDate).toLocaleDateString("en", {
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

      <CardContent className="text-foreground flex flex-col">
        {location}
      </CardContent>
    </Card>
  </Link>
)

export default TalkPreviewRow
