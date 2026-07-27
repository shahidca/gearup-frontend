"use client";

import { useProviderOrders } from "@/hooks/useProviderOrders";

import ProviderOrderCard from "@/components/dashboard/provider/ProviderOrderCard";
import ProviderOrdersSkeleton from "@/components/dashboard/provider/orders/ProviderOrdersSkeleton";
import EmptyOrdersState from "@/components/dashboard/provider/orders/EmptyOrdersState";


export default function ProviderOrdersPage() {
  const {
    data,
    isLoading,
    isError,
  } = useProviderOrders();

  const orders = data ?? [];

  if (isLoading) {
    return <ProviderOrdersSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center shadow-sm">

          <h2 className="text-xl font-semibold text-destructive">
            Failed to load provider orders
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong while loading your
            rental orders. Please refresh the page
            and try again.
          </p>

        </div>
      </div>
    );
  }

  if (!orders.length) {
    return <EmptyOrdersState />;
  }

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          Provider Orders
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage customer rental requests and update
          rental order status.
        </p>

      </section>

      {/* ================= Orders ================= */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {orders.map((order: any) => (
          <ProviderOrderCard
            key={order.id}
            order={order}
          />
        ))}

      </section>

    </main>
  );
}