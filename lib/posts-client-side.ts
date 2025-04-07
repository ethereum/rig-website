import { TAGS } from "@/lib/constants"

export const getTagKey = (tag: string) => {
  const entry = Object.entries(TAGS).find(([_, value]) => value === tag)
  return entry ? entry[0] : ""
}
