"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useDeleteGear } from "@/hooks/useAdminGear";

interface DeleteGearDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gearId: string;
}

export default function DeleteGearDialog({
  open,
  onOpenChange,
  gearId,
}: DeleteGearDialogProps) {
  const { mutate, isPending } =
    useDeleteGear();

  const handleDelete = () => {
    mutate(gearId, {
      onSuccess: () => {
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Delete Gear
          </DialogTitle>
        </DialogHeader>

        <p className="text-muted-foreground">
          Are you sure you want to delete
          this gear? This action cannot be
          undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
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
        </div>
      </DialogContent>
    </Dialog>
  );
}