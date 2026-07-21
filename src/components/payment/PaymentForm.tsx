"use client";

import { useEffect, useState } from "react";

import { useCreatePayment } from "@/hooks/usePayment";

import StripeProvider from "@/providers/StripeProvider";
import CheckoutForm from "@/components/payment/CheckoutForm";

interface PaymentFormProps {
  rentalOrderId: string;
}

export default function PaymentForm({
  rentalOrderId,
}: PaymentFormProps) {
  const [clientSecret, setClientSecret] = useState("");

  const { mutate, isPending } = useCreatePayment();

  useEffect(() => {
    if (!rentalOrderId) return;

    mutate(rentalOrderId, {
      onSuccess: (data) => {
        setClientSecret(data.clientSecret);
      },

      onError: (error) => {
        console.error("Create Payment Error:", error);
      },
    });
  }, [mutate, rentalOrderId]);

  if (isPending) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold">
          Creating Payment...
        </h2>

        <p className="mt-2 text-muted-foreground">
          Please wait while we prepare your secure payment.
        </p>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold">
          Preparing Payment...
        </h2>

        <p className="mt-2 text-muted-foreground">
          Waiting for Stripe Payment Intent...
        </p>
      </div>
    );
  }

  return (
    <StripeProvider clientSecret={clientSecret}>
      <CheckoutForm />
    </StripeProvider>
  );
}