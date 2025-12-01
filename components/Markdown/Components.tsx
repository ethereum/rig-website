import Image from "next/image"
import { type Components } from "react-markdown"

import Link from "@/components/ui/link"
import YouTube from "../YouTube"

export const MarkdownComponents: Components = {
  a: ({ children, href }) => (
    <Link href={href} className="max-w-full break-anywhere">
      {children}
    </Link>
  ),
  img: ({ src, alt }) => (
    <Image className="mx-auto block" src={src || ""} alt={alt || ""} />
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-4xl md:mt-16 md:text-5xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 text-3xl md:mt-12 md:text-4xl">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 list-disc ps-8">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 list-decimal ps-8">{children}</ol>,
  li: ({ children }) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 ps-4">{children}</blockquote>
  ),
  video: ({ src }) => <YouTube url={src || ""} />,
  hr: () => <hr className="my-12" />,
}
