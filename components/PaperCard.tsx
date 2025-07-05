import type { PaperFrontMatter } from "@/lib/types"

import { Contributors } from "./Contributors"
import TagLink from "@/components/TagLink"
import { BracketLink } from "./ui/bracket-link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Link from "./ui/link"

import { cn } from "@/lib/utils"

type PaperCardProps = {
  frontmatter: PaperFrontMatter
  href: string
  className?: string
}

const PaperCard = ({
  frontmatter: { title, authors, tags, datePublished },
  href,
  className,
}: PaperCardProps) => (
  <Card className={cn("row-span-2 grid grid-rows-subgrid", className)}>
      <div className="flex w-full flex-col gap-x-8 gap-y-4">
        <CardHeader>
          <Link
            href={href}
            className="text-foreground hover:text-primary block"
          >
            <CardTitle>{title}</CardTitle>
          </Link>

          <time
            dateTime={datePublished}
            className="block font-sans text-xs font-semibold"
          >
            {new Date(datePublished).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <Contributors names={authors} etAl enableAllWorksLinks />
        </CardHeader>

        <CardContent>
          {tags.map((tag) => (
            <TagLink key={tag} type="paper" className="block">
              {tag}
            </TagLink>
          ))}
        </CardContent>

        <CardFooter className="mt-4">
          <BracketLink href={href} className="font-medium">
            Read paper
          </BracketLink>
        </CardFooter>
      </div>
  </Card>
)

export default PaperCard
