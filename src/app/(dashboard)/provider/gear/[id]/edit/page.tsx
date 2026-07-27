"use client";

import { use } from "react";

import EditGearForm from "@/components/dashboard/provider/gear/EditGearForm";

interface EditGearPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditGearPage({
  params,
}: EditGearPageProps) {
  const { id } = use(params);

  return (
    <main className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Edit Gear
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update your rental gear information.
        </p>
      </section>

      {/* Form */}

      <EditGearForm gearId={id} />
    </main>
  );
}