"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useUpdateUserStatus } from "@/hooks/useUpdateUserStatus";

interface UserRowProps {
  user: any;
}

export default function UserRow({
  user,
}: UserRowProps) {
  const { mutate, isPending } =
    useUpdateUserStatus();

  const handleToggleStatus = () => {
    mutate({
      id: user.id,
      status:
        user.status === "ACTIVE"
          ? "SUSPENDED"
          : "ACTIVE",
    });
  };

  return (
    <tr className="border-b">
      <td className="p-4">{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <Badge
          variant={
            user.status === "ACTIVE"
              ? "default"
              : "destructive"
          }
        >
          {user.status}
        </Badge>
      </td>

      <td>
        <Button
          size="sm"
          disabled={isPending}
          variant={
            user.status === "ACTIVE"
              ? "destructive"
              : "default"
          }
          onClick={handleToggleStatus}
        >
          {user.status === "ACTIVE"
            ? "Suspend"
            : "Activate"}
        </Button>
      </td>
    </tr>
  );
}