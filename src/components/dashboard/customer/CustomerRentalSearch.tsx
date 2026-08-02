"use client";

import { useEffect, useRef, useState } from "react";
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
  const [inputValue, setInputValue] = useState(value);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Keep local state synced if parent changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onChange(newValue);
    }, 400);
  };

  return (
    <div className="relative w-full lg:max-w-xs">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        type="text"
        placeholder="Search rentals..."
        value={inputValue}
        onChange={handleInputChange}
        className="pl-9"
      />
    </div>
  );
}