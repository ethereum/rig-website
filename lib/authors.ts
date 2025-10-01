import type { Contributor } from "@/lib/types"

/**
 * Normalize an arbitrary author string (e.g. "Jane Doe", "Jane ")
 * to its lowercase first token (e.g. "jane").
 */
export const normalizeAuthorFirst = (value: string): string =>
  value.trim().split(/\s+/)[0].toLowerCase()

/**
 * Returns true if a frontmatter authors array contains (by first-name token) the given member id.
 */
export const frontmatterContainsMemberId = (
  authors: string[],
  memberId: string
): boolean => {
  const target = memberId.toLowerCase()
  return authors.some((a) => normalizeAuthorFirst(a) === target)
}

/**
 * Given a list of authors strings and known members, return the matching members
 * whose id is present (by first-name token) in the authors.
 */
export const extractMembersFromAuthors = (
  authors: string[],
  members: Contributor[]
): Contributor[] => {
  const found: Contributor[] = []
  const seen = new Set<string>()
  for (const m of members) {
    if (seen.has(m.id)) continue
    if (frontmatterContainsMemberId(authors, m.id)) {
      seen.add(m.id)
      found.push(m)
    }
  }
  return found
}
