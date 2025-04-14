import type { NavItem } from "./types"

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

export const NAV_ITEMS: NavItem[] = [
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
  // TODO: Implement or remove
  // {
  //   title: "Open Problems",
  //   href: "/#research",
  // },
]

export const MAX_PER_PAGE = 10

export const URL_GITHUB_REPO = "https://github.com/ethereum/rig"
export const URL_TWITTER = "https://x.com/ethereum"
export const URL_EMAIL = "mailto:rig@ethereum.org"
