"use client";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function GearDescription({
  gear,
}: Props) {
  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Description
      </h2>

      <p className="leading-8 text-muted-foreground whitespace-pre-line">
        {gear.description}
      </p>
    </section>
  );
}