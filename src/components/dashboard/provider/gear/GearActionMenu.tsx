"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { TGear } from "@/types/gear";

import GearDetailsDialog from "./GearDetailsDialog";
import EditGearDialog from "../../components/dashboard/provider/gear/EditGearDialog";
import DeleteGearDialog from "../../components/dashboard/provider/gear/DeleteGearDialog";

interface GearActionMenuProps {
  gear: TGear;
}

export default function GearActionMenu({
  gear,
}: GearActionMenuProps) {
  const [viewOpen, setViewOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
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
            setEditOpen(true)
          }
        >
          Edit
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() =>
            setDeleteOpen(true)
          }
        >
          Delete
        </Button>
      </div>

      <GearDetailsDialog
        open={viewOpen}
        onOpenChange={setViewOpen}
        gear={gear}
      />

      <EditGearDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        gear={gear}
      />

      <DeleteGearDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        gear={gear}
      />
    </>
  );
}