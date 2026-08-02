"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CustomerRentalSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomerRentalSearch({
  value,
  onChange,
}: CustomerRentalSearchProps) {
  return (
    <div className="relative w-full lg:max-w-xs">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        type="text"
        placeholder="Search rentals..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="pl-9"
      />
    </div>
  );
}