"use client";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function GearSpecifications({
  gear,
}: Props) {
  const specs = [
    {
      label: "Brand",
      value: gear.brand || "N/A",
    },
    {
      label: "Model",
      value: gear.model || "N/A",
    },
    {
      label: "Category",
      value: gear.category.name,
    },
    {
      label: "Condition",
      value: gear.condition,
    },
    {
      label: "Stock",
      value: gear.stock,
    },
    {
      label: "Available",
      value: gear.availableStock,
    },
  ];

  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Specifications
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {specs.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <span className="font-medium text-muted-foreground">
              {item.label}
            </span>

            <span className="font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}