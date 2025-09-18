import type { Contributor } from "@/lib/types"

export const members: Contributor[] = [
  {
    id: "anders",
    name: "Anders Elowsson",
    avatar: "public/avatars/anders-elowsson.jpg",
    twitter: "weboftrees",
    email: "anders.elowsson@ethereum.org",
  },
  {
    id: "caspar",
    name: "Caspar Schwarz-Schilling",
    avatar: "public/avatars/caspar-schwarz-schilling.jpg",
    twitter: "casparschwa",
    email: "caspar.schwarz-schilling@ethereum.org",
  },
  {
    id: "julian",
    name: "Julian Ma",
    avatar: "public/avatars/julian-ma.jpg",
    twitter: "_julianma",
    email: "julian.ma@ethereum.org",
  },
  {
    id: "thomas",
    name: "Thomas Thiery",
    avatar: "public/avatars/thomas-thiery.jpg",
    twitter: "soispoke",
    email: "thomas.thiery@ethereum.org",
  },
    {
    id: "maria",
    name: "Maria Silva",
    avatar: "public/avatars/maria-silva.jpg",
    twitter: "misilva73",
    email: "maria@ethereum.org",
  },
]

export const vips: Contributor[] = [
  {
    id: "ansgar",
    name: "Ansgar Dietrichs",
    avatar: "public/avatars/ansgar-dietrichs.jpg",
    twitter: "adietrichs",
  },
  {
    id: "barnabe",
    name: "Barnabé Monnot",
    avatar: "public/avatars/barnabe-monnot.jpg",
    twitter: "barnabemonnot",
  },
  {
    id: "francesco",
    name: "Francesco d'Amato",
    twitter: "fradamt",
    avatar: "public/avatars/francesco-damato.jpg",
  },
    {
    id: "davide",
    name: "Davide Crapis",
    avatar: "public/avatars/davide-crapis.jpg",
    twitter: "davidecrapis",
    email: "davide.crapis@ethereum.org",
  }
]

export const profiles: Contributor[] = [...members, ...vips]
