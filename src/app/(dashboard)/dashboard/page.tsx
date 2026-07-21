"use client";

import {
  useAdminGear,
  useAdminRentals,
  useAdminUsers,
} from "@/hooks/useAdmin";

export default function AdminDashboard() {
  const { data: users } = useAdminUsers();

  const { data: gear } = useAdminGear();

  const { data: rentals } =
    useAdminRentals();

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border p-6">
          <h2>Total Users</h2>

          <p className="text-4xl font-bold">
            {users?.length ?? 0}
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2>Total Gear</h2>

          <p className="text-4xl font-bold">
            {gear?.length ?? 0}
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2>Total Rentals</h2>

          <p className="text-4xl font-bold">
            {rentals?.length ?? 0}
          </p>
        </div>

      </div>

    </div>
  );
}