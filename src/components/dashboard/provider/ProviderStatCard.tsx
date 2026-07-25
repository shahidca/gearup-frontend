"use client";

import { ReactNode } from "react";

interface ProviderStatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function ProviderStatCard({
  title,
  value,
  icon,
}: ProviderStatCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div className="space-y-2">

          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            {value}
          </h2>

        </div>

        <div
          className="
            rounded-2xl
            bg-primary/10
            p-4
            text-primary
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-primary
            group-hover:text-primary-foreground
          "
        >
          {icon}
        </div>

      </div>
    </div>
  );
}