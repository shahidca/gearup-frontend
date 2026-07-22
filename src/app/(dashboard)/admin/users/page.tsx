"use client";

import { useState } from "react";

import UserSearch from "@/components/dashboard/admin/users/UserSearch";
import UserFilters from "@/components/dashboard/admin/users/UserFilters";
import UserTable from "@/components/dashboard/admin/users/UserTable";
import UserSkeleton from "@/components/dashboard/admin/users/UserSkeleton";
import EmptyUsers from "@/components/dashboard/admin/users/EmptyUsers";

import { useAdminUsers } from "@/hooks/useAdminUsers";
import Pagination from "@/components/shared/Pagination";

export default function AdminUsersPage() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] =
    useState("");

  const [role, setRole] =
    useState("ALL");

  const [status, setStatus] =
    useState("ALL");

  const {
    data,
    isLoading,
    isError,
  } = useAdminUsers({
    page,
    limit: 10,
    searchTerm,
    role:
      role === "ALL"
        ? undefined
        : role,
    status:
      status === "ALL"
        ? undefined
        : status,
  });

  if (isLoading) {
    return <UserSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6">
        Failed to load users.
      </div>
    );
  }

  const users = data?.data || [];

  const meta = data?.meta;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Users Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage customers,
          providers and admins.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <UserSearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <UserFilters
          role={role}
          status={status}
          onRoleChange={(value) =>
            setRole(value ?? "ALL")
          }
          onStatusChange={(value) =>
            setStatus(value ?? "ALL")
          }
        />
      </div>

      {users.length === 0 ? (
        <EmptyUsers />
      ) : (
        
      <>
  <UserTable users={users} />

  <Pagination
    currentPage={meta?.page || 1}
    totalPage={meta?.totalPage || 1}
    onPageChange={setPage}
  />
</>
      )}
    </div>
  );
}