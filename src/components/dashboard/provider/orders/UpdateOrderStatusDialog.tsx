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

  const nextStatus = useMemo(() => {
    switch (currentStatus) {
      case "PLACED":
        return "CONFIRMED";

      case "CONFIRMED":
        return "PICKED_UP";

      case "PICKED_UP":
        return "RETURNED";

      case "RETURNED":
      case "CANCELLED":
      default:
        return null;
    }
  }, [currentStatus]);

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Update Rental Status
          </DialogTitle>
        </DialogHeader>

        {!nextStatus ? (
          <div className="rounded-lg border bg-muted p-5">
            <p className="font-medium">
              This rental order cannot be updated anymore.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Current Status:
              <span className="ml-2 font-semibold text-foreground">
                {currentStatus}
              </span>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Current Status
              </p>

              <p className="font-semibold">
                {currentStatus}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Next Status
              </p>

              <p className="font-semibold text-primary">
                {nextStatus}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Are you sure you want to update the rental status?
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