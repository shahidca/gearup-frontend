"use client";

import { useParams } from "next/navigation";

import { useSingleAdminRental } from "@/hooks/useAdminRentals";

import AdminRentalDetailsCard from "@/components/dashboard/admin/rentals/AdminRentalDetailsCard";

export default function AdminRentalDetailsPage() {
  const params = useParams();

  const rentalId = params.id as string;

  const {
    data: rental,
    isLoading,
    isError,
  } = useSingleAdminRental(rentalId);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading rental...
      </div>
    );
  }

  if (isError || !rental) {
    return (
      <div className="py-20 text-center">
        Rental not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Rental Details
        </h1>

        <p className="text-muted-foreground">
          View complete rental information.
        </p>

      </div>

      <AdminRentalDetailsCard
        rental={rental}
      />

    </div>
  );
}