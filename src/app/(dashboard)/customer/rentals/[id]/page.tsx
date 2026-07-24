"use client";

import { use } from "react";

import { useSingleRental } from "@/hooks/useRental";
import RentalActions from "@/components/rental/details/RentalActions";
import RentalProviderCard from "@/components/rental/details/RentalProviderCard";
import RentalHeader from "@/components/rental/details/RentalHeader";
import RentalGearCard from "@/components/rental/details/RentalGearCard";
import RentalTimeline from "@/components/rental/details/RentalTimeline";
import RentalSummaryCard from "@/components/dashboard/customer/RentalSummaryCard";

export default function RentalDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // =============================
  // Route Params
  // =============================

  const { id } = use(params);

  // =============================
  // Fetch Rental Details
  // =============================

  const {
    data: rental,
    isLoading,
    isError,
  } = useSingleRental(id);

  // =============================
  // Loading State
  // =============================

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 text-center">
        Loading rental...
      </div>
    );
  }

  // =============================
  // Error State
  // =============================

  if (isError || !rental) {
    return (
      <div className="container mx-auto py-20 text-center">
        Rental not found.
      </div>
    );
  }

  // =============================
  // Page
  // =============================

  return (
    <main className="container mx-auto space-y-8 py-10">

      {/* ================= Rental Header ================= */}

      <RentalHeader rental={rental} />

      {/* ================= Gear Information ================= */}

      <RentalGearCard rental={rental} />

      {/* ================= Timeline + Summary ================= */}

      <section className="grid gap-8 lg:grid-cols-3">

        {/* Left Side */}

        <div className="space-y-8 lg:col-span-2">

          <RentalTimeline rental={rental} />

          <RentalProviderCard rental={rental} />

        </div>

        {/* Right Side */}

        <div className="space-y-8">

          <RentalSummaryCard rental={rental} />

          <RentalActions rental={rental} />

        </div>

      </section>

    </main>
  );
}