"use client";

import { Input } from "@/components/ui/input";

interface GearSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GearSearch({
  value,
  onChange,
}: GearSearchProps) {
  return (
    <Input
      placeholder="Search gear..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="max-w-md"
    />
  );
}