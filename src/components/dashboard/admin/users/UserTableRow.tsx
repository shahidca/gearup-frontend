"use client";

import { Badge } from "@/components/ui/badge";
import UserActionMenu from "./UserActionMenu";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
};

interface UserTableRowProps {
  user: User;
}

export default function UserTableRow({
  user,
}: UserTableRowProps) {
  return (
    <tr className="border-b hover:bg-muted/40 transition-colors">
      <td className="px-4 py-4 font-medium">
        {user.name}
      </td>

      <td className="px-4 py-4">
        {user.email}
      </td>

      <td className="px-4 py-4">
        <Badge variant="outline">
          {user.role}
        </Badge>
      </td>

      <td className="px-4 py-4">
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

      <td className="px-4 py-4">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-right">
        <UserActionMenu user={user} />
      </td>
    </tr>
  );
}