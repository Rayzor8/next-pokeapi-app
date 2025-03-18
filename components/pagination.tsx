"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type PaginationProps ={
  currentPage: number
  totalPages: number
  onPrevPage: () => void
  onNextPage: () => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPrevPage, onNextPage, className = "" }: PaginationProps) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <Button onClick={onPrevPage} disabled={currentPage === 1} variant="outline" className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <span className="text-sm  dark:text-white font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        variant="outline"
        className="flex items-center gap-2"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}