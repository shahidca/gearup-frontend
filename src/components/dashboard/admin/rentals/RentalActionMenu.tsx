"use client";

import { useState } from "react";

import {
  Eye,
  Pencil,
} from "lucide-react";

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

  const canUpdate =
    rental.status !== "RETURNED" &&
    rental.status !== "CANCELLED";

  return (
    <>
      {/* ================= Actions ================= */}

      <div className="flex justify-end gap-2">

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setViewOpen(true)
          }
        >
          <Eye className="mr-2 h-4 w-4" />
          View
        </Button>

        <Button
          size="sm"
          disabled={!canUpdate}
          onClick={() =>
            setStatusOpen(true)
          }
        >
          <Pencil className="mr-2 h-4 w-4" />
          Update
        </Button>

      </div>

      {/* ================= Details Dialog ================= */}

      <RentalDetailsDialog
        open={viewOpen}
        onOpenChange={setViewOpen}
        rental={rental}
      />

      {/* ================= Status Dialog ================= */}

      <UpdateRentalStatusDialog
        open={statusOpen}
        onOpenChange={setStatusOpen}
        rental={rental}
      />
    </>
  );
}