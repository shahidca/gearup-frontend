"use client";

import { useProviderOrders } from "@/hooks/useProviderOrders";

import ProviderOrderCard from "@/components/dashboard/provider/ProviderOrderCard";

export default function ProviderOrdersPage() {
  const {
    data,
    isLoading,
    isError,
  } = useProviderOrders();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center space-y-2">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

          <p className="text-muted-foreground">
            Loading provider orders...
          </p>
        </div>
      </div>
    );
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

  if (!data || data.length === 0) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border bg-card px-8 py-6 text-center">
          <h2 className="text-lg font-semibold">
            No Orders Found
          </h2>

          <p className="mt-2 text-muted-foreground">
            There are no rental orders yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">
          Provider Orders
        </h1>

        <p className="mt-2 text-muted-foreground">
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
    </div>
  );
}