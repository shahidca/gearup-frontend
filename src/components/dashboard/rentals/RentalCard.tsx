"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CreditCard,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RentalCardProps {
  rental: any;
}

export default function RentalCard({
  rental,
}: RentalCardProps) {
  const item = rental.rentalItems?.[0];
  const gear = item?.gearItem;

  const statusColor: Record<string, any> = {
    PLACED: "secondary",
    CONFIRMED: "default",
    PAID: "default",
    PICKED_UP: "outline",
    RETURNED: "default",
    CANCELLED: "destructive",
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="relative h-56 w-full">
        <Image
          src={
            gear?.images?.[0] ??
            "https://placehold.co/600x400"
          }
          alt={gear?.name ?? "Gear"}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-xl font-bold">
            {gear?.name}
          </h3>

          <Badge
            variant={
              statusColor[rental.status] ??
              "secondary"
            }
          >
            {rental.status}
          </Badge>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />

            <span>
              {new Date(
                rental.startDate
              ).toLocaleDateString()}
              {" - "}
              {new Date(
                rental.endDate
              ).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />

            <span>
              $
              {Number(
                rental.totalAmount
              ).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-3">
          <Link
            href={`/my-rentals/${rental.id}`}
            className="flex-1"
          >
            <Button className="w-full">
              View Details
            </Button>
          </Link>

          {rental.status ===
            "CONFIRMED" &&
            (!rental.payment ||
              rental.payment.status !==
                "COMPLETED") && (
              <Link
                href={`/payment/${rental.id}`}
              >
                <Button variant="outline">
                  Pay Now
                </Button>
              </Link>
            )}
        </div>
      </div>
    </div>
  );
}