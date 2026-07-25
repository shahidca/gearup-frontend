"use client";

import { Input } from "@/components/ui/input";

interface ReviewFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function ReviewFilters({
  search,
  onSearchChange,
}: ReviewFiltersProps) {
  return (
    <Input
      value={search}
      placeholder="Search reviews..."
      onChange={(e) =>
        onSearchChange(e.target.value)
      }
    />
  );
}