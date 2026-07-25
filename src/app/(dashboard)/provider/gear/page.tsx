"use client";

import { useState } from "react";

import { useProviderGear } from "@/hooks/useProviderGear";
import ProviderGearSkeleton from "@/components/dashboard/provider/gear/ProviderGearSkeleton";
import ProviderGearFilters from "@/components/dashboard/provider/gear/ProviderGearFilters";
import EmptyGearState from "@/components/dashboard/provider/gear/EmptyGearState";
import ProviderGearTable from "@/components/dashboard/provider/gear/ProviderGearTable";


export default function ProviderGearPage() {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const [condition, setCondition] =
    useState("");

  const {
    data,
    isLoading,
    isError,
  } = useProviderGear({
    page,
    limit: 10,
    searchTerm,
    categoryId,
    condition,
  });

  if (isLoading) {
    return <ProviderGearSkeleton />;
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        Failed to load your gear.
      </div>
    );
  }

  const gears = data?.data ?? [];
  const meta = data?.meta;

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          My Gear
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your rental equipment.
        </p>

      </section>

      {/* ================= Filters ================= */}

      <ProviderGearFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        condition={condition}
        setCondition={setCondition}
      />

      {/* ================= Table ================= */}

      {gears.length === 0 ? (
        <EmptyGearState />
      ) : (
        <ProviderGearTable
          gears={gears}
          meta={meta}
          page={page}
          setPage={setPage}
        />
      )}

    </main>
  );
}