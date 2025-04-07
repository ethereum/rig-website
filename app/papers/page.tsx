import { Suspense } from "react"

import { SkeletonLines } from "@/components/ui/skeleton"
import HeroHeading from "@/components/HeroHeading"
import { PapersPage } from "./_components"

import { fetchPapers } from "@/lib/papers"

export default function Page() {
  const papers = fetchPapers()

  // Get unique values for filter dropdowns
  const filterOptions = {
    years: [
      ...new Set(
        papers.map(({ frontmatter }) =>
          new Date(frontmatter.datePublished).getFullYear()
        )
      ),
    ].sort(),
    authors: [
      ...new Set(papers.flatMap(({ frontmatter }) => frontmatter.authors)),
    ].sort(),
    tags: [
      ...new Set(papers.flatMap(({ frontmatter }) => frontmatter.tags)),
    ].sort(),
  }

  return (
    <main className="row-start-2 w-full">
      <HeroHeading>Papers</HeroHeading>
      <Suspense fallback={<SkeletonLines noOfLines={5} />}>
        <PapersPage allPapers={papers} options={filterOptions} />
      </Suspense>
    </main>
  )
}
