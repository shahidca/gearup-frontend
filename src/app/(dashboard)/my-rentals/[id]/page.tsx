"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";

import {
      CalendarDays,
      Package,
      CreditCard,
      User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCancelRental } from "@/hooks/useRental";
import { useRentalDetails } from "@/hooks/useRentalDetails";

export default function RentalDetailsPage({
      params,
}: {
      params: Promise<{ id: string }>;
}) {
      const { id } = use(params);

      const {
            data: rental,
            isLoading,
            isError,
      } = useRentalDetails(id);

      const {
            mutate: cancelRental,
            isPending,
      } = useCancelRental();

      if (isLoading) {
            return (
                  <div className="container py-20">
                        Loading rental...
                  </div>
            );
      }

      if (isError || !rental) {
            return (
                  <div className="container py-20">
                        Rental not found.
                  </div>
            );
      }

      const item = rental.rentalItems[0];
      const gear = item.gearItem;
      const router = useRouter();

      return (
            <div className="mx-auto max-w-7xl space-y-8 py-10">

                  {/* Header */}

                  <div className="flex items-center justify-between">

                        <div>
                              <h1 className="text-3xl font-bold">
                                    Rental Details
                              </h1>

                              <p className="text-muted-foreground">
                                    Order #{rental.id}
                              </p>
                        </div>

                        <Badge>{rental.status}</Badge>

                  </div>

                  <div className="grid gap-8 lg:grid-cols-3">

                        {/* Left */}

                        <div className="space-y-6 lg:col-span-2">

                              <div className="overflow-hidden rounded-3xl border">

                                    <div className="relative aspect-video">

                                          <Image
                                                src={
                                                      gear.images?.[0] ??
                                                      "https://placehold.co/900x600"
                                                }
                                                alt={gear.name}
                                                fill
                                                className="object-cover"
                                          />

                                    </div>

                                    <div className="space-y-3 p-6">

                                          <h2 className="text-2xl font-bold">
                                                {gear.name}
                                          </h2>

                                          <p className="text-muted-foreground">
                                                {gear.description}
                                          </p>

                                    </div>

                              </div>

                              {/* Rental Information */}

                              <div className="rounded-3xl border p-6">

                                    <h3 className="mb-5 text-xl font-bold">
                                          Rental Information
                                    </h3>

                                    <div className="grid gap-5 md:grid-cols-2">

                                          <div className="flex gap-3">

                                                <CalendarDays />

                                                <div>

                                                      <p className="text-sm text-muted-foreground">
                                                            Rental Period
                                                      </p>

                                                      <p>
                                                            {new Date(
                                                                  rental.startDate
                                                            ).toLocaleDateString()}
                                                            {" - "}
                                                            {new Date(
                                                                  rental.endDate
                                                            ).toLocaleDateString()}
                                                      </p>

                                                </div>

                                          </div>

                                          <div className="flex gap-3">

                                                <Package />

                                                <div>

                                                      <p className="text-sm text-muted-foreground">
                                                            Quantity
                                                      </p>

                                                      <p>{item.quantity}</p>

                                                </div>

                                          </div>

                                          <div className="flex gap-3">

                                                <CreditCard />

                                                <div>

                                                      <p className="text-sm text-muted-foreground">
                                                            Payment
                                                      </p>

                                                      <p>
                                                            {rental.payment?.status ??
                                                                  "Not Paid"}
                                                      </p>

                                                </div>

                                          </div>

                                          <div className="flex gap-3">

                                                <User />

                                                <div>

                                                      <p className="text-sm text-muted-foreground">
                                                            Provider
                                                      </p>

                                                      <p>{gear.provider.name}</p>

                                                </div>

                                          </div>

                                    </div>

                              </div>

                        </div>

                        {/* Right */}

                        <div>

                              <div className="sticky top-24 rounded-3xl border bg-card p-6 shadow-sm">

                                    <h3 className="text-xl font-bold">
                                          Order Summary
                                    </h3>

                                    <div className="mt-6 space-y-4">

                                          <div className="flex justify-between">

                                                <span>Status</span>

                                                <Badge>
                                                      {rental.status}
                                                </Badge>

                                          </div>

                                          <div className="flex justify-between">

                                                <span>Total</span>

                                                <span className="font-bold text-primary">
                                                      $
                                                      {Number(
                                                            rental.totalAmount
                                                      ).toFixed(2)}
                                                </span>

                                          </div>

                                    </div>

                                    <div className="mt-8 space-y-3">

                                          {rental.status === "PLACED" && (
                                                <Button
                                                      variant="destructive"
                                                      className="w-full"
                                                      disabled={isPending}
                                                      onClick={() =>
                                                            cancelRental(rental.id)
                                                      }
                                                >
                                                      {isPending
                                                            ? "Cancelling..."
                                                            : "Cancel Rental"}
                                                </Button>
                                          )}

                                          {rental.status === "CONFIRMED" && (
                                                <Button
                                                      className="w-full"
                                                      onClick={() =>
                                                            router.push(`/payment/${rental.id}`)
                                                      }
                                                >
                                                      Pay Now
                                                </Button>
                                          )}

                                          <Link href="/my-rentals">
                                                <Button
                                                      variant="outline"
                                                      className="w-full"
                                                >
                                                      Back
                                                </Button>
                                          </Link>

                                    </div>

                              </div>

                        </div>

                  </div>

            </div>
      );
}