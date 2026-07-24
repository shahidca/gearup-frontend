"use client";

import { useCustomerDashboard } from "@/hooks/useCustomer";

export default function CustomerDashboardPage() {
  const {
    data,
    isLoading,
    isError,
  } = useCustomerDashboard();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center space-y-2">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

          <p className="text-muted-foreground">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Customer Dashboard
        </h1>

        <p className="text-muted-foreground">
          Overview of your rentals and payments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Rentals"
          value={data.totalRentals}
        />

        <StatCard
          title="Active Rentals"
          value={data.activeRentals}
        />

        <StatCard
          title="Completed"
          value={data.completedRentals}
        />

        <StatCard
          title="Total Spent"
          value={`৳${Number(
            data.totalSpent
          ).toLocaleString()}`}
        />
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Recent Rentals
        </h2>

        <div className="space-y-4">
          {data.recentRentals?.length ? (
            data.recentRentals.map(
              (rental: any) => (
                <div
                  key={rental.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div>
                    <h3 className="font-semibold">
                      {
                        rental
                          .rentalItems?.[0]
                          ?.gearItem?.name
                      }
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {rental.status}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      ৳
                      {Number(
                        rental.totalAmount
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              )
            )
          ) : (
            <p className="text-muted-foreground">
              No rentals found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}