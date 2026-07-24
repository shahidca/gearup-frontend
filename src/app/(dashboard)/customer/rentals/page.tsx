"use client";
import CustomerRentalCard from "@/components/dashboard/customer/CustomerRentalCard";
import { useCustomerRentals } from "@/hooks/useCustomer";

export default function CustomerRentalsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useCustomerRentals();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading rentals...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        Failed to load rentals.
      </div>
    );
  }

  if (!data?.data?.length) {
    return (
      <div className="py-20 text-center">
        No rentals found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="text-muted-foreground">
          View all your rental orders.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.data.map((rental: any) => (
          <CustomerRentalCard
            key={rental.id}
            rental={rental}
          />
        ))}
      </div>
    </div>
  );
}