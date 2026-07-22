"use client";

import type { TRental } from "@/types/rental";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RentalDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rental: TRental;
}

export default function RentalDetailsDialog({
  open,
  onOpenChange,
  rental,
}: RentalDetailsDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Rental Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">
              Customer
            </h3>

            <p>{rental.customer.name}</p>

            <p className="text-muted-foreground">
              {rental.customer.email}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Gear
            </h3>

            <ul className="list-disc pl-5">
              {rental.rentalItems.map(
                (item) => (
                  <li key={item.id}>
                    {item.gearItem.name}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <p className="font-semibold">
                Start Date
              </p>

              <p>
                {new Date(
                  rental.startDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="font-semibold">
                End Date
              </p>

              <p>
                {new Date(
                  rental.endDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Total Amount
              </p>

              <p>
                ৳{rental.totalAmount}
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Payment
              </p>

              <p>
                {rental.payment?.status ??
                  "UNPAID"}
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Rental Status
              </p>

              <p>{rental.status}</p>
            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}