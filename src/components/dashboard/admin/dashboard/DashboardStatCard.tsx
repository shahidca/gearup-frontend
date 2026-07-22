"use client";

import { ReactNode } from "react";

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function DashboardStatCard({
  title,
  value,
  icon,
}: DashboardStatCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-primary/10 p-3">
          {icon}
        </div>
      </div>
    </div>
  );
}