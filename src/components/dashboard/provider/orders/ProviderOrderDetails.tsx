"use client";

import { useState } from "react";

import {
  Calendar,
  CreditCard,
  Mail,
  MapPin,
  Package,
  Phone,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import OrderStatusBadge from "./OrderStatusBadge";
import UpdateOrderStatusDialog from "./UpdateOrderStatusDialog";

interface ProviderOrderDetailsProps {
  order: any;
}

export default function ProviderOrderDetails({
  order,
}: ProviderOrderDetailsProps) {
  const [open, setOpen] = useState(false);

  const paymentStatus =
    order.payment?.status ?? "UNPAID";

  return (
    <>
      <div className="space-y-8">

        {/* ================= Customer ================= */}

        <section className="rounded-2xl border bg-card p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Customer Information
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Name
                </p>

                <p className="font-medium">
                  {order.customer?.name ?? "-"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="font-medium">
                  {order.customer?.email ?? "-"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p className="font-medium">
                  {order.customer?.phone ?? "N/A"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <p className="font-medium">
                  {order.customer?.address ?? "N/A"}
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* ================= Rental ================= */}

        <section className="rounded-2xl border bg-card p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Rental Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="flex items-center gap-3">

              <Calendar className="h-5 w-5 text-primary" />

              <div>

                <p className="text-sm text-muted-foreground">
                  Rental Period
                </p>

                <p className="font-medium">

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

            <div>

              <p className="text-sm text-muted-foreground">
                Rental Status
              </p>

              <div className="mt-2">
                <OrderStatusBadge
                  status={order.status}
                />
              </div>

            </div>

          </div>

        </section>

        {/* ================= Items ================= */}

        <section className="rounded-2xl border bg-card p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Rental Items
          </h2>

          {order.rentalItems?.length ? (
            <div className="space-y-4">

              {order.rentalItems.map(
                (item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border p-4"
                  >

                    <div className="flex items-center gap-3">

                      <Package className="h-5 w-5 text-primary" />

                      <div>

                        <p className="font-medium">
                          {item.gearItem?.name}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>

                      </div>

                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        ৳
                        {Number(
                          item.pricePerDay ?? 0
                        ).toLocaleString()}
                        /day
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>
          ) : (
            <p className="text-muted-foreground">
              No rental items found.
            </p>
          )}

        </section>

        {/* ================= Payment ================= */}

        <section className="rounded-2xl border bg-card p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Payment Information
          </h2>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <CreditCard className="h-5 w-5 text-primary" />

              <div>

                <p className="text-sm text-muted-foreground">
                  Payment Status
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

            <div className="text-right">

              <p className="text-sm text-muted-foreground">
                Total Amount
              </p>

              <p className="text-2xl font-bold">
                ৳
                {Number(
                  order.totalAmount ?? 0
                ).toLocaleString()}
              </p>

            </div>

          </div>

        </section>

        {/* ================= Actions ================= */}

        <section className="flex justify-end">

          <Button
            disabled={
              order.status === "RETURNED" ||
              order.status === "CANCELLED"
            }
            onClick={() => setOpen(true)}
          >
            Update Status
          </Button>

        </section>

      </div>

      <UpdateOrderStatusDialog
        open={open}
        onOpenChange={setOpen}
        orderId={order.id}
        currentStatus={order.status}
      />
    </>
  );
}