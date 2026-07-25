"use client";

import CustomerProfileCard from "@/components/dashboard/customer/CustomerProfileCard";
import CustomerProfileForm from "@/components/dashboard/customer/CustomerProfileForm";
import CustomerProfileSkeleton from "@/components/dashboard/customer/CustomerProfileSkeleton";

import {
  useCustomerProfile,
  useUpdateCustomerProfile,
} from "@/hooks/useCustomer";

export default function CustomerProfilePage() {
  const {
    data,
    isLoading,
    isError,
  } = useCustomerProfile();

  const updateProfile =
    useUpdateCustomerProfile();

  if (isLoading) {
    return <CustomerProfileSkeleton />;
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
          My Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your personal information.
        </p>

      </section>

      <div className="grid gap-8 lg:grid-cols-3">

        <CustomerProfileCard
          profile={data}
        />

        <div className="lg:col-span-2">

          <CustomerProfileForm
            profile={data}
            updateProfile={updateProfile}
          />

        </div>

      </div>

    </main>
  );
}