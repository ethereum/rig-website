import { join } from "path"

import type { PaperFrontMatter } from "@/lib/types"

import TagLink from "@/components/TagLink"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { BracketLink } from "./ui/link"

import { cn } from "@/lib/utils"
import { PATH_ASSETS } from "@/lib/constants"

type PaperCardProps = {
  frontmatter: PaperFrontMatter
  href: string
  className?: string
}

const PaperCard = ({
  frontmatter: { title, authors, tags, datePublished, image },
  href,
  className,
}: PaperCardProps) => (
  <Card className={cn("row-span-2 grid grid-rows-subgrid gap-8", className)}>
    <div className="flex gap-x-8 gap-y-4 max-md:flex-col-reverse">
      <div className="flex flex-col gap-8">
        <CardHeader>
          <CardTitle>{title}</CardTitle>

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

          <p className="text-card-foreground font-sans text-sm">
            {new Intl.ListFormat("en", {
              style: "long",
              type: "conjunction",
            }).format(authors.map((author) => author))}
          </p>
        </CardHeader>

        <CardContent>
          {tags.map((tag) => (
            <TagLink key={tag} type="paper" className="block">
              {tag}
            </TagLink>
          ))}
        </CardContent>

        <CardFooter>
          <BracketLink href={href} className="font-medium">
            Read paper
          </BracketLink>
        </CardFooter>
      </div>
      <CardContent className="md:max-w-2/5">
        <img src={join(PATH_ASSETS, image)} alt="" />
      </CardContent>
    </div>
  </Card>
)

export default PaperCard
