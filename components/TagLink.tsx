import { getTagKey } from "@/lib/posts-client-side"
import Link from "./ui/link"
import { Tag } from "./ui/tag"

export default function TagLink({
  children,
  className,
}: Omit<React.HTMLAttributes<HTMLAnchorElement>, "children"> & {
  children: string
}) {
  return (
    <Link href={`/posts/?tag=${getTagKey(children)}`} className={className}>
      <Tag className="inline">{children}</Tag>
    </Link>
  )
}
