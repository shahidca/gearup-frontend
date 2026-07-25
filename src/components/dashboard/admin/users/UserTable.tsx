"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";


import UserStatusDialog from "./UserStatusDialog";
import UserStatusBadge from "./UserStatusBadge";

interface UserTableProps {
  users: any[];
}

export default function UserTable({
  users,
}: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <table className="w-full">

        <thead className="border-b bg-muted/40">
          <tr>

            <th className="px-6 py-4 text-left">
              Name
            </th>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Role
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Joined
            </th>

            <th className="px-6 py-4 text-right">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b last:border-0"
            >

              <td className="px-6 py-5 font-medium">
                {user.name}
              </td>

              <td className="px-6 py-5">
                {user.email}
              </td>

              <td className="px-6 py-5">
                {user.role}
              </td>

              <td className="px-6 py-5">
                <UserStatusBadge
                  status={user.status}
                />
              </td>

              <td className="px-6 py-5">
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