"use client";

import { use } from "react";

import { useSingleProviderOrder } from "@/hooks/useProviderOrders";
import ProviderOrderDetails from "@/components/dashboard/provider/orders/ProviderOrderDetails";


export default function ProviderOrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const {
    data: order,
    isLoading,
    isError,
  } = useSingleProviderOrder(id);

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading order...
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Order not found.
      </div>
    );
  }

  return (
    <main className="space-y-8">

      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Rental Order Details
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review customer information and manage this rental order.
        </p>
      </section>

      {/* Order Card */}

      <ProviderOrderDetails order={order} />

    </main>
  );
}