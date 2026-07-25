"use client";

import Link from "next/link";
import { PackagePlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EmptyGearState() {
  return (
    <div className="rounded-2xl border border-dashed bg-card py-20">

      <div className="mx-auto flex max-w-md flex-col items-center text-center">

        {/* Icon */}

        <div className="mb-6 rounded-full bg-primary/10 p-5">
          <PackagePlus className="h-12 w-12 text-primary" />
        </div>

        {/* Title */}

        <h2 className="text-2xl font-bold">
          No Gear Found
        </h2>

        {/* Description */}

        <p className="mt-3 text-muted-foreground">
          You haven't added any rental gear yet.
          Start building your inventory by adding
          your first gear item.
        </p>

        {/* Button */}

        <Link
          href="/provider/gear/create"
          className="mt-8"
        >
          <Button>
            <PackagePlus className="mr-2 h-4 w-4" />
            Add First Gear
          </Button>
        </Link>

      </div>

    </div>
  );
}