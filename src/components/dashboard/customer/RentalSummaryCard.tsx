"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RentalSummaryCardProps {
  rental: any;
}

export default function RentalSummaryCard({
  rental,
}: RentalSummaryCardProps) {
  const item = rental.rentalItems?.[0];
  const gear = item?.gearItem;
  const provider = gear?.provider;
  const payment = rental.payment;

  const rentalBadge = () => {
    switch (rental.status) {
      case "PLACED":
        return "bg-yellow-500";
      case "CONFIRMED":
        return "bg-blue-600";
      case "PAID":
        return "bg-cyan-600";
      case "PICKED_UP":
        return "bg-purple-600";
      case "RETURNED":
        return "bg-green-600";
      case "CANCELLED":
        return "bg-red-600";
      default:
        return "";
    }
  };

  const paymentBadge = () => {
    switch (payment?.status) {
      case "COMPLETED":
        return "bg-green-600";
      case "PENDING":
        return "bg-yellow-500";
      case "FAILED":
        return "bg-red-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">

      <div className="grid gap-8 p-6 lg:grid-cols-3">

        {/* Image */}

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={
              gear?.images?.[0] ??
              "https://placehold.co/700x500"
            }
            alt={gear?.name ?? "Gear"}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}

        <div className="space-y-5 lg:col-span-2">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <h2 className="text-3xl font-bold">
              {gear?.name}
            </h2>

            <Badge className={rentalBadge()}>
              {rental.status}
            </Badge>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <p className="text-sm text-muted-foreground">
                Provider
              </p>

              <p className="font-medium">
                {provider?.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Quantity
              </p>

              <p className="font-medium">
                {item?.quantity}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Start Date
              </p>

              <p className="font-medium">
                {new Date(
                  rental.startDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Return Date
              </p>

              <p className="font-medium">
                {new Date(
                  rental.endDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Amount
              </p>

              <p className="text-2xl font-bold text-primary">
                ৳
                {Number(
                  rental.totalAmount
                ).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Payment Status
              </p>

              <Badge className={paymentBadge()}>
                {payment?.status ?? "NOT PAID"}
              </Badge>
            </div>

          </div>

          <div className="flex flex-wrap gap-4 pt-4">

            {rental.status === "CONFIRMED" &&
              payment?.status !== "COMPLETED" && (
                <Link
                  href={`/customer/payment/${rental.id}`}
                >
                  <Button size="lg">
                    Pay Now
                  </Button>
                </Link>
              )}

            {rental.status === "PLACED" && (
              <Button
                variant="destructive"
              >
                Cancel Rental
              </Button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}