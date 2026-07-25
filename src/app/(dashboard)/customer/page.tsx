"use client";

import CustomerDashboardSkeleton from "@/components/dashboard/customer/CustomerDashboardSkeleton";
import CustomerRecentRentals from "@/components/dashboard/customer/CustomerRecentRentals";
import CustomerStats from "@/components/dashboard/customer/CustomerStats";
import { useCustomerDashboard } from "@/hooks/useCustomer";



export default function CustomerDashboardPage() {
  const {
    data,
    isLoading,
    isError,
  } = useCustomerDashboard();

  if (isLoading) {
    return <CustomerDashboardSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-8 py-6">
          <h2 className="text-lg font-semibold text-destructive">
            Failed to load dashboard
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please refresh and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="space-y-8">

      <section>
        <h1 className="text-3xl font-bold">
          Customer Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Overview of your rentals and payments.
        </p>
      </section>

      <CustomerStats stats={data} />

      <CustomerRecentRentals
        rentals={data.recentRentals}
      />

    </main>
  );
}