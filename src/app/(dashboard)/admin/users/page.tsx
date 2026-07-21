"use client";

import { useAdminUsers } from "@/hooks/useAdmin";

import UserRow from "@/components/dashboard/admin/UserRow";

export default function AdminUsersPage() {
  const {
    data: users,
    isLoading,
    isError,
  } = useAdminUsers();

  if (isLoading) {
    return (
      <div className="py-20">
        Loading users...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20">
        Failed to load users.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-muted-foreground">
          Manage customer, provider and admin accounts.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="text-left">
                Email
              </th>

              <th className="text-left">
                Role
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user: any) => (
              <UserRow
                key={user.id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}