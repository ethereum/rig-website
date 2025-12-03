import type { NavItem } from "./types"

export const SITE_NAME = "Robust Incentives Group"
export const SITE_DESCRIPTION =
  "The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of the Ethereum protocol through the lens of mechanism design."
export const SITE_URL = process.env.SITE_URL || "https://rig.ethereum.org"

export const MD_DIR_POSTS = "public/posts"
export const MD_DIR_PAPERS = "public/papers"
export const MD_DIR_TALKS = "public/talks"

export const PATH_POSTS = "post"
export const PATH_PAPERS = "paper"
export const PATH_TALKS = "talk"
export const PATH_ASSETS = "/assets"

export const TAGS = {
  consensus: "Consensus Layer",
  execution: "Execution Layer",
  el: "Execution Layer",
  cl: "Consensus Layer",
  "data-layer": "Data Layer",
  p2p: "p2p",
  data: "Data",
  mev: "Maximal Extractable Value",
  pbs: "Proposer-Builder Separation",
  "protocol-development": "Protocol Development",
  "resource-pricing": "Resource Pricing",
  simulations: "Simulations",
  "crypto-ai": "Crypto x AI",
  cryptography: "Cryptography",
  "game-theory": "Game Theory / Economics",
  scaling: "Scaling / Rollups",
  eip: "EIP",
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

export const SITE_TWITTER = "ethereum"
export const URL_GITHUB_REPO = "https://github.com/ethereum/rig"
export const URL_TWITTER = "https://x.com/" + SITE_TWITTER
export const SHOW_TWITTER_LINK = false // Toggle flag to display link in footer
export const URL_EMAIL = "mailto:rig@ethereum.org"

export const IS_PRODUCTION_CONTEXT = process.env.CONTEXT === "production"
