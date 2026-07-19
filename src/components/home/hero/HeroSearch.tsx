"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularSearches = [
  "Camping",
  "Hiking",
  "Cycling",
  "DSLR",
  "Kayaking",
];

export default function HeroSearch() {
  return (
    <div className="space-y-4">
      {/* Search Box */}
      <div className="flex flex-col gap-3 rounded-2xl border bg-background/80 p-3 shadow-xl backdrop-blur-lg sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search camping gear, DSLR, hiking equipment..."
            className="h-12 border-0 bg-transparent pl-12 shadow-none focus-visible:ring-0"
          />
        </div>

        <Button size="lg" className="h-12 px-8">
          Search
        </Button>
      </div>

      {/* Popular */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-medium text-muted-foreground">
          Popular:
        </span>

        {popularSearches.map((item) => (
          <button
            key={item}
            className="rounded-full bg-primary/10 px-3 py-1 transition hover:bg-primary hover:text-primary-foreground"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}