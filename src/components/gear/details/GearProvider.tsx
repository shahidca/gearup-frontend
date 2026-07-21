"use client";

import { Mail, User } from "lucide-react";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function GearProvider({
  gear,
}: Props) {
  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Provider
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-primary" />

          <span className="font-medium">
            {gear.provider.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />

          <span className="text-muted-foreground">
            {gear.provider.email}
          </span>
        </div>

      </div>
    </section>
  );
}