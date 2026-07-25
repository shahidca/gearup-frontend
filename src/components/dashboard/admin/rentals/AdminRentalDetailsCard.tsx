"use client";

import { Badge } from "@/components/ui/badge";

interface Props {
  rental: any;
}

export default function AdminRentalDetailsCard({
  rental,
}: Props) {
  return (
    <section className="rounded-2xl border bg-card p-8">

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Customer */}

        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Customer
          </h3>

          <div className="space-y-3">

            <div>

              <p className="text-sm text-muted-foreground">
                Name
              </p>

              <p className="font-medium">
                {rental.customer.name}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Email
              </p>

              <p className="font-medium">
                {rental.customer.email}
              </p>

            </div>

          </div>

        </div>

        {/* Rental */}

        <div>

          <h3 className="mb-5 text-xl font-semibold">
            Rental Information
          </h3>

          <div className="space-y-3">

            <div>

              <p className="text-sm text-muted-foreground">
                Rental Status
              </p>

              <Badge>
                {rental.status}
              </Badge>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Payment
              </p>

              <Badge
                variant={
                  rental.payment
                    ? "default"
                    : "secondary"
                }
              >
                {rental.payment?.status ??
                  "UNPAID"}
              </Badge>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Total Amount
              </p>

              <p className="font-medium">
                ৳{rental.totalAmount}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Rental Start
              </p>

              <p className="font-medium">
                {new Date(
                  rental.startDate
                ).toLocaleDateString()}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Rental End
              </p>

              <p className="font-medium">
                {new Date(
                  rental.endDate
                ).toLocaleDateString()}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Gear */}

      <div className="mt-10">

        <h3 className="mb-5 text-xl font-semibold">
          Gear Items
        </h3>

        <div className="space-y-4">

          {rental.rentalItems.map(
            (item: any) => (
              <div
                key={item.id}
                className="rounded-xl border p-4"
              >

                <p className="font-semibold">
                  {item.gearItem.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  Quantity: {item.quantity}
                </p>

                <p className="text-sm text-muted-foreground">
                  Daily Price: ৳
                  {item.pricePerDay}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}