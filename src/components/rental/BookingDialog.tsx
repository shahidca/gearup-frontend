"use client";

import Image from "next/image";

import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useCreateRental } from "@/hooks/useRental";
import type { Gear } from "@/services/gear.service";

interface BookingDialogProps {
      open: boolean;
      onOpenChange: (open: boolean) => void;

      gear: Gear;

      startDate: string;
      endDate: string;

      quantity: number;

      total: number;
}

export default function BookingDialog({
      open,
      onOpenChange,
      gear,
      startDate,
      endDate,
      quantity,
      total,
}: BookingDialogProps) {
      const days =
            startDate && endDate
                  ? Math.max(
                        1,
                        Math.ceil(
                              (new Date(endDate).getTime() -
                                    new Date(startDate).getTime()) /
                              (1000 * 60 * 60 * 24)
                        )
                  )
                  : 1;
      const { mutate, isPending } = useCreateRental();

      return (

            <Dialog open={open} onOpenChange={onOpenChange}>
                  <DialogContent className="sm:max-w-xl">

                        <DialogHeader>
                              <DialogTitle>
                                    Confirm Your Booking
                              </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6">

                              <div className="flex gap-4">

                                    <div className="relative h-28 w-32 overflow-hidden rounded-xl">

                                          <Image
                                                src={
                                                      gear.images?.[0] ||
                                                      "https://placehold.co/600x400"
                                                }
                                                alt={gear.name}
                                                fill
                                                className="object-cover"
                                          />

                                    </div>

                                    <div>

                                          <h3 className="text-lg font-bold">
                                                {gear.name}
                                          </h3>

                                          <p className="text-muted-foreground">
                                                {gear.category.name}
                                          </p>

                                    </div>

                              </div>

                              <div className="grid grid-cols-2 gap-4 rounded-xl border p-4">

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Start
                                          </p>

                                          <p>{startDate || "-"}</p>
                                    </div>

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Return
                                          </p>

                                          <p>{endDate || "-"}</p>
                                    </div>

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Days
                                          </p>

                                          <p>{days}</p>
                                    </div>

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Quantity
                                          </p>

                                          <p>{quantity}</p>
                                    </div>

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Price / Day
                                          </p>

                                          <p>${gear.pricePerDay}</p>
                                    </div>

                                    <div>
                                          <p className="text-sm text-muted-foreground">
                                                Total
                                          </p>

                                          <p className="font-bold text-primary">
                                                ${total.toFixed(2)}
                                          </p>
                                    </div>

                              </div>

                        </div>

                        <DialogFooter>

                              <Button
                                    variant="outline"
                                    onClick={() =>
                                          onOpenChange(false)
                                    }
                              >
                                    Cancel
                              </Button>

                              <Button
                                    disabled={isPending}
                                    onClick={() => {
                                          mutate({
                                                startDate: new Date(startDate).toISOString(),
                                                endDate: new Date(endDate).toISOString(),

                                                items: [
                                                      {
                                                            gearItemId: gear.id,
                                                            quantity,
                                                      },
                                                ],
                                          });
                                    }}
                              >
                                    {isPending
                                          ? "Creating Rental..."
                                          : "Continue"}
                              </Button>

                        </DialogFooter>

                  </DialogContent>
            </Dialog>
      );
}