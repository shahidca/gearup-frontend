"use client";

import { Mail, Phone, MapPin, User } from "lucide-react";

interface RentalProviderCardProps {
  rental: any;
}

export default function RentalProviderCard({
  rental,
}: RentalProviderCardProps) {
  const provider =
    rental.rentalItems?.[0]?.gearItem?.provider;

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      {/* ================= Header ================= */}

      <h2 className="mb-6 text-2xl font-bold">
        Provider Information
      </h2>

      {/* ================= Provider ================= */}

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <User className="h-7 w-7 text-primary" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {provider?.name ?? "Unknown Provider"}
            </h3>

            <p className="text-sm text-muted-foreground">
              Equipment Provider
            </p>
          </div>

        </div>

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <Mail className="h-5 w-5 text-primary" />

            <span>
              {provider?.email ?? "N/A"}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Phone className="h-5 w-5 text-primary" />

            <span>
              {provider?.phone ?? "Not Available"}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <MapPin className="h-5 w-5 text-primary" />

            <span>
              {provider?.address ?? "Address Not Available"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}