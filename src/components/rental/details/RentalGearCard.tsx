"use client";

import Image from "next/image";
import { Package, ShieldCheck, Tag } from "lucide-react";

interface RentalGearCardProps {
  rental: any;
}

export default function RentalGearCard({
  rental,
}: RentalGearCardProps) {
  const item = rental.rentalItems?.[0];
  const gear = item?.gearItem;

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="relative h-80 overflow-hidden rounded-2xl">
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

        <div className="space-y-5">

          <div>
            <h2 className="text-3xl font-bold">
              {gear?.name}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {gear?.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  Category
                </span>
              </div>

              <p className="mt-2">
                {gear?.category?.name}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  Condition
                </span>
              </div>

              <p className="mt-2">
                {gear?.condition}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  Available Stock
                </span>
              </div>

              <p className="mt-2">
                {gear?.availableStock}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <span className="font-medium">
                Price / Day
              </span>

              <p className="mt-2 text-2xl font-bold text-primary">
                ৳
                {Number(
                  gear?.pricePerDay ?? 0
                ).toLocaleString()}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}