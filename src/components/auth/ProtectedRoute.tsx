"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { TUserRole } from "@/types/user";
import { getDashboardRoute } from "@/utils/dashboard-redirect";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: TUserRole;
}

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    data: user,
    isLoading,
  } = useCurrentUser();

  useEffect(() => {
    if (isLoading) return;

    // Not logged in
    if (!user) {
      router.replace(
        `/login?redirect=${encodeURIComponent(pathname)}`
      );
      return;
    }

    // Wrong role
    if (role && user.role !== role) {
      router.replace(getDashboardRoute(user.role));
    }
  }, [user, role, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-4xl font-bold text-primary-foreground shadow-xl"
          >
            G
          </motion.div>

          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Checking your session...
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Please wait...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  if (role && user.role !== role) {
    return null;
  }

  return <>{children}</>;
}