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
      <div className="py-20">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20">
        Failed to load provider orders.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="py-20">
        No orders found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Provider Orders
        </h1>

        <p className="text-muted-foreground">
          Manage customer rental requests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((order: any) => (
          <ProviderOrderCard
            key={order.id}
            order={order}
          />
        ))}
      </div>

    </div>
  );
}