"use client";

import { use } from "react";

import ProviderOrderDetails from "@/components/dashboard/provider/orders/ProviderOrderDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { useSingleProviderOrder } from "@/hooks/useProviderOrders";

export default function ProviderOrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  const {
    data: order,
    isLoading,
    isError,
  } = useSingleProviderOrder(
    resolvedParams.id
  );

  if (isLoading) {
    return (
      <main className="space-y-8">

        <section className="space-y-3">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-5 w-96" />
        </section>

        <Skeleton className="h-[500px] w-full rounded-2xl" />

      </main>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center shadow-sm">

          <h2 className="text-xl font-semibold text-destructive">
            Order not found
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            The requested rental order could not be
            found or may have been removed.
          </p>

        </div>
      </div>
    );
  }

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          Rental Order Details
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review customer information, payment
          details and manage this rental order.
        </p>

      </section>

      {/* ================= Order Details ================= */}

      <ProviderOrderDetails
        order={order}
      />

    </main>
  );
}