"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUpdateProviderOrder } from "@/hooks/useProviderOrders";

interface UpdateStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: any;
}

export default function UpdateStatusDialog({
  open,
  onOpenChange,
  order,
}: UpdateStatusDialogProps) {
  const { mutate, isPending } =
    useUpdateProviderOrder();

  const getNextStatus = () => {
    switch (order.status) {
      case "PLACED":
        return "CONFIRMED";

      case "CONFIRMED":
        return "PICKED_UP";

      case "PICKED_UP":
        return "RETURNED";

      default:
        return null;
    }
  };

  const nextStatus = getNextStatus();

  const handleUpdate = () => {
    if (!nextStatus) return;

    mutate(
      {
        id: order.id,
        status: nextStatus,
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Update Rental Status
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p>
            Current Status:
          </p>

          <div className="rounded-lg border p-3 font-semibold">
            {order.status}
          </div>

          {nextStatus ? (
            <>
              <p>
                Next Status:
              </p>

              <div className="rounded-lg border bg-primary/10 p-3 font-semibold text-primary">
                {nextStatus}
              </div>
            </>
          ) : (
            <div className="rounded-lg border bg-muted p-3">
              This order cannot be updated.
            </div>
          )}
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
            disabled={
              !nextStatus ||
              isPending
            }
            onClick={handleUpdate}
          >
            {isPending
              ? "Updating..."
              : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}