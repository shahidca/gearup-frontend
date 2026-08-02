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
  const rentalId = rental.id || rental._id;

  const rentalStatusColor = () => {
    switch (rental.status) {
      case "PLACED":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "CONFIRMED":
        return "bg-blue-600 hover:bg-blue-700";
      case "PAID":
        return "bg-cyan-600 hover:bg-cyan-700";
      case "PICKED_UP":
        return "bg-purple-600 hover:bg-purple-700";
      case "RETURNED":
        return "bg-green-600 hover:bg-green-700";
      default:
        return "bg-red-600 hover:bg-red-700";
    }
  };

  const paymentStatusColor = () => {
    switch (rental.payment?.status) {
      case "COMPLETED":
      case "PAID":
        return "bg-green-600 hover:bg-green-700";
      case "PENDING":
        return "bg-yellow-500 hover:bg-yellow-600";
      default:
        return "bg-red-600 hover:bg-red-700";
    }
  };

  // Only allow payment if payment is incomplete AND rental isn't cancelled
  const canPayNow =
    rental.payment?.status !== "COMPLETED" &&
    rental.payment?.status !== "PAID" &&
    rental.status !== "CANCELLED";

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg">
      <div className="relative h-56 bg-muted">
        <Image
          src={gear?.images?.[0] ?? "https://placehold.co/700x500"}
          alt={gear?.name ?? "Gear"}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-1 text-xl font-bold">{gear?.name ?? "Gear Item"}</h2>
          <Badge className={rentalStatusColor()}>
            {rental.status?.replace("_", " ") ?? "UNKNOWN"}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Provider:</strong> {provider?.name ?? "N/A"}
          </p>
          <p>
            <strong>Rental Days:</strong> {item?.totalDays ?? 0}
          </p>
          <p>
            <strong>Quantity:</strong> {item?.quantity ?? 1}
          </p>
          <p>
            <strong>Total:</strong> ৳
            {Number(rental.totalAmount ?? 0).toLocaleString()}
          </p>

          <div className="flex items-center gap-2">
            <strong>Payment:</strong>
            <Badge className={paymentStatusColor()}>
              {rental.payment?.status ?? "NOT PAID"}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <Link href={`/customer/rentals/${rentalId}`} className="block w-full">
            <Button className="w-full" variant="outline">
              View Details
            </Button>
          </Link>

          {canPayNow && (
            <Link href={`/payment/${rentalId}`} className="block w-full">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Pay Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}