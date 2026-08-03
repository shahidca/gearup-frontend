"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

import { useSingleAdminUser, useSingleUser } from "@/hooks/useAdminUsers";

interface UserDetailsDialogProps {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UserDetailsDialog({
  userId,
  open,
  onOpenChange,
}: UserDetailsDialogProps) {
  // Gracefully handles whichever hook name is exported in useAdminUsers.ts
  const hookFn = useSingleUser ?? useSingleAdminUser;
  const { data: response, isLoading } = hookFn(userId);

  // Unwraps response if nested under data property from API standard response
  const user = response?.data ?? response;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            User Details
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : user ? (
          <div className="space-y-5">
            <div>
              <p className="text-sm text-muted-foreground">
                Name
              </p>
              <h3 className="font-semibold">
                {user.name ?? "N/A"}
              </h3>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Email
              </p>
              <h3>{user.email ?? "N/A"}</h3>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Phone
              </p>
              <h3>
                {user.phone || "-"}
              </h3>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Address
              </p>
              <h3>
                {user.address || "-"}
              </h3>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-sm text-muted-foreground">
                  Role
                </p>
                <Badge>
                  {user.role ?? "USER"}
                </Badge>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Status
                </p>
                <Badge
                  variant={
                    user.status === "ACTIVE"
                      ? "default"
                      : "destructive"
                  }
                >
                  {user.status ?? "UNKNOWN"}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Joined
              </p>
              <h3>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "-"}
              </h3>
            </div>
          </div>
        ) : (
          <div className="py-10 text-center text-muted-foreground">
            User details not found.
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}