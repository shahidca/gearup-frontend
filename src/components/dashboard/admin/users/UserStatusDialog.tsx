"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUpdateAdminUserStatus } from "@/hooks/useAdminUsers";

interface UserStatusDialogProps {
  user: {
    id: string;
    name?: string;
    status?: string;
  };
  currentStatus?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function UserStatusDialog({
  user,
  currentStatus,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: UserStatusDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setOpen = controlledOnOpenChange ?? setUncontrolledOpen;

  const { mutate, isPending } = useUpdateAdminUserStatus();

  const activeStatus = currentStatus ?? user.status ?? "ACTIVE";

  const nextStatus =
    activeStatus === "ACTIVE"
      ? "SUSPENDED"
      : "ACTIVE";

  const handleConfirm = () => {
    mutate(
      {
        id: user.id,
        status: nextStatus,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setOpen}
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
            <strong>{user.name ?? "this user"}</strong>?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isPending}
          >
            Cancel
          </Button>

          <Button
            variant={nextStatus === "SUSPENDED" ? "destructive" : "default"}
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