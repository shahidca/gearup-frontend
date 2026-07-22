"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUpdateUserStatus } from "@/hooks/useAdminUsers";

interface UserStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  userId: string;

  currentStatus: string;
}

export default function UserStatusDialog({
  open,
  onOpenChange,
  userId,
  currentStatus,
}: UserStatusDialogProps) {
  const { mutate, isPending } =
    useUpdateUserStatus();

  const nextStatus =
    currentStatus === "ACTIVE"
      ? "SUSPENDED"
      : "ACTIVE";

  const handleConfirm = () => {
    mutate(
      {
        userId,
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
            {nextStatus === "SUSPENDED"
              ? "Suspend User"
              : "Activate User"}
          </DialogTitle>

          <DialogDescription>
            Are you sure you want to{" "}
            <strong>
              {nextStatus.toLowerCase()}
            </strong>{" "}
            this user?
          </DialogDescription>

        </DialogHeader>

        <DialogFooter showCloseButton>

          <Button
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending
              ? "Please wait..."
              : nextStatus === "SUSPENDED"
              ? "Suspend"
              : "Activate"}
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}