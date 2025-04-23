import type { Contributor } from "@/lib/types"
import { profiles } from "@/data/profiles"

export const getContributorsFromIDs = (ids: string[]): Contributor[] => {
  const contributors: Contributor[] = []
  const addedProfileIds = new Set<string>() // Track added IDs to prevent duplicates

  ids.forEach((identifier) => {
    if (typeof identifier !== 'string') {
      console.warn(`[getContributorsFromIDs] Skipping non-string identifier:`, identifier);
      return; // Skip non-string identifiers
    }

    const lowerIdentifier = identifier.toLowerCase()

    const foundProfile = profiles.find(
      (profile) =>
        profile.id.toLowerCase() === lowerIdentifier ||
        profile.name.toLowerCase() === lowerIdentifier
    )

    if (foundProfile) {
      if (!addedProfileIds.has(foundProfile.id)) {
        contributors.push(foundProfile)
        addedProfileIds.add(foundProfile.id)
      }
    } else {
      const fallbackId = identifier;
      if (!addedProfileIds.has(fallbackId)) {
        contributors.push({ id: fallbackId, name: fallbackId })
        addedProfileIds.add(fallbackId)
      }
    }
  })

  return contributors
}

/**
 * Formats list of names as a conjunctive list (with Oxford comma if more than two names)
 * @param names List of contributor names
 * @returns Formatted string of names joined by commas and "and"
 */
export const listNames = (names: string[]): string => {
  if (names.length === 0) return ""
  if (names.length === 1) return names[0]
  if (names.length === 2) return `${names[0]} and ${names[1]}`

  // When more than 2 names, use Oxford comma
  const lastNameIndex = names.length - 1
  const namesExceptLast = names.slice(0, lastNameIndex).join(", ")
  return `${namesExceptLast}, and ${names[lastNameIndex]}`
}

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

// Format team member names differently based on whether "et al." will be used
export const formatTeamNames = (names: string[], useEtAl: boolean) => {
  if (names.length === 0) return ""
  if (names.length === 1) return names[0]

  // When using "et al.", use comma-separated list without "and"
  if (useEtAl) return names.join(", ")

  // Otherwise use the standard listNames function (which includes "and")
  return listNames(names)
}
