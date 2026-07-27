"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  useDeleteWishlist,
  useMyWishlist,
} from "@/hooks/useWishlist";

export default function WishlistPage() {
  const {
    data: wishlist,
    isLoading,
  } = useMyWishlist();

  const {
    mutate: removeWishlist,
    isPending,
  } = useDeleteWishlist();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading wishlist...
      </div>
    );
  }

  if (!wishlist?.length) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">

        <Heart className="h-16 w-16 text-muted-foreground" />

        <h1 className="text-3xl font-bold">
          Your Wishlist is Empty
        </h1>

        <p className="text-muted-foreground">
          Save your favourite gear and rent it later.
        </p>

        <Link href="/gear">
          <Button>
            Browse Gear
          </Button>
        </Link>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          My Wishlist
        </h1>

        <p className="text-muted-foreground">
          {wishlist.length} saved item
          {wishlist.length > 1 ? "s" : ""}
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {wishlist.map((item: any) => {
          const gear = item.gearItem;

          return (
            <Card
              key={item.id}
              className="overflow-hidden rounded-3xl"
            >

              <div className="relative aspect-video">

                <Image
                  src={
                    gear.images?.[0] ??
                    "/placeholder.png"
                  }
                  alt={gear.name}
                  fill
                  className="object-cover"
                />

              </div>

              <CardContent className="space-y-4 p-5">

                <div>

                  <h2 className="line-clamp-1 text-xl font-bold">
                    {gear.name}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {gear.category?.name}
                  </p>

                </div>

                <div className="space-y-1 text-sm">

                  <p>
                    <span className="font-medium">
                      Provider:
                    </span>{" "}
                    {gear.provider?.name}
                  </p>

                  <p>
                    <span className="font-medium">
                      Price:
                    </span>{" "}
                    ৳{gear.pricePerDay}/day
                  </p>

                  <p>
                    <span className="font-medium">
                      Condition:
                    </span>{" "}
                    {gear.condition}
                  </p>

                </div>

                <div className="flex gap-3">

                  <Link
                    href={`/gear/${gear.id}`}
                    className="flex-1"
                  >
                    <Button className="w-full">
                      View Details
                    </Button>
                  </Link>

                  <Button
                    variant="destructive"
                    size="icon"
                    disabled={isPending}
                    onClick={() =>
                      removeWishlist(
                        gear.id
                      )
                    }
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>

                </div>

              </CardContent>

            </Card>
          );
        })}

      </div>

    </div>
  );
}