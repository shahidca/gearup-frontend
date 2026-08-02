"use client";

import { use } from "react";
import { Loader2 } from "lucide-react";

import PaymentForm from "@/components/payment/PaymentForm";
import { useSingleRental } from "@/hooks/useRental";

export default function PaymentPage({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) {
  const { rentalId } = use(params);

  const {
    data: rental,
    isLoading,
  } = useSingleRental(rentalId);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!rental) {
    return (
      <div className="py-20 text-center">
        Rental not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl py-16">
      <h1 className="mb-8 text-3xl font-bold">
        Complete Payment
      </h1>

      <PaymentForm rental={rental} />
    </div>
  );
}