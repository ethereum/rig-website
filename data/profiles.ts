import type { Contributor } from "@/lib/types"

export const members: Contributor[] = [
  {
    id: "anders",
    name: "Anders Elowsson",
    avatar: "public/avatars/anders.jpg",
    twitter: "testing", // TODO: Get handles
    email: "anders.elowsson@ethereum.org",
  },
  {
    id: "caspar",
    name: "Caspar Schwarz-Schilling",
    avatar: "public/avatars/caspar-schwarz-schilling.jpg",
    twitter: "testing", // TODO: Get handles
    email: "caspar.schwarz-schilling@ethereum.org",
  },
  {
    id: "davide",
    name: "Davide Crapis",
    avatar: undefined,
    twitter: "testing", // TODO: Get handles
    email: "davide.crapis@ethereum.org",
  },
  {
    id: "julian",
    name: "Julian Ma",
    avatar: undefined,
    twitter: "testing", // TODO: Get handles
    email: "julian.ma@ethereum.org",
  },
  {
    id: "thomas",
    name: "Thomas Thiery",
    avatar: "public/avatars/thomas-thiery.jpg",
    twitter: "testing", // TODO: Get handles
    email: "thomas.thiery@ethereum.org",
  },
]

export const profiles: Contributor[] = [
  ...members,
  {
    id: "ansgar",
    name: "Ansgar Dietrichs",
    avatar: "public/avatars/ansgar-dietrichs.jpg",
  },
  {
    id: "barnabe",
    name: "Barnabé Monnot",
    avatar: "public/avatars/barnabe-monnot.jpg",
  },
  {
    id: "michael",
    name: "Michael Neuder",
    avatar: "public/avatars/michael-neuder.jpg",
  },
]
