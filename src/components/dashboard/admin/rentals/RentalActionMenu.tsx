"use client";

import { useState } from "react";

import type { TRental } from "@/types/rental";

import { Button } from "@/components/ui/button";

import RentalDetailsDialog from "./RentalDetailsDialog";
import UpdateRentalStatusDialog from "./UpdateRentalStatusDialog";

interface RentalActionMenuProps {
  rental: TRental;
}

export default function RentalActionMenu({
  rental,
}: RentalActionMenuProps) {
  const [viewOpen, setViewOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);

  return (
    <>
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setViewOpen(true)
          }
        >
          View
        </Button>

        <Button
          size="sm"
          onClick={() =>
            setStatusOpen(true)
          }
        >
          Update
        </Button>
      </div>

      <RentalDetailsDialog
        open={viewOpen}
        onOpenChange={setViewOpen}
        rental={rental}
      />

      <UpdateRentalStatusDialog
        open={statusOpen}
        onOpenChange={setStatusOpen}
        rental={rental}
      />
    </>
  );
}