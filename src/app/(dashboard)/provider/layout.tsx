"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute role="PROVIDER">
      {children}
    </ProtectedRoute>
  );
}