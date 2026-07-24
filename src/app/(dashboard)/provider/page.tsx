"use client";

import {
  DollarSign,
  Package,
  ShoppingBag,
} from "lucide-react";

import { useProviderDashboard } from "@/hooks/useProviderDashboard";

export default function ProviderDashboard() {
  const {
    data,
    isLoading,
    isError,
  } = useProviderDashboard();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p>Failed to load dashboard.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Provider Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back!
        </p>
      </section>

      {/* Cards */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Total Gear"
          value={data.totalGear}
          icon={
            <Package className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Total Orders"
          value={data.totalOrders}
          icon={
            <ShoppingBag className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Active Orders"
          value={data.activeOrders}
          icon={
            <ShoppingBag className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Revenue"
          value={`৳${Number(
            data.totalRevenue
          ).toLocaleString()}`}
          icon={
            <DollarSign className="size-7 text-primary" />
          }
        />

      </section>

      {/* Recent Orders */}

      <section className="rounded-2xl border bg-card p-6">

        <h2 className="mb-6 text-xl font-semibold">
          Recent Orders
        </h2>

        <div className="space-y-4">

          {data.recentOrders.length === 0 ? (
            <p className="text-muted-foreground">
              No recent orders.
            </p>
          ) : (
            data.recentOrders.map(
              (order: any) => (
                <div
                  key={order.id}
                  className="rounded-lg border p-4"
                >
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-semibold">
                        {
                          order.customer
                            ?.name
                        }
                      </p>

                      <p className="text-sm text-muted-foreground">

                        {order.rentalItems
                          ?.map(
                            (
                              item: any
                            ) =>
                              item
                                .gearItem
                                ?.name
                          )
                          .join(", ")}

                      </p>

                    </div>

                    <div className="text-right">

                      <p className="font-medium">
                        {
                          order.status
                        }
                      </p>

                      <p className="text-sm text-muted-foreground">

                        ৳
                        {Number(
                          order
                            .payment
                            ?.amount ??
                            0
                        ).toLocaleString()}

                      </p>

                    </div>

                  </div>
                </div>
              )
            )
          )}

        </div>

      </section>

    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div className="rounded-xl bg-primary/10 p-3">
          {icon}
        </div>

      </div>

    </div>
  );
}