"use client";

import { useMemo } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUpdateProviderOrder } from "@/hooks/useProviderOrders";

interface UpdateOrderStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  orderId: string;
  currentStatus: string;
}

export default function UpdateOrderStatusDialog({
  open,
  onOpenChange,
  orderId,
  currentStatus,
}: UpdateOrderStatusDialogProps) {
  const { mutate, isPending } =
    useUpdateProviderOrder();

  /* ===============================
     Next Status
  =============================== */

  const nextStatus = useMemo(() => {
    switch (currentStatus) {
      case "PLACED":
        return "CONFIRMED";

      case "CONFIRMED":
        return "PICKED_UP";

      case "PICKED_UP":
        return "RETURNED";

      default:
        return null;
    }
  }, [currentStatus]);

  /* ===============================
     Update Status
  =============================== */

  const handleUpdate = () => {
    if (!nextStatus) return;

    mutate(
      {
        id: orderId,
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

        {!nextStatus ? (
          <div className="rounded-lg border bg-muted p-4 text-center">

            <p className="font-medium">
              This order cannot be updated anymore.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Current Status:
              {" "}
              <strong>{currentStatus}</strong>
            </p>

          </div>
        ) : (
          <div className="space-y-4">

            <p>
              Current Status:
              {" "}
              <strong>{currentStatus}</strong>
            </p>

            <p>
              Next Status:
              {" "}
              <strong className="text-primary">
                {nextStatus}
              </strong>
            </p>

            <p className="text-sm text-muted-foreground">
              Are you sure you want to update this rental
              status?
            </p>

          </div>
        )}

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          {nextStatus && (
            <Button
              onClick={handleUpdate}
              disabled={isPending}
            >
              {isPending
                ? "Updating..."
                : `Mark as ${nextStatus}`}
            </Button>
          )}

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}