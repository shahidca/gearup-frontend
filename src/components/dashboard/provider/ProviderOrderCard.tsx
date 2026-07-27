"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CreditCard,
  Package,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import OrderStatusBadge from "./orders/OrderStatusBadge";

interface ProviderOrderCardProps {
  order: any;
}

export default function ProviderOrderCard({
  order,
}: ProviderOrderCardProps) {
  const firstItem =
    order.rentalItems?.[0];

  const extraItems =
    (order.rentalItems?.length ?? 1) - 1;

  const paymentStatus =
    order.payment?.status ?? "UNPAID";

  return (
    <div
      className="
        rounded-2xl
        border
        bg-card
        shadow-sm
        transition-all
        hover:border-primary/20
        hover:shadow-md
      "
    >
      {/* ================= Header ================= */}

      <div className="flex items-center justify-between border-b p-5">

        <div>

          <h2 className="font-semibold">
            {order.customer?.name ?? "-"}
          </h2>

          <p className="text-sm text-muted-foreground">
            {order.customer?.email ?? "-"}
          </p>

        </div>

        <OrderStatusBadge
          status={order.status}
        />

      </div>

      {/* ================= Body ================= */}

      <div className="space-y-5 p-5">

        {/* Gear */}

        <div className="flex gap-3">

          <Package className="mt-1 h-5 w-5 text-primary" />

          <div>

            <p className="font-medium">
              {firstItem?.gearItem?.name ?? "-"}
            </p>

            <p className="text-sm text-muted-foreground">
              Quantity:{" "}
              {firstItem?.quantity ?? 0}
            </p>

            {extraItems > 0 && (
              <p className="text-xs text-muted-foreground">
                +{extraItems} more item
                {extraItems > 1 ? "s" : ""}
              </p>
            )}

          </div>

        </div>

        {/* Rental Date */}

        <div className="flex gap-3">

          <Calendar className="mt-1 h-5 w-5 text-primary" />

          <div>

            <p className="text-sm">

              {new Date(
                order.startDate
              ).toLocaleDateString()}

              {" — "}

              {new Date(
                order.endDate
              ).toLocaleDateString()}

            </p>

          </div>

        </div>

        {/* Payment */}

        <div className="flex gap-3">

          <CreditCard className="mt-1 h-5 w-5 text-primary" />

          <div>

            <p className="font-semibold">
              ৳
              {Number(
                order.totalAmount ?? 0
              ).toLocaleString()}
            </p>

            <Badge
              className="mt-2"
              variant={
                paymentStatus === "COMPLETED"
                  ? "default"
                  : paymentStatus === "PENDING"
                  ? "secondary"
                  : "destructive"
              }
            >
              {paymentStatus}
            </Badge>

          </div>

        </div>

      </div>

      {/* ================= Footer ================= */}

      <div className="flex items-center justify-between border-t p-5">

        <Link
          href={`/provider/orders/${order.id}`}
        >
          <Button
            variant="outline"
            size="sm"
          >
            View Details
          </Button>
        </Link>

        <Link
          href={`/provider/orders/${order.id}`}
        >
          <Button size="sm">
            Manage

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

      </div>

    </div>
  );
}