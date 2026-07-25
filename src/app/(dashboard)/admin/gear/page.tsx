"use client";

import { useState } from "react";

import { useAdminGear } from "@/hooks/useAdminGear";

import AdminGearTable from "@/components/dashboard/admin/gear/AdminGearTable";
import AdminGearFilters from "@/components/dashboard/admin/gear/AdminGearFilters";
import AdminGearSkeleton from "@/components/dashboard/admin/gear/AdminGearSkeleton";
import EmptyGearState from "@/components/dashboard/admin/gear/EmptyGearState";

export default function AdminGearPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: gear = [],
    isLoading,
    isError,
  } = useAdminGear();

  if (isLoading) {
    return <AdminGearSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load gear.
      </div>
    );
  }

  const filteredGear = gear.filter((item: any) => {
    const keyword = searchTerm.toLowerCase();

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.provider?.name
        ?.toLowerCase()
        .includes(keyword) ||
      item.category?.name
        ?.toLowerCase()
        .includes(keyword)
    );
  });

  return (
    <main className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          Gear Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          View and manage every gear item in the platform.
        </p>

      </section>

      <AdminGearFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredGear.length ? (
        <AdminGearTable
          gear={filteredGear}
        />
      ) : (
        <EmptyGearState />
      )}

    </main>
  );
}