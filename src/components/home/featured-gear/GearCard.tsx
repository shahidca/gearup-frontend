"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Gear } from "@/services/gear.service";

interface GearCardProps {
  gear: Gear;
}

export default function GearCard({
  gear,
}: GearCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-3xl border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={
            gear.images?.[0] ||
            "https://placehold.co/600x400?text=GearUp"
          }
          alt={gear.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {gear.category.name}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-bold">
            {gear.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {gear.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Package className="h-4 w-4" />

            {gear.availableStock} Available
          </span>

          <span className="font-semibold text-primary">
            ${gear.pricePerDay}/day
          </span>
        </div>

        <Link href={`/gear/${gear.id}`}>
          <Button className="w-full">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}