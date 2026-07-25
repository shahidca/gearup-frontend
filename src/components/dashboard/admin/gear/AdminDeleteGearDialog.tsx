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

import { useDeleteAdminGear } from "@/hooks/useAdminGear";

interface AdminDeleteGearDialogProps {
  gear: {
    id: string;
    name: string;
  };
}

export default function AdminDeleteGearDialog({
  gear,
}: AdminDeleteGearDialogProps) {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } =
  useDeleteAdminGear();

  const handleDelete = () => {
    mutate(gear.id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Delete Gear
            </DialogTitle>

            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{gear.name}</strong>?
              <br />
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending
                ? "Deleting..."
                : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}