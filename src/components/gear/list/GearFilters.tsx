"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface GearFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;

  minPrice: string;
  setMinPrice: (value: string) => void;

  maxPrice: string;
  setMaxPrice: (value: string) => void;

  condition: string;
  setCondition: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function GearFilters({
  searchTerm,
  setSearchTerm,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  condition,
  setCondition,
  sortBy,
  setSortBy,
}: GearFiltersProps) {
  return (
    <div className="space-y-8">

      <div>
        <Label>Search</Label>

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search gear..."
          className="mt-2"
        />
      </div>

      <div>
        <Label>Condition</Label>

        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="mt-2 h-10 w-full rounded-md border bg-background px-3"
        >
          <option value="">All</option>
          <option value="NEW">New</option>
          <option value="LIKE_NEW">Like New</option>
          <option value="GOOD">Good</option>
          <option value="FAIR">Fair</option>
        </select>
      </div>

      <div>
        <Label>Minimum Price (£)</Label>

        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Maximum Price (£)</Label>

        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Sort By</Label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mt-2 h-10 w-full rounded-md border bg-background px-3"
        >
          <option value="">Newest</option>
          <option value="pricePerDay">Price</option>
          <option value="createdAt">Newest</option>
        </select>
      </div>

    </div>
  );
}