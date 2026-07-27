"use client";

import Image from "next/image";
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type { TUser } from "@/types/user";

interface ProviderProfileCardProps {
  profile: TUser;
}

export default function ProviderProfileCard({
  profile,
}: ProviderProfileCardProps) {
  const image =
    profile.profileImage &&
    (profile.profileImage.startsWith("http://") ||
      profile.profileImage.startsWith("https://") ||
      profile.profileImage.startsWith("/"))
      ? profile.profileImage
      : "/images/avatar-placeholder.png";

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      {/* Avatar */}

      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
          <Image
            src={image}
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

      {/* Information */}

      <div className="mt-8 space-y-5">
        <InfoRow
          icon={<Mail className="h-5 w-5" />}
          label="Email"
          value={profile.email}
        />

        <InfoRow
          icon={<Phone className="h-5 w-5" />}
          label="Phone"
          value={profile.phone || "Not added"}
        />

        <InfoRow
          icon={<MapPin className="h-5 w-5" />}
          label="Address"
          value={profile.address || "Not added"}
        />

        <InfoRow
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Role"
          value={profile.role}
        />

        <InfoRow
          icon={<CalendarDays className="h-5 w-5" />}
          label="Joined"
          value={
            profile.createdAt
              ? new Date(
                  profile.createdAt
                ).toLocaleDateString()
              : "-"
          }
        />
      </div>
    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
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