"use client";

import { useState } from "react";
import CustomerRentalCard from "@/components/dashboard/customer/CustomerRentalCard";
import CustomerRentalSkeleton from "@/components/dashboard/customer/CustomerRentalSkeleton";
import Pagination from "@/components/shared/Pagination";
import { useCustomerRentals } from "@/hooks/useCustomer";
import CustomerRentalSearch from "@/components/dashboard/customer/CustomerRentalSearch";
import CustomerRentalFilters from "@/components/dashboard/customer/CustomerRentalFilters";
import EmptyRentals from "@/components/dashboard/customer/EmptyRentals";


export default function CustomerRentalsPage() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("ALL");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleStatusChange = (value: string | null) => {
    setStatus(value ?? "ALL");
    setPage(1);
  };

  const {
    data,
    isLoading,
    isError,
  } = useCustomerRentals({
  page,
  limit: 9,
  searchTerm,
  status:
    status === "ALL"
      ? undefined
      : status,
});

  if (isLoading && !data) {
    return <CustomerRentalSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-destructive">
        Failed to load rentals.
      </div>
    );
  }

  const rentals = data?.data ?? [];
  const meta = data?.meta;

  return (
    <main className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">My Rentals</h1>
        <p className="mt-2 text-muted-foreground">
          Manage and track all your rental orders.
        </p>
      </section>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CustomerRentalSearch
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <CustomerRentalFilters
          status={status}
          onStatusChange={handleStatusChange}
        />
      </div>

      {rentals.length === 0 ? (
        <EmptyRentals />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rentals.map((rental: any) => (
              <CustomerRentalCard key={rental.id || rental._id} rental={rental} />
            ))}
          </div>

          <div className="mt-8">
            <Pagination
              currentPage={meta?.page || 1}
              totalPage={meta?.totalPage || 1}
              onPageChange={setPage}
            />
          </div>
        </>
      )}
    </main>
  );
}