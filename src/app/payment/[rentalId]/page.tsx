"use client";

import { use } from "react";

import PaymentForm from "@/components/payment/PaymentForm";

export default function PaymentPage({
  params,
}: {
  params: Promise<{ rentalId: string }>;
}) {
  const { rentalId } = use(params);

  return (
    <div className="container mx-auto max-w-3xl py-16">

      <h1 className="mb-8 text-3xl font-bold">
        Complete Payment
      </h1>

      <PaymentForm rentalOrderId={rentalId} />

    </div>
  );
}