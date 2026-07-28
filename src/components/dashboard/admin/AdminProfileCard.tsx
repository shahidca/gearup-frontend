"use client";

import Image from "next/image";
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { TUser } from "@/types/user";

interface AdminProfileCardProps {
  profile: TUser;
}

export default function AdminProfileCard({
  profile,
}: AdminProfileCardProps) {
  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">

      <div className="flex flex-col items-center">

        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">

          <Image
            src={
              profile.profileImage &&
                !profile.profileImage.includes("drive.google.com")
                ? profile.profileImage
                : "/images/avatar.png"
            }
            alt={profile.name}
            fill
            className="object-cover"
          />

        </div>

        <h2 className="mt-5 text-2xl font-bold">
          {profile.name}
        </h2>

        <p className="text-muted-foreground">
          {profile.email}
        </p>

        <div className="mt-4 flex gap-3">

          <Badge>
            {profile.role}
          </Badge>

          <Badge
            variant={
              profile.status === "ACTIVE"
                ? "default"
                : "destructive"
            }
          >
            {profile.status}
          </Badge>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <InfoRow
          icon={<Mail className="h-5 w-5" />}
          label="Email"
          value={profile.email}
        />

        <InfoRow
          icon={<Phone className="h-5 w-5" />}
          label="Phone"
          value={profile.phone ?? "Not added"}
        />

        <InfoRow
          icon={<MapPin className="h-5 w-5" />}
          label="Address"
          value={profile.address ?? "Not added"}
        />

        <InfoRow
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Role"
          value={profile.role}
        />

        <InfoRow
          icon={<CalendarDays className="h-5 w-5" />}
          label="Joined"
          value={new Date(
            profile.createdAt
          ).toLocaleDateString()}
        />

      </div>

    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-1 text-primary">
        {icon}
      </div>

      <div>

        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">
          {value}
        </p>

      </div>

    </div>
  );
}