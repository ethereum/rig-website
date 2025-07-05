"use client"

import { Button } from "@/components/ui/button"

import { useFilters } from "@/hooks/useFilters"
import { cn } from "@/lib/utils"

import type { PostSummary, PaperSummary, TalkSummary } from "@/lib/types"
import WorksList from "../WorksList"

type AllWorksPageProps = {
  authorOptions: string[]
  posts: PostSummary[]
  papers: PaperSummary[]
  talks: TalkSummary[]
}

const AllWorksPage = ({
  authorOptions,
  posts,
  papers,
  talks,
}: AllWorksPageProps) => {
  const { resetFilters, searchParams, updateFilters } = useFilters()
  const authorFilter = searchParams.get("author") || ""

  // Check if any filter is active
  const filtered = authorFilter !== ""

  return (
    <>
      <div
        className={cn(
          "text-foreground-light border-primary grid gap-4 border-b p-4 font-sans text-sm max-sm:px-0 lg:gap-x-10 lg:p-8",
          "grid-cols-2 lg:grid-cols-[auto_10rem_auto_1fr]"
        )}
      >
        <span className="col-start-1 row-start-1 self-center text-nowrap max-lg:col-span-1">
          Filter by:
        </span>
        <select
          id="filter-author"
          className={cn("border-b px-2 py-1", authorFilter && "bg-border")}
          value={authorFilter}
          onChange={(e) => updateFilters("author", e.target.value)}
        >
          <option value="">author</option>
          {authorOptions.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>

        <div className="col-start-2 row-start-1 self-end max-lg:text-end lg:col-start-3">
          <Button
            variant="ghost"
            className={cn(
              "group text-primary hover:text-primary invisible relative h-fit rounded-none p-0 lowercase hover:bg-transparent hover:underline hover:underline-offset-2",
              filtered && "visible"
            )}
            onClick={resetFilters}
          >
            <span className="-me-1 group-hover:invisible">&#91;</span>
            Reset
            <span className="-ms-1 group-hover:invisible">&#93;</span>
          </Button>
        </div>
      </div>

      <div className="p-4 lg:p-8">
        {authorFilter ? (
          <WorksList
            authorFilter={authorFilter}
            posts={posts}
            papers={papers}
            talks={talks}
          />
        ) : (
          <div className="text-secondary-foreground py-8 text-center">
            Select an author to view their works.
          </div>
        )}
      </div>
    </>
  )
}

export default AllWorksPage