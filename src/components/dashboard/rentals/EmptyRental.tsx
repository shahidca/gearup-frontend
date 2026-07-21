"use client";

import Link from "next/link";
import { PackageOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EmptyRental() {
      return (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed bg-card p-10 text-center">

                  <PackageOpen className="mb-6 h-20 w-20 text-muted-foreground" />

                  <h2 className="text-2xl font-bold">
                        No Rentals Yet
                  </h2>

                  <p className="mt-3 max-w-md text-muted-foreground">
                        You haven't rented any gear yet.
                        Browse our collection and book your first adventure.
                  </p>

                  <Link href="/gear">
                        <Button className="mt-8">
                              Browse Gear
                        </Button>
                  </Link>

            </div>
      );
}