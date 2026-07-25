"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface AdminGearFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function AdminGearFilters({
  searchTerm,
  setSearchTerm,
}: AdminGearFiltersProps) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search gear..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>
    </div>
  );
}