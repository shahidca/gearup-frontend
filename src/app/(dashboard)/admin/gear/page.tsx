"use client";

import { Badge } from "@/components/ui/badge";
import { useAdminRentals } from "@/hooks/useAdmin";

export default function AdminRentalsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useAdminRentals();

  if (isLoading) {
    return (
      <div className="py-20">
        Loading rentals...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20">
        Failed to load rentals.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Rental Management
        </h1>

        <p className="text-muted-foreground">
          View all rental orders.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border">

        <table className="w-full">

          <thead className="bg-muted">

            <tr>

              <th className="p-4 text-left">
                Customer
              </th>

              <th>Gear</th>

              <th>Status</th>

              <th>Payment</th>

              <th>Total</th>

            </tr>

          </thead>

          <tbody>

            {data?.map((rental: any) => {

              const item = rental.rentalItems[0];

              return (

                <tr
                  key={rental.id}
                  className="border-b"
                >

                  <td className="p-4">
                    {rental.customer.name}
                  </td>

                  <td>
                    {item?.gearItem.name}
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

                  <td>
                    $
                    {Number(
                      rental.totalAmount
                    ).toFixed(2)}
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