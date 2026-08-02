"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import { customerDashboardNav } from "@/constants/customer-dashboard-nav";
import { providerDashboardNav } from "@/constants/provider-dashboard-nav";
import { adminDashboardNav } from "@/constants/admin-dashboard-nav";

export default function SidebarNav() {
  const pathname = usePathname();
  

  const { data: user } = useCurrentUser();


  let navigation = customerDashboardNav;

  if (user?.role === "PROVIDER") {
    navigation = providerDashboardNav;
  }

  if (user?.role === "ADMIN") {
    navigation = adminDashboardNav;
  }

  return (
    <nav className="space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
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