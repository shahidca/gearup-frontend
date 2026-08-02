"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  CreditCard,
  Receipt,
  ArrowRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TPayment } from "@/types/payment";

interface CustomerPaymentCardProps {
  payment: TPayment;
}

export default function CustomerPaymentCard({
  payment,
}: CustomerPaymentCardProps) {
  const rental = payment.rentalOrder;
  const gear = rental?.rentalItems?.[0]?.gearItem;

  const badgeClass = (() => {
    switch (payment.status) {
      case "COMPLETED":
        return "bg-green-600 hover:bg-green-600";

      case "PENDING":
        return "bg-yellow-500 hover:bg-yellow-500";

      case "FAILED":
        return "bg-red-600 hover:bg-red-600";

      default:
        return "";
    }
  })();

  return (
    <div className="overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={
            gear?.images?.[0] ??
            "https://placehold.co/800x600"
          }
          alt={gear?.name ?? "Gear"}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />

      </div>

      <div className="space-y-5 p-6">

        {/* Header */}

        <div className="flex items-start justify-between gap-3">

          <div>

            <h2 className="line-clamp-1 text-xl font-bold">
              {gear?.name ?? "Rental Gear"}
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Payment ID: {payment.id.slice(0, 8)}...
            </p>

          </div>

          <Badge className={badgeClass}>
            {payment.status}
          </Badge>

        </div>

        {/* Information */}

        <div className="space-y-3 text-sm">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2 text-muted-foreground">
              <Receipt className="h-4 w-4" />
              Amount
            </div>

            <span className="font-semibold text-primary">
              ৳{payment.amount.toLocaleString()}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              Method
            </div>

            <span>
              {payment.paymentMethod ?? "N/A"}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Date
            </div>

            <span>
              {new Date(
                payment.createdAt
              ).toLocaleDateString()}
            </span>

          </div>

          {payment.transactionId && (
            <div>

              <p className="mb-1 text-muted-foreground">
                Transaction ID
              </p>

              <code className="block truncate rounded-lg bg-muted px-3 py-2 text-xs">
                {payment.transactionId}
              </code>

            </div>
          )}

        </div>

        {/* Footer */}

        {rental && (
          <Link href={`/customer/rentals/${rental.id}`} className="block">
            <Button className="w-full">
              View Rental Details

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}

      </div>

    </div>
  );
}