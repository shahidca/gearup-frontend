"use client";

import { useParams } from "next/navigation";

import { useSingleAdminUser } from "@/hooks/useAdminUsers";
import AdminUserDetailsCard from "@/components/dashboard/admin/users/AdminUserDetailsCard";
import AdminUserActionsCard from "@/components/dashboard/admin/users/AdminUserActionsCard";


export default function AdminUserDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const {
    data: user,
    isLoading,
    isError,
  } = useSingleAdminUser(id);

  if (isLoading) {
    return (
      <div className="py-20">
        Loading user...
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="py-20">
        User not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          User Details
        </h1>

        <p className="text-muted-foreground">
          View complete user profile.
        </p>
      </div>

     <div className="grid gap-8 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <AdminUserDetailsCard user={user} />
  </div>

  <div>
    <AdminUserActionsCard user={user} />
  </div>

</div>
    </div>
  );
}