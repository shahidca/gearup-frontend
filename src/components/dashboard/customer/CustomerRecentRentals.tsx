"use client";

import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  CreditCard,
  Package,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CustomerRecentRentalsProps {
  rentals: any[];
}

export default function CustomerRecentRentals({
  rentals,
}: CustomerRecentRentalsProps) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Rentals
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your latest rental activity.
          </p>

        </div>

        <Link href="/customer/rentals">
          <Button
            variant="outline"
            size="sm"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

      </div>

      {/* Empty State */}

      {rentals.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-16 text-center">

          <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

          <h3 className="text-lg font-semibold">
            No Rentals Yet
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Your rental history will appear here.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {rentals.map((rental: any) => (

            <div
              key={rental.id}
              className="
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-muted/40
                hover:shadow-md
              "
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Package className="h-5 w-5" />
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {rental.rentalItems?.[0]?.gearItem?.name ??
                          "Rental Item"}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Rental Order
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">

                    <Calendar className="h-4 w-4" />

                    {new Date(
                      rental.startDate
                    ).toLocaleDateString()}
                    {" "}
                    -
                    {" "}
                    {new Date(
                      rental.endDate
                    ).toLocaleDateString()}

                  </div>

                </div>

                {/* Right */}

                <div className="space-y-4 text-left lg:text-right">

                  <div className="flex flex-wrap justify-start gap-2 lg:justify-end">

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

                  <div className="flex items-center gap-2 font-semibold lg:justify-end">

                    <CreditCard className="h-4 w-4 text-primary" />

                    ৳
                    {Number(
                      rental.totalAmount
                    ).toLocaleString()}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}