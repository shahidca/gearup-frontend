"use client";

import RentalSkeleton from "@/components/dashboard/rentals/RentalSkeleton";
import EmptyRental from "@/components/dashboard/rentals/EmptyRental";
import RentalCard from "@/components/dashboard/rentals/RentalCard";
import { useRouter } from "next/navigation";
import { useMyRentals } from "@/hooks/useMyRentals";

export default function MyRentalsPage() {
  const {
    data: rentals,
    isLoading,
    isError,
  } = useMyRentals();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <RentalSkeleton />
        <RentalSkeleton />
        <RentalSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        Failed to load rentals.
      </div>
    );
  }

  if (!rentals || rentals.length === 0) {
    return <EmptyRental />;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage all your rental orders.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rentals.map((rental: any) => (
          <RentalCard
            key={rental.id}
            rental={rental}
          />
        ))}
      </div>
    </div>
  );
}