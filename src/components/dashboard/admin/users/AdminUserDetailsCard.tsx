"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface AdminUserDetailsCardProps {
  user: any;
}

export default function AdminUserDetailsCard({
  user,
}: AdminUserDetailsCardProps) {
  const avatar =
    user.profileImage &&
    (user.profileImage.startsWith("http://") ||
      user.profileImage.startsWith("https://") ||
      user.profileImage.startsWith("/"))
      ? user.profileImage
      : "/images/avatar-placeholder.png";

  return (
    <section className="rounded-2xl border bg-card p-8">

      <div className="flex flex-col gap-8 md:flex-row">

        {/* Avatar */}

        <div className="flex justify-center">

          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">

            <Image
              src={avatar}
              alt={user.name}
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* User Info */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold">
            {user.name}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {user.email}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div>

              <p className="text-sm text-muted-foreground">
                Phone
              </p>

              <p className="font-medium">
                {user.phone || "N/A"}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Address
              </p>

              <p className="font-medium">
                {user.address || "N/A"}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Role
              </p>

              <Badge className="mt-1">
                {user.role}
              </Badge>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Status
              </p>

              <Badge
                variant={
                  user.status === "ACTIVE"
                    ? "default"
                    : "destructive"
                }
                className="mt-1"
              >
                {user.status}
              </Badge>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Joined
              </p>

              <p className="font-medium">
                {new Date(
                  user.createdAt
                ).toLocaleDateString()}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Last Updated
              </p>

              <p className="font-medium">
                {new Date(
                  user.updatedAt
                ).toLocaleDateString()}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}