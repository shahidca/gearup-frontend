"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNav } from "@/constants/dashboard-nav";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {dashboardNav.map((item) => {
        const Icon = item.icon;

        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <Icon className="h-5 w-5" />

            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}