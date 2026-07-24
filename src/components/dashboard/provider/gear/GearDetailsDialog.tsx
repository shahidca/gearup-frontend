"use client";

import type { TGear } from "@/types/gear";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GearDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gear: TGear;
}

export default function GearDetailsDialog({
  open,
  onOpenChange,
  gear,
}: GearDetailsDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Gear Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">
              Name
            </p>
            <p>{gear.name}</p>
          </div>

          <div>
            <p className="font-semibold">
              Brand
            </p>
            <p>{gear.brand ?? "-"}</p>
          </div>

          <div>
            <p className="font-semibold">
              Description
            </p>
            <p>{gear.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">
                Price / Day
              </p>

              <p>৳{gear.pricePerDay}</p>
            </div>

            <div>
              <p className="font-semibold">
                Condition
              </p>

              <p>{gear.condition}</p>
            </div>

            <div>
              <p className="font-semibold">
                Stock
              </p>

              <p>{gear.stock}</p>
            </div>

            <div>
              <p className="font-semibold">
                Available
              </p>

              <p>{gear.availableStock}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}