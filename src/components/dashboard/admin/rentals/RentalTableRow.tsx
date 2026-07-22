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
  return (
    <tr className="border-b hover:bg-muted/40 transition-colors">
      <td className="px-4 py-4">
        <div>
          <p className="font-medium">
            {rental.customer.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {rental.customer.email}
          </p>
        </div>
      </td>

      <td className="px-4 py-4">
        {rental.rentalItems
          .map((item) => item.gearItem.name)
          .join(", ")}
      </td>

      <td className="px-4 py-4">
        {new Date(
          rental.startDate
        ).toLocaleDateString()}
      </td>

      <td className="px-4 py-4">
        ৳{rental.totalAmount}
      </td>

      <td className="px-4 py-4">
        <Badge variant="outline">
          {rental.payment?.status ??
            "UNPAID"}
        </Badge>
      </td>

      <td className="px-4 py-4">
        <Badge>
          {rental.status}
        </Badge>
      </td>

      <td className="px-4 py-4 text-right">
        <RentalActionMenu
          rental={rental}
        />
      </td>
    </tr>
  );
}