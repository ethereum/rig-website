"use client"

import type { ResearchFieldLookup, Tag } from "@/lib/types"

import { BracketLink } from "./ui/bracket-link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

import { cn } from "@/lib/utils"

export type ResearchFieldsProps = {
  fields: Tag[]
  research: ResearchFieldLookup
  className?: string
}

const ResearchFieldsAccordion = ({
  className,
  fields,
  research,
}: ResearchFieldsProps) => {
  return (
    <Accordion
      type="single"
      collapsible={false}
      className={cn("w-full", className)}
    >
      {fields.map((tag, idx) => (
        <AccordionItem key={tag} value={`item-${idx}`}>
          <AccordionTrigger className="text-3xl [&[data-state=open]>svg]:hidden">
            {research[tag].title}
          </AccordionTrigger>
          <AccordionContent className="my-8 space-y-8">
            <p className="font-sans">{research[tag].description}</p>
            <div className="mt-4 flex flex-wrap gap-6">
              <BracketLink href={`/posts?tag=${tag}`}>
                View all posts
              </BracketLink>
              <BracketLink href={`/papers?tag=${tag}`}>
                View all papers
              </BracketLink>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default ResearchFieldsAccordion
