"use client";

import type { TRental } from "@/types/rental";

import { Badge } from "@/components/ui/badge";

import RentalActionMenu from "./RentalActionMenu";

interface RentalTableRowProps {
  rental: TRental;
}

export default function RentalTableRow({
  rental,
}: RentalTableRowProps) {
  const paymentStatus =
    rental.payment?.status ?? "UNPAID";

  const rentalStatus = rental.status;

  return (
    <tr
      className="
        border-b
        transition-colors
        hover:bg-muted/40
      "
    >
      {/* ================= Customer ================= */}

      <td className="px-4 py-5">
        <div>
          <p className="font-medium">
            {rental.customer?.name ?? "-"}
          </p>

          <p className="text-sm text-muted-foreground">
            {rental.customer?.email ?? "-"}
          </p>
        </div>
      </td>

      {/* ================= Gear ================= */}

      <td className="px-4 py-5">
        {rental.rentalItems
          ?.map((item) => item.gearItem?.name)
          .join(", ") || "-"}
      </td>

      {/* ================= Rental Date ================= */}

      <td className="px-4 py-5">
        {new Date(
          rental.startDate
        ).toLocaleDateString()}
      </td>

      {/* ================= Total ================= */}

      <td className="px-4 py-5 font-medium">
        ৳
        {Number(
          rental.totalAmount ?? 0
        ).toLocaleString()}
      </td>

      {/* ================= Payment ================= */}

      <td className="px-4 py-5">
        <Badge
          variant={
            paymentStatus === "COMPLETED"
              ? "default"
              : paymentStatus === "PENDING"
              ? "secondary"
              : "destructive"
          }
        >
          {paymentStatus}
        </Badge>
      </td>

      {/* ================= Rental Status ================= */}

      <td className="px-4 py-5">
        <Badge
          variant={
            rentalStatus === "RETURNED"
              ? "default"
              : rentalStatus === "CANCELLED"
              ? "destructive"
              : "secondary"
          }
        >
          {rentalStatus}
        </Badge>
      </td>

      {/* ================= Actions ================= */}

      <td className="px-4 py-5 text-right">
        <RentalActionMenu
          rental={rental}
        />
      </td>
    </tr>
  );
}