"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomerPaymentFiltersProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string | null) => void;
}

export default function CustomerPaymentFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: CustomerPaymentFiltersProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border bg-card p-6 md:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search payments..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Status Filter */}
      <div className="w-full md:w-56">
        <Select
          value={status}
          onValueChange={(value) => onStatusChange(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Payments</SelectItem>

            <SelectItem value="COMPLETED">
              Completed
            </SelectItem>

            <SelectItem value="PENDING">
              Pending
            </SelectItem>

            <SelectItem value="FAILED">
              Failed
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}