"use client";

import Image from "next/image";

interface UserDetailsCardProps {
  user: any;
}

export default function UserDetailsCard({
  user,
}: UserDetailsCardProps) {
  return (
    <section className="rounded-2xl border bg-card p-8">

      <div className="flex flex-col gap-8 md:flex-row">

        <div className="relative h-32 w-32 overflow-hidden rounded-full border">

          <Image
            src={
              user.profileImage?.trim()
                ? user.profileImage
                : "/images/avatar-placeholder.png"
            }
            alt={user.name}
            fill
            className="object-cover"
          />

        </div>

        <div className="grid flex-1 gap-6 md:grid-cols-2">

          <div>

            <p className="text-sm text-muted-foreground">
              Name
            </p>

            <h3 className="text-lg font-semibold">
              {user.name}
            </h3>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Email
            </p>

            <h3 className="text-lg font-semibold">
              {user.email}
            </h3>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Phone
            </p>

            <h3 className="text-lg font-semibold">
              {user.phone || "-"}
            </h3>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Role
            </p>

            <h3 className="text-lg font-semibold">
              {user.role}
            </h3>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <h3 className="text-lg font-semibold">
              {user.status}
            </h3>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Joined
            </p>

            <h3 className="text-lg font-semibold">
              {new Date(
                user.createdAt
              ).toLocaleDateString()}
            </h3>

          </div>

          <div className="md:col-span-2">

            <p className="text-sm text-muted-foreground">
              Address
            </p>

            <h3 className="text-lg font-semibold">
              {user.address || "-"}
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}