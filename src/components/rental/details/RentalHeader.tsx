"use client";

import { Badge } from "@/components/ui/badge";

interface RentalHeaderProps {
  rental: any;
}

export default function RentalHeader({
  rental,
}: RentalHeaderProps) {
  const getRentalBadge = () => {
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

  const getPaymentBadge = () => {
    switch (rental.payment?.status) {
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
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Rental Details
          </h1>

          <p className="mt-1 text-muted-foreground">
            Rental ID: {rental.id}
          </p>
        </div>

        <div className="flex gap-3">

          <Badge className={getRentalBadge()}>
            {rental.status}
          </Badge>

          <Badge className={getPaymentBadge()}>
            {rental.payment?.status ?? "NOT PAID"}
          </Badge>

        </div>

      </div>

    </div>
  );
}