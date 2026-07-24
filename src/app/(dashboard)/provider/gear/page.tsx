"use client";

import { useState } from "react";


import { useProviderGear } from "@/hooks/useProvider";
import GearTable from "@/components/dashboard/provider/gear/GearTable";
import GearSkeleton from "@/components/dashboard/provider/gear/GearSkeleton";
import GearSearch from "@/components/dashboard/provider/gear/GearSearch";
import GearFilters from "@/components/dashboard/provider/gear/GearFilters";
import EmptyGear from "@/components/dashboard/provider/gear/EmptyGear";

export default function ProviderGearPage() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [categoryId, setCategoryId] =
    useState("");

  const [condition, setCondition] =
    useState("");

  const [page, setPage] =
    useState(1);

  const { data, isLoading } =
    useProviderGear({
      page,
      limit: 10,
      searchTerm,
      categoryId,
      condition,
    });

  if (isLoading) {
    return <GearSkeleton />;
  }

  const gear = data?.data ?? [];

  return (
    <div className="space-y-6">
      <div>

        <h1 className="text-3xl font-bold">
          My Gear
        </h1>

        <p className="text-muted-foreground mt-2">
          Manage your rental gear.
        </p>

      </div>

      <GearSearch
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <GearFilters
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        condition={condition}
        setCondition={setCondition}
      />

      {gear.length === 0 ? (
        <EmptyGear />
      ) : (
        <GearTable gear={gear} />
      )}
    </div>
  );
}