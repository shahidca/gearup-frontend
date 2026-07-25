"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useUpdateAdminUserStatus } from "@/hooks/useAdminUsers";

interface AdminUserActionsCardProps {
  user: any;
}

export default function AdminUserActionsCard({
  user,
}: AdminUserActionsCardProps) {
  const { mutate, isPending } =
    useUpdateAdminUserStatus();

  const nextStatus =
    user.status === "ACTIVE"
      ? "SUSPENDED"
      : "ACTIVE";

  const handleStatus = () => {
    mutate({
      id: user.id,
      status: nextStatus,
    });
  };

  return (
    <section className="rounded-2xl border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold">
        User Actions
      </h2>

      <div className="space-y-6">

        {/* Current Status */}

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-muted-foreground">
              Current Status
            </p>

            <Badge
              className="mt-2"
              variant={
                user.status === "ACTIVE"
                  ? "default"
                  : "destructive"
              }
            >
              {user.status}
            </Badge>
          </div>

          <Button
            onClick={handleStatus}
            disabled={isPending}
            variant={
              nextStatus === "SUSPENDED"
                ? "destructive"
                : "default"
            }
          >
            {isPending
              ? "Updating..."
              : nextStatus === "SUSPENDED"
              ? "Suspend User"
              : "Activate User"}
          </Button>

        </div>

        {/* Role */}

        <div className="border-t pt-6">

          <p className="text-sm text-muted-foreground">
            User Role
          </p>

          <Badge className="mt-2">
            {user.role}
          </Badge>

        </div>

      </div>
    </section>
  );
}