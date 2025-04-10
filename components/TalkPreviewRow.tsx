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
      "hover:bg-card flex w-full items-center gap-8 py-12 max-lg:flex-col",
      className
    )}
  >
    <div className="flex w-full gap-8 max-sm:flex-col sm:items-center">
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

      <CardContent className="flex flex-col sm:items-end">
        {location}
      </CardContent>
    </div>
  </Card>
)

export default TalkPreviewRow
