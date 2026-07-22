"use client";

import { useState } from "react";

import type { TRental } from "@/types/rental";

import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select";

import { useUpdateRentalStatus } from "@/hooks/useAdminRentals";

interface UpdateRentalStatusDialogProps {
      open: boolean;
      onOpenChange: (open: boolean) => void;
      rental: TRental;
}

export default function UpdateRentalStatusDialog({
      open,
      onOpenChange,
      rental,
}: UpdateRentalStatusDialogProps) {
      const { mutate, isPending } =
            useUpdateRentalStatus();

      const [status, setStatus] =
            useState(rental.status);

      const handleUpdate = () => {
            mutate(
                  {
                        rentalId: rental.id,
                        status,
                  },
                  {
                        onSuccess: () => {
                              onOpenChange(false);
                        },
                  }
            );
      };

      return (
            <Dialog
                  open={open}
                  onOpenChange={onOpenChange}
            >
                  <DialogContent className="max-w-md">
                        <DialogHeader>
                              <DialogTitle>
                                    Update Rental Status
                              </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6">
                              <Select
                                    value={status}
                                    onValueChange={(value) =>
                                          setStatus(value ?? rental.status)
                                    }
                              >
                                    <SelectTrigger>
                                          <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>

                                    <SelectContent>
                                          <SelectItem value="PENDING">
                                                Pending
                                          </SelectItem>

                                          <SelectItem value="CONFIRMED">
                                                Confirmed
                                          </SelectItem>

                                          <SelectItem value="PAID">
                                                Paid
                                          </SelectItem>

                                          <SelectItem value="PICKED_UP">
                                                Picked Up
                                          </SelectItem>

                                          <SelectItem value="RETURNED">
                                                Returned
                                          </SelectItem>

                                          <SelectItem value="CANCELLED">
                                                Cancelled
                                          </SelectItem>
                                    </SelectContent>
                              </Select>

                              <div className="flex justify-end gap-3">
                                    <Button
                                          variant="outline"
                                          onClick={() =>
                                                onOpenChange(false)
                                          }
                                    >
                                          Cancel
                                    </Button>

                                    <Button
                                          onClick={handleUpdate}
                                          disabled={isPending}
                                    >
                                          {isPending
                                                ? "Updating..."
                                                : "Update Status"}
                                    </Button>
                              </div>
                        </div>
                  </DialogContent>
            </Dialog>
      );
}