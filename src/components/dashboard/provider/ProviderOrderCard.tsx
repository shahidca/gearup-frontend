"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useUpdateProviderOrder } from "@/hooks/useUpdateProviderOrder";

interface ProviderOrderCardProps {
  order: any;
}

export default function ProviderOrderCard({
  order,
}: ProviderOrderCardProps) {
  const { mutate, isPending } =
    useUpdateProviderOrder();

  const item = order.rentalItems[0];
  const gear = item.gearItem;

  const handleAction = () => {
    if (order.status === "PLACED") {
      mutate({
        id: order.id,
        status: "CONFIRMED",
      });
    }

    if (order.status === "CONFIRMED") {
      mutate({
        id: order.id,
        status: "PICKED_UP",
      });
    }

    if (order.status === "PICKED_UP") {
      mutate({
        id: order.id,
        status: "RETURNED",
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">

      <div className="relative h-56">
        <Image
          src={
            gear.images?.[0] ??
            "https://placehold.co/700x500"
          }
          alt={gear.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            {gear.name}
          </h2>

          <Badge>{order.status}</Badge>

        </div>

        <div className="space-y-2 text-sm">

          <p>
            <strong>Customer:</strong>{" "}
            {order.customer.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {order.customer.email}
          </p>

          <p>
            <strong>Quantity:</strong>{" "}
            {item.quantity}
          </p>

          <p>
            <strong>Total:</strong> $
            {Number(
              order.totalAmount
            ).toFixed(2)}
          </p>

        </div>

        {order.status !== "RETURNED" &&
          order.status !== "CANCELLED" && (
            <Button
              disabled={isPending}
              className="w-full"
              onClick={handleAction}
            >
              {order.status === "PLACED" &&
                "Confirm"}

              {order.status ===
                "CONFIRMED" &&
                "Mark Picked Up"}

              {order.status ===
                "PICKED_UP" &&
                "Mark Returned"}
            </Button>
          )}
      </div>
    </div>
  );
}