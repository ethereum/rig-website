import type { Contributor } from "@/lib/types"
import { members } from "@/data/profiles"

export const getContributorsFromIDs = (ids: string[]): Contributor[] => {
  const contributors = ids.map((id) => {
    const contributor = members.find((contributor) => contributor.id === id)
    if (contributor) return contributor
    const nameMatch = members.find((contributor) => contributor.name === id)
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

/**
 * Sorts an array of contributors by their last names. If the last names are identical,
 * it falls back to sorting by their first names.
 *
 * @param a - The first contributor to compare.
 * @param b - The second contributor to compare.
 * @returns A negative number if `a` should appear before `b`, a positive number if `b` should appear before `a`,
 *          or zero if they are considered equal.
 */
export const sortContributors = (a: Contributor, b: Contributor) => {
  const [aFirst, ...aRest] = a.name.split(" ")
  const [bFirst, ...bRest] = b.name.split(" ")
  const aLast = aRest.length > 0 ? aRest[aRest.length - 1] : aFirst
  const bLast = bRest.length > 0 ? bRest[bRest.length - 1] : bFirst
  return aLast === bLast
    ? aFirst.localeCompare(bFirst)
    : aLast.localeCompare(bLast)
}
