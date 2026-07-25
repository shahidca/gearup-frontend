"use client";

import Image from "next/image";

import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

interface ProviderProfileCardProps {
  profile: any;
}

export default function ProviderProfileCard({
  profile,
}: ProviderProfileCardProps) {
  return (
    <section className="rounded-2xl border bg-card p-6">

      {/* Avatar */}

      <div className="flex flex-col items-center">

        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20">
          <Image
            src={
              profile.profileImage &&
                (profile.profileImage.startsWith("http://") ||
                  profile.profileImage.startsWith("https://") ||
                  profile.profileImage.startsWith("/"))
                ? profile.profileImage
                : "/images/avatar-placeholder.png"
            }
            alt={profile.name}
            fill
            className="object-cover"
          />


        </div>

        <h2 className="mt-4 text-xl font-bold">
          {profile.name}
        </h2>

        <p className="text-sm text-muted-foreground">
          Provider
        </p>

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
          value={profile.phone || "Not Added"}
        />

        <InfoRow
          icon={<MapPin className="h-5 w-5" />}
          label="Address"
          value={profile.address || "Not Added"}
        />

        <InfoRow
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Role"
          value={profile.role}
        />

        <InfoRow
          icon={<Calendar className="h-5 w-5" />}
          label="Joined"
          value={new Date(
            profile.createdAt
          ).toLocaleDateString()}
        />

      </div>

    </section>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">

      <div className="rounded-lg bg-primary/10 p-2 text-primary">
        {icon}
      </div>

      <div>

        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <p className="font-medium break-all">
          {value}
        </p>

      </div>

    </div>
  );
}