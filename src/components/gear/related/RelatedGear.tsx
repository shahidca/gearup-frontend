"use client";

import Link from "next/link";

import { useGear } from "@/hooks/useGear";

import GearCard from "@/components/home/featured-gear/GearCard";

interface Props {
  categoryId: string;
  currentGearId: string;
}

export default function RelatedGear({
  categoryId,
  currentGearId,
}: Props) {
  const {
    data,
    isLoading,
  } = useGear({
    categoryId,
    limit: 4,
  });

  if (isLoading) {
    return (
      <div className="mt-12">
        Loading...
      </div>
    );
  }

  const related =
    data?.data.filter(
      (gear) => gear.id !== currentGearId
    ) || [];

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Related Gear
        </h2>

        <Link
          href="/gear"
          className="text-primary font-medium"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {related.map((gear) => (
          <GearCard
            key={gear.id}
            gear={gear}
          />
        ))}

      </div>

    </section>
  );
}