"use client";

import { use } from "react";

import { useSingleGear } from "@/hooks/useSingleGear";

import GearGallery from "@/components/gear/details/GearGallery";
import GearInfo from "@/components/gear/details/GearInfo";
import GearDescription from "@/components/gear/details/GearDescription";
import GearSpecifications from "@/components/gear/details/GearSpecifications";
import GearProvider from "@/components/gear/details/GearProvider";
import RentCard from "@/components/gear/details/RentCard";

export default function GearDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const {
    data: gear,
    isLoading,
    isError,
  } = useSingleGear(id);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20">
        Loading...
      </div>
    );
  }

  if (isError || !gear) {
    return (
      <div className="container mx-auto py-20">
        Gear not found.
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10">

      {/* ================= Top Section ================= */}

      <section className="grid gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <GearGallery gear={gear} />
        </div>

        <div className="space-y-6">
          <GearInfo gear={gear} />
          <RentCard gear={gear} />
        </div>

      </section>

      {/* ================= Description ================= */}

      <section className="mt-12">
        <GearDescription gear={gear} />
      </section>

      {/* ================= Specs + Provider ================= */}

      <section className="mt-10 grid gap-8 lg:grid-cols-2">

        <GearSpecifications gear={gear} />

        <GearProvider gear={gear} />

      </section>

    </main>
  );
}