"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPage,
  onPageChange,
}: PaginationProps) {
  if (totalPage <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 pt-6">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Previous
      </Button>

      {Array.from(
        { length: totalPage },
        (_, index) => (
          <Button
            key={index + 1}
            variant={
              currentPage === index + 1
                ? "default"
                : "outline"
            }
            onClick={() =>
              onPageChange(index + 1)
            }
          >
            {index + 1}
          </Button>
        )
      )}

      <Button
        variant="outline"
        disabled={currentPage === totalPage}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </Button>
    </div>
  );
}