"use client";

import ProviderProfileCard from "@/components/dashboard/provider/ProviderProfileCard";
import ProviderProfileForm from "@/components/dashboard/provider/ProviderProfileForm";
import ProviderProfileSkeleton from "@/components/dashboard/provider/ProviderProfileSkeleton";

import {
  useProviderProfile,
  useUpdateProviderProfile,
} from "@/hooks/useProviderProfile";

export default function ProviderProfilePage() {
  const {
    data: profile,
    isLoading,
    isError,
  } = useProviderProfile();

  const updateProfile =
    useUpdateProviderProfile();

  if (isLoading) {
    return <ProviderProfileSkeleton />;
  }

  if (isError || !profile) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-8 py-6">
          <h2 className="text-lg font-semibold text-destructive">
            Failed to load profile
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Provider Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your business profile and personal information.
        </p>
      </section>

      {/* Profile */}

      <div className="grid gap-8 lg:grid-cols-3">
        <ProviderProfileCard
          profile={profile}
        />

        <div className="lg:col-span-2">
          <ProviderProfileForm
            profile={profile}
            updateProfile={updateProfile}
          />
        </div>
      </div>
    </main>
  );
}