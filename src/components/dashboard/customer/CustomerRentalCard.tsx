"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CustomerRentalCardProps {
  rental: any;
}

export default function CustomerRentalCard({
  rental,
}: CustomerRentalCardProps) {
  const item = rental.rentalItems?.[0];
  const gear = item?.gearItem;
  const provider = gear?.provider;

  const rentalStatusColor = () => {
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
      default:
        return "bg-red-600";
    }
  };

  const paymentStatusColor = () => {
    switch (rental.payment?.status) {
      case "COMPLETED":
        return "bg-green-600";
      case "PENDING":
        return "bg-yellow-500";
      default:
        return "bg-red-600";
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg">
      <div className="relative h-56 bg-muted">
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

      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-1 text-xl font-bold">
            {gear?.name}
          </h2>

          <Badge className={rentalStatusColor()}>
            {rental.status}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Provider:</strong>{" "}
            {provider?.name}
          </p>

          <p>
            <strong>Rental Days:</strong>{" "}
            {item?.totalDays}
          </p>

          <p>
            <strong>Quantity:</strong>{" "}
            {item?.quantity}
          </p>

          <p>
            <strong>Total:</strong> ৳
            {Number(rental.totalAmount).toLocaleString()}
          </p>

          <div className="flex items-center gap-2">
            <strong>Payment:</strong>

            <Badge className={paymentStatusColor()}>
              {rental.payment?.status ?? "NOT PAID"}
            </Badge>
          </div>
        </div>

        <Link href={`/customer/rentals/${rental.id}`}>
          <Button
            className="w-full"
            variant="outline"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}