import { TAGS } from "@/lib/constants"

export const getTagKey = (tag: string) => {
  const entry = Object.entries(TAGS).find(([, value]) => value === tag)
  return entry ? entry[0] : ""
}
