"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import SidebarNav from "./SidebarNav";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { logoutUser } from "@/services/auth.service";

export default function DashboardSidebar() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data: user } = useCurrentUser();

  const handleLogout = async () => {
    try {
      await logoutUser();

      queryClient.clear();

      toast.success("Logged out successfully.");

      router.replace("/login");
    } catch (error) {
      console.error(error);

      toast.error("Logout failed.");
    }
  };

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}

      <div className="border-b p-6">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
            G
          </div>

          <div>
            <h2 className="text-lg font-bold">
              GearUp
            </h2>

            <p className="text-xs text-muted-foreground">
              Rental Marketplace
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto p-6">
        <SidebarNav />
      </div>

      {/* User */}

      <div className="border-t p-6">
        <div className="rounded-2xl border bg-muted/40 p-4">
          <h3 className="font-semibold">
            {user?.name ?? "Guest"}
          </h3>

          <p className="text-sm text-muted-foreground">
            {user?.role ?? ""}
          </p>
        </div>

        <Button
          variant="outline"
          className="mt-4 w-full"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}