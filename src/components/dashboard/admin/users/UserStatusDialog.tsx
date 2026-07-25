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
    name: string;
    status: string;
  };
}

export default function UserStatusDialog({
  user,
}: UserStatusDialogProps) {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } =
    useUpdateAdminUserStatus();

  const nextStatus =
    user.status === "ACTIVE"
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
    <>
      <Button
        variant={
          user.status === "ACTIVE"
            ? "destructive"
            : "default"
        }
        size="sm"
        onClick={() => setOpen(true)}
      >
        {user.status === "ACTIVE"
          ? "Suspend"
          : "Activate"}
      </Button>

      <Dialog
        open={open}
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
              <strong>{user.name}</strong>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={handleConfirm}
              disabled={isPending}
            >
              {isPending
                ? "Please wait..."
                : nextStatus ===
                  "SUSPENDED"
                ? "Suspend"
                : "Activate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}