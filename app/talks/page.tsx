import { Suspense } from "react"

import { SkeletonLines } from "@/components/ui/skeleton"
import HeroHeading from "@/components/HeroHeading"
import { TalksPage } from "./_components"

import { fetchTalks } from "@/lib/talks"

export default function Page() {
  const talks = fetchTalks()

  // Get unique values for filter dropdowns
  const filterOptions = {
    years: [
      ...new Set(
        talks.map(({ frontmatter }) =>
          new Date(frontmatter.startDate).getFullYear()
        )
      ),
    ].sort((a, b) => b - a),
    authors: [
      ...new Set(talks.flatMap(({ frontmatter }) => frontmatter.authors)),
    ].sort(),
    locations: [
      ...new Set(talks.map(({ frontmatter }) => frontmatter.location)),
    ].sort(),
  }

  return (
    <main className="row-start-2 w-full">
      <HeroHeading>Talks</HeroHeading>
      <Suspense fallback={<SkeletonLines noOfLines={5} />}>
        <TalksPage allTalks={talks} options={filterOptions} />
      </Suspense>
    </main>
  )
}
