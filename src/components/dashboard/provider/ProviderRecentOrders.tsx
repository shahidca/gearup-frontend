"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CreditCard,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProviderRecentOrdersProps {
  orders?: any[];
}

export default function ProviderRecentOrders({
  orders = [],
}: ProviderRecentOrdersProps) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Latest rental requests from customers.
          </p>
        </div>

        <Link href="/provider/orders">
          <Button
            variant="outline"
            size="sm"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Empty State */}

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-16 text-center">
          <h3 className="text-lg font-semibold">
            No Recent Orders
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            New customer rentals will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-muted/40
                hover:shadow-md
              "
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <User className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {order.customer?.name ??
                          "Unknown Customer"}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {order.customer?.email ??
                          "Customer"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Gear Items
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {order.rentalItems?.length
                        ? order.rentalItems
                            .map(
                              (item: any) =>
                                item.gearItem?.name
                            )
                            .join(", ")
                        : "No gear items"}
                    </p>
                  </div>
                </div>

                {/* Right */}

                <div className="space-y-4 text-left lg:text-right">
                  <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
                    <Badge>
                      {order.status}
                    </Badge>

                    <Badge
                      variant={
                        order.payment?.status ===
                        "COMPLETED"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {order.payment?.status ??
                        "UNPAID"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
                    <Calendar className="h-4 w-4" />

                    {order.createdAt
                      ? new Date(
                          order.createdAt
                        ).toLocaleDateString()
                      : "-"}
                  </div>

                  <div className="flex items-center gap-2 font-semibold lg:justify-end">
                    <CreditCard className="h-4 w-4 text-primary" />

                    ৳
                    {Number(
                      order.payment?.amount ??
                        order.totalAmount ??
                        0
                    ).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}