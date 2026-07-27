"use client";

import type { ReactElement } from "react";

interface ProviderStatCardProps {
  title: string;
  value: string | number;
  icon: ReactElement;
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
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h2 className="truncate text-3xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        <div
          aria-label={title}
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
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