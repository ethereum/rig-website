export const MD_DIR_POSTS = "public/posts"
export const MD_DIR_PAPERS = "public/papers"
export const MD_DIR_TALKS = "public/talks"

export const PATH_POSTS = "post"
export const PATH_PAPERS = "paper"
export const PATH_TALKS = "talk"
export const PATH_ASSETS = "/assets"

export const TAGS = {
  consensus: "Consensus",
  data: "Data",
  mev: "Maximal Extractable Value",
  pbs: "Proposer-Builder Separation",
  "protocol-development": "Protocol Development",
  "resource-pricing": "Resource Pricing",
  simulations: "Simulations",
  "crypto-ai": "Crypto x AI",
  cryptography: "Cryptography",
  el: "EL",
  "game-theory": "Game Theory / Economics",
  scaling: "Scaling / Rollups",
} as const

export const NAV_ITEMS: { title: string; href: string }[] = [
  {
    title: "Posts",
    href: "/posts",
  },
  {
    title: "Papers",
    href: "/papers",
  },
  {
    title: "Talks",
    href: "/talks",
  },
  {
    title: "Open Problems",
    href: "/issues",
  },
]

export const MAX_PER_PAGE = 10
