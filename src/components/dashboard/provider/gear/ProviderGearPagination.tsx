"use client";

import { Button } from "@/components/ui/button";

interface ProviderGearPaginationProps {
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };

  page: number;

  setPage: (page: number) => void;
}

export default function ProviderGearPagination({
  meta,
  page,
  setPage,
}: ProviderGearPaginationProps) {
  if (!meta || meta.totalPage <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between border-t p-6">

      <p className="text-sm text-muted-foreground">
        Page {meta.page} of {meta.totalPage}
      </p>

      <div className="flex gap-3">

        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </Button>

        <Button
          variant="outline"
          disabled={page >= meta.totalPage}
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </Button>

      </div>

    </div>
  );
}