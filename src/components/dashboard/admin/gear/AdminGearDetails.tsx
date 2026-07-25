"use client";

import Image from "next/image";

interface AdminGearDetailsProps {
  gear: any;
}

export default function AdminGearDetails({
  gear,
}: AdminGearDetailsProps) {
  return (
    <section className="rounded-2xl border bg-card p-8">
      <div className="grid gap-8 lg:grid-cols-2">

        <div className="relative aspect-square overflow-hidden rounded-xl border">
          <Image
            src={
              gear.images?.[0] &&
              (gear.images[0].startsWith("http://") ||
                gear.images[0].startsWith("https://") ||
                gear.images[0].startsWith("/"))
                ? gear.images[0]
                : "/images/gear-placeholder.png"
            }
            alt={gear.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">

          <div>
            <p className="text-sm text-muted-foreground">
              Gear Name
            </p>

            <h2 className="text-3xl font-bold">
              {gear.name}
            </h2>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Description
            </p>

            <p>{gear.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-muted-foreground">
                Category
              </p>

              <p>{gear.category?.name}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Provider
              </p>

              <p>{gear.provider?.name}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Price / Day
              </p>

              <p>${Number(gear.pricePerDay).toFixed(2)}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Stock
              </p>

              <p>{gear.stock}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Available
              </p>

              <p>{gear.availableStock}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Condition
              </p>

              <p>{gear.condition}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}