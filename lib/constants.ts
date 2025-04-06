export const MD_DIR_POSTS = "public/posts"
export const MD_DIR_PAPERS = "public/papers"
export const MD_DIR_TALKS = "public/talks"

export const POSTS_PATH = "post"

export const TAGS = {
  consensus: "Consensus",
  data: "Data",
  mev: "MEV",
  pbs: "Proposer-Builder Separation",
  "protocol-development": "Protocol Development",
  "resource-pricing": "Resource Pricing",
  simulations: "Simulations",
  "crypto-ai": "Crypto x AI",
  cryptography: "Cryptography",
  el: "EL",
  "game-theory": "Game Theory / Econ",
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
    href: "/team",
  },
]
