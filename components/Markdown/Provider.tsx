import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import { MarkdownComponents } from "./Components"

type Props = { children: string }

export const MarkdownProvider = (props: Props) => (
  <ReactMarkdown
    components={MarkdownComponents}
    rehypePlugins={[rehypeRaw]}
    {...props}
  />
)
