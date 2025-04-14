import type { TalkFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { BracketLink } from "./ui/bracket-link"

import { cn } from "@/lib/utils"

type TalkCardProps = {
  frontmatter: TalkFrontMatter
  href: string
  className?: string
}

const TalkCard = ({
  frontmatter: { title, authors, startDate, endDate },
  href,
  className,
}: TalkCardProps) => (
  <Card className={cn("row-span-2 grid grid-rows-subgrid gap-8", className)}>
    <div className="flex gap-x-8 gap-y-4 max-md:flex-col-reverse">
      <div className="flex w-full flex-col gap-8">
        <CardHeader>
          <CardTitle>{title}</CardTitle>

          <time
            dateTime={startDate}
            className="block font-sans text-xs font-semibold"
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

          <Contributors names={authors} />
        </CardHeader>

        <CardFooter>
          <BracketLink href={href} className="font-medium">
            View talk
          </BracketLink>
        </CardFooter>
      </div>
    </div>
  </Card>
)

export default TalkCard
