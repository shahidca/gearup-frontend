"use client";



import ProfileSkeleton from "@/components/dashboard/provider/profile/ProfileSkeleton";
import ProviderAccountStats from "@/components/dashboard/provider/profile/ProviderAccountStats";
import ProviderProfileCard from "@/components/dashboard/provider/profile/ProviderProfileCard";
import ProviderProfileForm from "@/components/dashboard/provider/profile/ProviderProfileForm";

import { useProviderProfile } from "@/hooks/useProviderProfile";

export default function ProviderProfilePage() {
  const {
    data,
    isLoading,
    isError,
  } = useProviderProfile();

  if (isLoading) {
    return <ProfileSkeleton />;
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
          Provider Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account information.
        </p>

      </section>

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="space-y-8">

          <ProviderProfileCard
            profile={data}
          />

          <ProviderAccountStats />

        </div>

        <div className="lg:col-span-2">

          <ProviderProfileForm
            profile={data}
          />

        </div>

      </div>

    </main>
  );
}