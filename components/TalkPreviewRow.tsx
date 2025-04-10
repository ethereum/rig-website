import type { TalkFrontMatter } from "@/lib/types"

import { Authors } from "./Authors"
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
  <Card
    className={cn(
      "hover:bg-card grid grid-cols-subgrid items-center gap-8 py-12 md:col-span-2",
      className
    )}
  >
    <div className="grid grid-cols-subgrid gap-8 sm:items-center md:col-span-2">
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
        <CardTitle>
          <Link href={href} className="hover:text-primary text-foreground">
            {title}
          </Link>
        </CardTitle>

        <Authors authors={authors} />
      </CardHeader>

      <CardContent className="flex flex-col md:text-end">
        {location}
      </CardContent>
    </div>
  </Card>
)

export default TalkPreviewRow
