"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useCancelRental } from "@/hooks/useRental";

interface RentalActionsProps {
  rental: any;
}

export default function RentalActions({
  rental,
}: RentalActionsProps) {
  const { mutate, isPending } = useCancelRental();

  const canCancel =
    rental.status === "PLACED";

  const canPay =
    rental.status === "CONFIRMED";

  const canDownload =
    rental.payment?.status === "COMPLETED";

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      {/* ================= Heading ================= */}

      <h2 className="mb-6 text-2xl font-bold">
        Rental Actions
      </h2>

      <div className="space-y-4">

        {/* ================= Pay ================= */}

        {canPay && (
          <Link
            href={`/customer/payment/${rental.id}`}
          >
            <Button className="w-full">
              Pay Now
            </Button>
          </Link>
        )}

        {/* ================= Cancel ================= */}

        {canCancel && (
          <Button
            variant="destructive"
            className="w-full"
            disabled={isPending}
            onClick={() => mutate(rental.id)}
          >
            {isPending
              ? "Cancelling..."
              : "Cancel Rental"}
          </Button>
        )}

        {/* ================= Invoice ================= */}

        {canDownload && (
          <Button
            variant="outline"
            className="w-full"
          >
            Download Invoice
          </Button>
        )}

      </div>

    </div>
  );
}