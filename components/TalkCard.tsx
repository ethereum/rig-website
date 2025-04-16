import type { TalkFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
import { BracketLink } from "./ui/bracket-link"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"

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
  <Card
    className={cn(
      "row-span-2 grid grid-rows-subgrid gap-8",
      className
    )}
  >
    <CardHeader>
      <Link href={href} className="text-foreground hover:text-primary block">
        <CardTitle>{title}</CardTitle>
      </Link>

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

      <Contributors names={authors} etAl />
    </CardHeader>

    <CardFooter>
      <BracketLink href={href} className="font-medium">
        View talk
      </BracketLink>
    </CardFooter>
  </Card>
)

export default TalkCard
