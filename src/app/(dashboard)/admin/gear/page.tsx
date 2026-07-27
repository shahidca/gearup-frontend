"use client";

import { useMemo, useState } from "react";

import { useAdminGear } from "@/hooks/useAdminGear";

import AdminGearFilters from "@/components/dashboard/admin/gear/AdminGearFilters";
import AdminGearSkeleton from "@/components/dashboard/admin/gear/AdminGearSkeleton";
import AdminGearTable from "@/components/dashboard/admin/gear/AdminGearTable";
import EmptyGearState from "@/components/dashboard/admin/gear/EmptyGearState";

export default function AdminGearPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: gear = [],
    isLoading,
    isError,
  } = useAdminGear();

  const filteredGear = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return gear;

    return gear.filter((item: any) => {
      return (
        (item.name ?? "")
          .toLowerCase()
          .includes(keyword) ||
        (item.provider?.name ?? "")
          .toLowerCase()
          .includes(keyword) ||
        (item.category?.name ?? "")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [gear, searchTerm]);

  if (isLoading) {
    return <AdminGearSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Failed to load gear.
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>
        <h1 className="text-3xl font-bold">
          Gear Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          View and manage every gear item on the platform.
        </p>
      </section>

      {/* ================= Search ================= */}

      <AdminGearFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* ================= Table ================= */}

      {filteredGear.length > 0 ? (
        <AdminGearTable gear={filteredGear} />
      ) : (
        <EmptyGearState />
      )}

    </main>
  );
}