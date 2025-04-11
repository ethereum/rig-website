import type { Contributor } from "@/lib/types"
import { profiles } from "@/data/profiles"

export const getContributorsFromIDs = (ids: string[]): Contributor[] => {
  const contributors = ids.map((id) => {
    const contributor = profiles.find((contributor) => contributor.id === id)
    if (contributor) return contributor
    const nameMatch = profiles.find((contributor) => contributor.name === id)
    if (nameMatch) return nameMatch
    return { id, name: id } as Contributor
  })
  return contributors
}

export const listNames = (list: string[]): string =>
  new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(list)

export const getFallbackInitials = (fullName: string): string => {
  const names = fullName.split(" ")
  const initials =
    names.length > 1
      ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
      : names[0][0].toUpperCase()
  return initials
}
