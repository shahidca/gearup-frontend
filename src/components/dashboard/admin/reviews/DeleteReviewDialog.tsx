"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useDeleteReview } from "@/hooks/useAdminReviews";

interface DeleteReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reviewId: string;
}

export default function DeleteReviewDialog({
  open,
  onOpenChange,
  reviewId,
}: DeleteReviewDialogProps) {
  const { mutate, isPending } =
    useDeleteReview();

  const handleDelete = () => {
    mutate(reviewId, {
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
            Delete Review
          </DialogTitle>

          <DialogDescription>
            Are you sure you want to permanently
            delete this review?
          </DialogDescription>

        </DialogHeader>

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
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending
              ? "Deleting..."
              : "Delete Review"}
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}