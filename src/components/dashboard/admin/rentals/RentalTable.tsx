"use client";

import type { TRental } from "@/types/rental";

import RentalTableRow from "./RentalTableRow";

interface RentalTableProps {
  rentals: TRental[];
}

export default function RentalTable({
  rentals,
}: RentalTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">
                Customer
              </th>

              <th className="px-4 py-3 text-left">
                Gear
              </th>

              <th className="px-4 py-3 text-left">
                Rental Date
              </th>

              <th className="px-4 py-3 text-left">
                Total
              </th>

              <th className="px-4 py-3 text-left">
                Payment
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>

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
    </div>
  );
}