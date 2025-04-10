"use client"

import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from "@/components/ui/pagination"

type PaginateProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Paginate({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginateProps) {
  if (totalPages <= 1) return null

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    // Calculate range around current page (show up to 2 pages before and after)
    const rangeStart = Math.max(2, currentPage - 1)
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1)

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push("ellipsis-start")
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push("ellipsis-end")
    }

    // Add last page if it's not already included
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = generatePageNumbers()

  // Handle page click without scroll/navigation
  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault()
    if (page !== currentPage) {
      onPageChange(page)
    }
  }

  return (
    <Pagination className={className}>
      <PaginationPrevious
        href="#"
        className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
        onClick={(e) => handlePageClick(e, currentPage - 1)}
      />
      <PaginationContent>
        {pageNumbers.map((page, i) =>
          page === "ellipsis-start" || page === "ellipsis-end" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => handlePageClick(e, page as number)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
      </PaginationContent>
      <PaginationNext
        href="#"
        className={
          currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
        }
        onClick={(e) => handlePageClick(e, currentPage + 1)}
      />
    </Pagination>
  )
}
