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

  if (isLoading) {
    return <ProviderOrdersSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-8 py-6">
          <h2 className="text-lg font-semibold text-destructive">
            Failed to load provider orders
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  if (!data?.length) {
    return <EmptyOrdersState />;
  }

  return (
    <main className="space-y-8">

      <section>
        <h1 className="text-3xl font-bold">
          Provider Orders
        </h1>

        <p className="text-muted-foreground mt-2">
          Manage customer rental requests and update order status.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((order: any) => (
          <ProviderOrderCard
            key={order.id}
            order={order}
          />
        ))}
      </section>

    </main>
  );
}