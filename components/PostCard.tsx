import type { PostFrontMatter } from "@/lib/types"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import TagLink from "@/components/TagLink"
import { BracketLink } from "./ui/link"

import { cn } from "@/lib/utils"

type PostCardProps = {
  frontmatter: PostFrontMatter
  href: string
  className?: string
}

const PostCard = ({
  frontmatter: { title, authors, tags, datePublished },
  href,
  className,
}: PostCardProps) => (
  <Card className={cn("row-span-2 grid grid-rows-subgrid gap-8", className)}>
    <CardHeader>
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

      <CardTitle>{title}</CardTitle>
      <p className="text-card-foreground font-sans text-sm">
        {new Intl.ListFormat("en", {
          style: "long",
          type: "conjunction",
        }).format(authors.map((author) => author))}
      </p>

      <CardContent>
        {tags.map((tag) => (
          <TagLink key={tag} type="post" className="block">
            {tag}
          </TagLink>
        ))}
      </CardContent>
    </CardHeader>
    <CardFooter>
      <BracketLink href={href} className="font-medium">
        Read post
      </BracketLink>
    </CardFooter>
  </Card>
)

export default PostCard
