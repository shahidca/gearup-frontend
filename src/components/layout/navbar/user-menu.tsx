"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, User } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { logoutUser } from "@/services/auth.service";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function UserMenu() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: user } = useCurrentUser();

  const handleLogout = async () => {
    try {
      await logoutUser();

      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

      toast.success("Logged out successfully");

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-3 rounded-xl border bg-background px-3 py-2 transition hover:bg-accent">
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold leading-none">
            {user.name}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {user.role}
          </p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuItem>
          <Link
            href="/dashboard"
            className="flex w-full items-center gap-2"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            href="/profile"
            className="flex w-full items-center gap-2"
          >
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}