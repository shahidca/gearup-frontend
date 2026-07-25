"use client";

import { useState } from "react";

import { useAdminUsers } from "@/hooks/useAdminUsers";

import UserTable from "@/components/dashboard/admin/users/UserTable";
import UserFilters from "@/components/dashboard/admin/users/UserFilters";
import UserPagination from "@/components/dashboard/admin/users/UserPagination";
import UserSkeleton from "@/components/dashboard/admin/users/UserSkeleton";
import EmptyUserState from "@/components/dashboard/admin/users/EmptyUserState";

export default function AdminUsersPage() {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [role, setRole] =
    useState("");

  const [status, setStatus] =
    useState("");

  const {
    data,
    isLoading,
    isError,
  } = useAdminUsers({
    page,
    limit: 10,
    searchTerm,
    role,
    status,
  });

  if (isLoading) {
    return <UserSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load users.
      </div>
    );
  }

  return (
    <main className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage customers,
          providers and admins.
        </p>

      </section>

      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      {data?.data?.length ? (
        <>
          <UserTable
            users={data.data}
          />

          <UserPagination
            meta={data.meta}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <EmptyUserState />
      )}

    </main>
  );
}