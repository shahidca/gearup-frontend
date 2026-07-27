"use client";

import Link from "next/link";

import { PackageOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EmptyRentals() {
  return (
    <div className="rounded-2xl border border-dashed py-20 text-center">
      <PackageOpen className="mx-auto mb-5 h-14 w-14 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        No Rentals Found
      </h2>

      <p className="mt-3 text-muted-foreground">
        You haven't rented any gear yet.
      </p>

      <Link href="/gear">
        <Button className="mt-6">
          Browse Gear
        </Button>
      </Link>
    </div>
  );
}