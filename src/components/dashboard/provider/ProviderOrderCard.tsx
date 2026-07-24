"use client";

import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import UpdateStatusDialog from "./UpdateStatusDialog";

interface ProviderOrderCardProps {
  order: any;
}

export default function ProviderOrderCard({
  order,
}: ProviderOrderCardProps) {
  const [open, setOpen] = useState(false);

  const item = order.rentalItems?.[0];
  const gear = item?.gearItem;

  return (
    <>
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg">

        <div className="relative h-56 bg-muted">
          <Image
            src={
              gear?.images?.[0] ??
              "https://placehold.co/700x500"
            }
            alt={gear?.name ?? "Gear"}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5 p-5">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">
              {gear?.name}
            </h2>

            <Badge
              className={
                order.status === "PLACED"
                  ? "bg-yellow-500"
                  : order.status === "CONFIRMED"
                    ? "bg-blue-600"
                    : order.status === "PICKED_UP"
                      ? "bg-purple-600"
                      : order.status === "RETURNED"
                        ? "bg-green-600"
                        : "bg-red-600"
              }
            >
              {order.status}
            </Badge>

          </div>

          <div className="space-y-2 text-sm">

            <p>
              <strong>Customer:</strong>{" "}
              {order.customer?.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {order.customer?.email}
            </p>

            <p>
              <strong>Quantity:</strong>{" "}
              {item?.quantity}
            </p>

            <div className="flex items-center gap-2">
              <strong>Payment:</strong>

              <Badge
                variant={
                  order.payment?.status === "COMPLETED"
                    ? "default"
                    : "secondary"
                }
              >
                {order.payment?.status}
              </Badge>
            </div>

            <p>
              <strong>Total:</strong> ৳
              {Number(
                order.payment?.amount ?? 0
              ).toLocaleString()}
            </p>

          </div>

          {order.status !== "RETURNED" &&
            order.status !== "CANCELLED" && (
              <Button
                className="w-full"
                onClick={() =>
                  setOpen(true)
                }
              >
                Update Status
              </Button>
            )}

        </div>

      </div>

      <UpdateStatusDialog
        open={open}
        onOpenChange={setOpen}
        order={order}
      />
    </>
  );
}