"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import UserStatusBadge from "./UserStatusBadge";
import UserStatusDialog from "./UserStatusDialog";

interface UserTableProps {
  users: any[];
}

export default function UserTable({
  users,
}: UserTableProps) {
  if (!users?.length) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center">
        <h3 className="text-lg font-semibold">
          No users found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
      <table className="w-full min-w-[900px]">

        {/* ================= Header ================= */}

        <thead className="border-b bg-muted/40">
          <tr>

            <th className="px-6 py-4 text-left font-semibold">
              Name
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Email
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Role
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Joined
            </th>

            <th className="px-6 py-4 text-right font-semibold">
              Actions
            </th>

          </tr>
        </thead>

        {/* ================= Body ================= */}

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="
                border-b
                last:border-0
                transition-colors
                hover:bg-muted/40
              "
            >

              <td className="px-6 py-5 font-medium">
                {user.name}
              </td>

              <td className="px-6 py-5">
                {user.email}
              </td>

              <td className="px-6 py-5">
                <Badge variant="secondary">
                  {user.role}
                </Badge>
              </td>

              <td className="px-6 py-5">
                <UserStatusBadge
                  status={user.status}
                />
              </td>

              <td className="px-6 py-5 text-sm text-muted-foreground">
                {new Date(
                  user.createdAt
                ).toLocaleDateString()}
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-end gap-2">

                  <Link
                    href={`/admin/users/${user.id}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </Link>

                  <UserStatusDialog
                    user={user}
                  />

                </div>
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}