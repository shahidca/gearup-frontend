"use client";

import AdminProfileCard from "@/components/dashboard/admin/AdminProfileCard";
import AdminProfileForm from "@/components/dashboard/admin/AdminProfileForm";
import AdminProfileSkeleton from "@/components/dashboard/admin/AdminProfileSkeleton";


import {
  useAdminProfile,
  useUpdateAdminProfile,
} from "@/hooks/useAdmin";

export default function AdminProfilePage() {
  const {
    data,
    isLoading,
    isError,
  } = useAdminProfile();

  const updateProfile =
    useUpdateAdminProfile();

  if (isLoading) {
    return <AdminProfileSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load profile.
      </div>
    );
  }

  return (
    <main className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          Admin Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your administrator account.
        </p>

      </section>

      <div className="grid gap-8 lg:grid-cols-3">

        <AdminProfileCard
          profile={data}
        />

        <div className="lg:col-span-2">

          <AdminProfileForm
            profile={data}
            updateProfile={updateProfile}
          />

        </div>

      </div>

    </main>
  );
}