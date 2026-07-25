"use client";

import { use } from "react";

import { useSingleAdminGear } from "@/hooks/useAdminGear";

import AdminGearDetails from "@/components/dashboard/admin/gear/AdminGearDetails";

export default function AdminGearDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

const {
  data: gear,
  isLoading,
  isError,
} = useSingleAdminGear(id);

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading gear...
      </div>
    );
  }

  if (isError || !gear) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Gear not found.
      </div>
    );
  }

  return (
    <main className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">
          Gear Details
        </h1>

        <p className="mt-2 text-muted-foreground">
          View complete gear information.
        </p>
      </section>

      <AdminGearDetails gear={gear} />
    </main>
  );
}