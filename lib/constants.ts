import type { NavItem } from "./types"

export const SITE_NAME = "Robust Incentives Group"
export const SITE_DESCRIPTION =
  "The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of protocol mechanisms with the lens of game theory, mechanism design, crypto-economics, formal methods, and data science."

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
]

export const URL_GITHUB_REPO = "https://github.com/ethereum/rig"
export const URL_TWITTER = "https://x.com/ethereum"
export const URL_EMAIL = "mailto:rig@ethereum.org"
