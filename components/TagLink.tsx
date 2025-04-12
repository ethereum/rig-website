import { getTagKey } from "@/lib/posts-client-side"
import Link from "./ui/link"
import { Tag } from "./ui/tag"

import { PATH_PAPERS, PATH_POSTS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function TagLink({
  children,
  className,
  type,
}: Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  children: string
  type: typeof PATH_POSTS | typeof PATH_PAPERS
}) {
  return (
    <Link
      href={`/${type}s/?tag=${getTagKey(children)}`}
      className={cn("w-fit", className)}
    >
      <Tag className="inline">{children}</Tag>
    </Link>
  )
}
