"use client"

import { useState } from "react"

import type { ResearchFieldLookup, Tag } from "@/lib/types"

import ChevronRight from "@/components/svg/chevron-right.svg"

import { BracketLink } from "./ui/bracket-link"

import { cn } from "@/lib/utils"

export type ResearchFieldsProps = {
  fields: Tag[]
  research: ResearchFieldLookup
  className?: string
}

const ResearchFields = ({
  className,
  fields,
  research,
}: ResearchFieldsProps) => {
  const [selected, setSelected] = useState<Tag>(fields[0])
  const handleSelect = (idx: number) => {
    setSelected(fields[idx])
  }
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2", className)}>
      <div className="align-start flex flex-col gap-4 pe-10">
        {fields.map((tag, idx) => {
          return (
            <div
              key={tag}
              className={cn("flex", tag === selected && "text-primary")}
            >
              <button
                key={tag}
                className={cn(
                  "w-fit flex-1 cursor-pointer text-start font-sans text-lg uppercase"
                )}
                onClick={() => handleSelect(idx)}
              >
                {research[tag].title} ({research[tag].postsCount})
              </button>
              <ChevronRight className={cn(tag !== selected && "hidden")} />
            </div>
          )
        })}
      </div>
      <div className="border-s-2 ps-10">
        <div className="my-8 space-y-6">
          <h3 className="text-4xl">{research[selected].title}</h3>
          <p className="font-sans">{research[selected].description}</p>
          <div className="flex flex-wrap gap-6">
            <BracketLink href={`/posts?tag=${selected}`}>
              View all posts
            </BracketLink>
            <BracketLink href={`/papers?tag=${selected}`}>
              View all papers
            </BracketLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchFields
