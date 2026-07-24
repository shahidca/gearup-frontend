"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type { TGear } from "@/types/gear";
import { useDeleteProviderGear } from "@/hooks/useProvider";

interface DeleteGearDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gear: TGear;
}

export default function DeleteGearDialog({
  open,
  onOpenChange,
  gear,
}: DeleteGearDialogProps) {
  const { mutate, isPending } =
    useDeleteProviderGear();

  const handleDelete = () => {
    mutate(gear.id, {
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
          Are you sure you want to delete{" "}
          <span className="font-semibold">
            {gear.name}
          </span>
          ?
        </p>

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
  );
}