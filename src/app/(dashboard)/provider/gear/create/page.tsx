"use client";

import CreateGearForm from "@/components/dashboard/provider/gear/CreateGearForm";



export default function CreateGearPage() {
  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          Add New Gear
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new rental gear for your inventory.
        </p>

      </section>

      {/* ================= Form ================= */}

      <CreateGearForm />

    </main>
  );
}