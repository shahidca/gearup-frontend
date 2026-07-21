"use client";

import { Badge } from "@/components/ui/badge";

interface RecentRentalsProps {
  rentals: any[];
}

export default function RecentRentals({
  rentals,
}: RecentRentalsProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Recent Rentals
        </h2>

        <Badge variant="outline">
          {rentals.length} Latest
        </Badge>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Customer
              </th>

              <th className="text-left">
                Gear
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-left">
                Payment
              </th>

              <th className="text-right">
                Amount
              </th>

            </tr>

          </thead>

          <tbody>

            {rentals.map((rental) => {

              const firstItem =
                rental.rentalItems?.[0];

              return (
                <tr
                  key={rental.id}
                  className="border-b transition hover:bg-muted/50"
                >

                  <td className="py-4">
                    {rental.customer.name}
                  </td>

                  <td>
                    {firstItem?.gearItem?.name}
                  </td>

                  <td>

                    <Badge>
                      {rental.status}
                    </Badge>

                  </td>

                  <td>

                    <Badge
                      variant={
                        rental.payment
                          ? "default"
                          : "secondary"
                      }
                    >
                      {rental.payment
                        ? rental.payment.status
                        : "UNPAID"}
                    </Badge>

                  </td>

                  <td className="text-right font-semibold">
                    ৳
                    {Number(
                      rental.totalAmount
                    ).toLocaleString()}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>
      </div>
    </div>
  );
}