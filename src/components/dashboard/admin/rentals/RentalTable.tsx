"use client";

import type { TRental } from "@/types/rental";

import RentalTableRow from "./RentalTableRow";

interface RentalTableProps {
  rentals: TRental[];
}

export default function RentalTable({
  rentals,
}: RentalTableProps) {
  if (!rentals?.length) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center">
        <h3 className="text-lg font-semibold">
          No rentals found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          There are no rental orders to display.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">

      <table className="w-full min-w-[1100px]">

        {/* ================= Header ================= */}

        <thead className="border-b bg-muted/40">

          <tr>

            <th className="px-4 py-4 text-left font-semibold">
              Customer
            </th>

            <th className="px-4 py-4 text-left font-semibold">
              Gear
            </th>

            <th className="px-4 py-4 text-left font-semibold">
              Rental Date
            </th>

            <th className="px-4 py-4 text-left font-semibold">
              Total
            </th>

            <th className="px-4 py-4 text-left font-semibold">
              Payment
            </th>

            <th className="px-4 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-4 py-4 text-right font-semibold">
              Actions
            </th>

          </tr>

        </thead>

        {/* ================= Body ================= */}

        <tbody>

          {rentals.map((rental) => (
            <RentalTableRow
              key={rental.id}
              rental={rental}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}