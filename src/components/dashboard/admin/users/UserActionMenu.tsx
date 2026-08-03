"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import UserDetailsDialog from "./UserDetailsDialog";
import UserStatusDialog from "./UserStatusDialog";

interface UserActionMenuProps {
  user: {
    id: string;
    status: string;
    name?: string;
    email?: string;
  };
}

export default function UserActionMenu({
  user,
}: UserActionMenuProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setDetailsOpen(true)}
        >
          View
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={() => setStatusDialogOpen(true)}
        >
          {user.status === "ACTIVE" ? "Suspend" : "Activate"}
        </Button>
      </div>

      <UserDetailsDialog
        userId={user.id}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />

      <UserStatusDialog
        user={user}
        currentStatus={user.status}
        open={statusDialogOpen}
        onOpenChange={setStatusDialogOpen}
      />
    </>
  );
}