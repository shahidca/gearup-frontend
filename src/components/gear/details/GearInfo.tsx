"use client";

import {
  BadgeCheck,
  Package,
  Tag,
  ShieldCheck,
  User,
  Star,
} from "lucide-react";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function GearInfo({
  gear,
}: Props) {
  const available = gear.availableStock > 0;

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      {/* Category */}
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        {gear.category.name}
      </span>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold">
        {gear.name}
      </h1>

      {/* Rating (temporary) */}
      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span>4.8</span>
        <span>(24 Reviews)</span>
      </div>

      {/* Price */}
      <div className="mt-6">
        <span className="text-4xl font-bold text-primary">
          ${gear.pricePerDay}
        </span>

        <span className="ml-2 text-muted-foreground">
          / day
        </span>
      </div>

      {/* Divider */}
      <div className="my-6 border-t" />

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm">

        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          <span className="font-medium">Brand:</span>
          <span>{gear.brand || "N/A"}</span>
        </div>

        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-primary" />
          <span className="font-medium">Model:</span>
          <span>{gear.model || "N/A"}</span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="font-medium">Condition:</span>
          <span>{gear.condition}</span>
        </div>

        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-primary" />
          <span className="font-medium">Stock:</span>
          <span>{gear.stock}</span>
        </div>

        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-green-600" />
          <span className="font-medium">Available:</span>
          <span>{gear.availableStock}</span>
        </div>

        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <span className="font-medium">Provider:</span>
          <span>{gear.provider.name}</span>
        </div>

      </div>

      {/* Status */}
      <div className="mt-8">
        {available ? (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ✅ Available for Rent
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            ❌ Out of Stock
          </span>
        )}
      </div>

      {/* Short Description */}
      <div className="mt-8">
        <h3 className="font-semibold">
          Quick Overview
        </h3>

        <p className="mt-3 text-muted-foreground">
          {gear.description}
        </p>
      </div>

    </div>
  );
}