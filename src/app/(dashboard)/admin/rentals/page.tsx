"use client";

import { useState } from "react";

import RentalTable from "@/components/dashboard/admin/rentals/RentalTable";
import RentalSkeleton from "@/components/dashboard/admin/rentals/RentalSkeleton";
import EmptyRentals from "@/components/dashboard/admin/rentals/EmptyRentals";
import RentalSearch from "@/components/dashboard/admin/rentals/RentalSearch";
import RentalFilters from "@/components/dashboard/admin/rentals/RentalFilters";

import Pagination from "@/components/shared/Pagination";

import { useAdminRentals } from "@/hooks/useAdminRentals";

export default function AdminRentalsPage() {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [status, setStatus] =
    useState("ALL");

  const {
    data,
    isLoading,
    isError,
  } = useAdminRentals({
    page,
    limit: 10,
    searchTerm,
    status:
      status === "ALL"
        ? undefined
        : status,
  });

  if (isLoading) {
    return <RentalSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6">
        Failed to load rentals.
      </div>
    );
  }

  const rentals = data?.data || [];

  const meta = data?.meta;

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Rental Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage all rental orders.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <RentalSearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <RentalFilters
          status={status}
          onStatusChange={(value) =>
            setStatus(value ?? "ALL")
          }
        />

      </div>

      {rentals.length === 0 ? (
        <EmptyRentals />
      ) : (
        <>
          <RentalTable rentals={rentals} />

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