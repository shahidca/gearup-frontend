"use client";

import Link from "next/link";
import Image from "next/image";

import type { Gear } from "@/services/gear.service";

interface GearGridProps {
  gear: Gear[];
}

export default function GearGrid({
  gear,
}: GearGridProps) {
  if (gear.length === 0) {
    return (
      <div className="rounded-2xl border py-20 text-center">
        <h2 className="text-xl font-semibold">
          No gear found
        </h2>

        <p className="mt-2 text-muted-foreground">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gear.map((item) => (
        <Link
          key={item.id}
          href={`/gear/${item.id}`}
          className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={
                item.images?.[0] ??
                "https://placehold.co/600x400"
              }
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.category.name}
              </span>

              <span className="text-xs text-muted-foreground">
                {item.condition}
              </span>
            </div>

            <h3 className="line-clamp-1 text-lg font-bold">
              {item.name}
            </h3>

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {item.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xl font-bold text-primary">
                  £{item.pricePerDay}
                </p>

                <p className="text-xs text-muted-foreground">
                  per day
                </p>
              </div>

              <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {item.availableStock} Available
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}