"use client";

import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  CreditCard,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AdminRecentRentalsProps {
  rentals: any[];
}

export default function AdminRecentRentals({
  rentals,
}: AdminRecentRentalsProps) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Rentals
          </h2>

          <p className="text-sm text-muted-foreground">
            Latest rental activities across the platform.
          </p>

        </div>

        <Link href="/admin/rentals">
  <Button
    variant="outline"
    size="sm"
  >
    View All
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>

      </div>

      {rentals.length === 0 ? (
        <div className="rounded-xl border border-dashed py-12 text-center">

          <p className="text-muted-foreground">
            No recent rentals found.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                hover:border-primary/40
                hover:shadow-md
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">

                  {rental.customer?.name
                    ?.charAt(0)
                    ?.toUpperCase()}

                </div>

                <div>

                  <h3 className="font-semibold">
                    {rental.customer?.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {rental.rentalItems
                      ?.map(
                        (item: any) =>
                          item.gearItem?.name
                      )
                      .join(", ")}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">

                    <span className="flex items-center gap-1">

                      <Calendar className="h-4 w-4" />

                      {new Date(
                        rental.createdAt
                      ).toLocaleDateString()}

                    </span>

                    <span className="flex items-center gap-1">

                      <CreditCard className="h-4 w-4" />

                      ৳
                      {Number(
                        rental.payment?.amount ?? 0
                      ).toLocaleString()}

                    </span>

                  </div>

                </div>

              </div>

              <div className="flex flex-col items-start gap-2 lg:items-end">

                <Badge>
                  {rental.status}
                </Badge>

                <Badge
                  variant={
                    rental.payment
                      ? "default"
                      : "secondary"
                  }
                >
                  {rental.payment?.status ??
                    "UNPAID"}
                </Badge>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}