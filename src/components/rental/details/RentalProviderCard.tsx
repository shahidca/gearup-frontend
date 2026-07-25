"use client";

import { Mail, Phone, MapPin, User } from "lucide-react";

import { TRental } from "@/types/rental";

interface RentalProviderCardProps {
  rental: TRental;
}

export default function RentalProviderCard({
  rental,
}: RentalProviderCardProps) {
  const provider =
    rental.rentalItems?.[0]?.gearItem?.provider;

  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Provider Information
        </h2>

        <p className="text-sm text-muted-foreground">
          Contact details of the equipment provider.
        </p>
      </div>

      {/* Provider */}

      <div className="space-y-6">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <User className="h-8 w-8 text-primary" />
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              {provider?.name ?? "Unknown Provider"}
            </h3>

            <p className="text-sm text-muted-foreground">
              Equipment Provider
            </p>
          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div className="flex items-center gap-3 rounded-xl border p-4">

            <Mail className="h-5 w-5 shrink-0 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">
                Email
              </p>

              <p className="font-medium">
                {provider?.email ?? "Not Available"}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl border p-4">

            <Phone className="h-5 w-5 shrink-0 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">
                Phone
              </p>

              <p className="font-medium">
                {provider?.phone ?? "Not Available"}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl border p-4 md:col-span-2">

            <MapPin className="h-5 w-5 shrink-0 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">
                Address
              </p>

              <p className="font-medium">
                {provider?.address ?? "Address Not Available"}
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}