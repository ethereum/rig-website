import { Metadata } from "next"

import HeroHeading from "@/components/HeroHeading"
import AllWorksPage from "./_components/lazy"

import { getMetadata } from "@/lib/metadata"
import { members } from "@/data/profiles"
import { fetchPosts } from "@/lib/posts"
import { fetchPapers } from "@/lib/papers"
import { fetchTalks } from "@/lib/talks"

export const metadata: Metadata = getMetadata({
  title: "All Works",
  description: "Explore all works for a given author in one list",
  path: "/all-works",
})

export default function Page() {
  // Get team member names for the filter dropdown (excludes VIPs)
  const authorOptions = members.map((member) => member.name).sort()

  // Fetch all data on the server
  const posts = fetchPosts()
  const papers = fetchPapers()
  const talks = fetchTalks()

  return (
    <main className="row-start-2 w-full">
      <HeroHeading>All Works</HeroHeading>

      <AllWorksPage
        authorOptions={authorOptions}
        posts={posts}
        papers={papers}
        talks={talks}
      />
    </main>
  )
}
