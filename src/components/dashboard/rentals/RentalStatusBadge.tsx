"use client";

import { Badge } from "@/components/ui/badge";

type RentalStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED";

interface Props {
  status: RentalStatus;
}

export default function RentalStatusBadge({
  status,
}: Props) {
  switch (status) {
    case "PLACED":
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
        >
          Pending
        </Badge>
      );

    case "CONFIRMED":
      return (
        <Badge
          variant="secondary"
          className="bg-blue-100 text-blue-700 hover:bg-blue-100"
        >
          Confirmed
        </Badge>
      );

    case "PAID":
      return (
        <Badge
          variant="secondary"
          className="bg-green-100 text-green-700 hover:bg-green-100"
        >
          Paid
        </Badge>
      );

    case "PICKED_UP":
      return (
        <Badge
          variant="secondary"
          className="bg-purple-100 text-purple-700 hover:bg-purple-100"
        >
          Picked Up
        </Badge>
      );

    case "RETURNED":
      return (
        <Badge
          variant="secondary"
          className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
        >
          Returned
        </Badge>
      );

    case "CANCELLED":
      return (
        <Badge
          variant="destructive"
        >
          Cancelled
        </Badge>
      );

    default:
      return (
        <Badge variant="outline">
          Unknown
        </Badge>
      );
  }
}