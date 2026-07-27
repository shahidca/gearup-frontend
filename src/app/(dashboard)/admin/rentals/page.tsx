"use client";

import { useState } from "react";

import EmptyRentals from "@/components/dashboard/admin/rentals/EmptyRentals";
import RentalFilters from "@/components/dashboard/admin/rentals/RentalFilters";
import RentalSearch from "@/components/dashboard/admin/rentals/RentalSearch";
import RentalSkeleton from "@/components/dashboard/admin/rentals/RentalSkeleton";
import RentalTable from "@/components/dashboard/admin/rentals/RentalTable";

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
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">

          <h2 className="text-xl font-semibold text-red-600">
            Failed to load rentals
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong while loading
            rental orders. Please refresh the
            page and try again.
          </p>

        </div>
      </div>
    );
  }

  const rentals = data?.data ?? [];

  const meta = data?.meta;

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          Rental Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          View, manage and update every rental
          order across the platform.
        </p>

      </section>

      {/* ================= Search & Filters ================= */}

      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <RentalSearch
          value={searchTerm}
          onChange={(value) => {
            setPage(1);
            setSearchTerm(value);
          }}
        />

        <RentalFilters
          status={status}
          onStatusChange={(value) => {
            setPage(1);
            setStatus(value ?? "ALL");
          }}
        />

      </section>

      {/* ================= Table ================= */}

      {rentals.length > 0 ? (
        <>
          <RentalTable rentals={rentals} />

          <Pagination
            currentPage={meta?.page ?? 1}
            totalPage={meta?.totalPage ?? 1}
            onPageChange={setPage}
          />
        </>
      ) : (
        <EmptyRentals />
      )}

    </main>
  );
}