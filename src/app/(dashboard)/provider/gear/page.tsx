"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useProviderGear } from "@/hooks/useProviderGear";

import ProviderGearSkeleton from "@/components/dashboard/provider/gear/ProviderGearSkeleton";
import ProviderGearFilters from "@/components/dashboard/provider/gear/ProviderGearFilters";
import ProviderGearTable from "@/components/dashboard/provider/gear/ProviderGearTable";
import EmptyGearState from "@/components/dashboard/provider/gear/EmptyGearState";

export default function ProviderGearPage() {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const [categoryId, setCategoryId] = useState("");

  const [condition, setCondition] = useState("");

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
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-destructive">
            Failed to load gear
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  const gears = data?.data ?? [];

  const meta = data?.meta;

  return (
    <main className="space-y-8">

      {/* Header */}

      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            My Gear
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage your rental equipment.
          </p>

        </div>

        <Link href="/provider/gear/create">

          <Button>

            <Plus className="mr-2 h-4 w-4" />

            Add New Gear

          </Button>

        </Link>

      </section>

      {/* Filters */}

      <ProviderGearFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        condition={condition}
        setCondition={setCondition}
      />

      {/* Gear List */}

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