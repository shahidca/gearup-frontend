"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";

import CheckoutForm from "./CheckoutForm";
import { useCreatePayment } from "@/hooks/usePayment";

// 1. Ensure publishable key exists
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PaymentForm({ rental }: { rental: any }) {
  const [clientSecret, setClientSecret] = useState<string>("");
  const { mutateAsync: createPayment, isPending } = useCreatePayment();

  useEffect(() => {
    if (rental?.id) {
      createPayment(rental.id)
        .then((res: any) => {
          // Adjust response parsing according to your backend response object
          const secret = res?.data?.clientSecret || res?.clientSecret;
          if (secret) {
            setClientSecret(secret);
          }
        })
        .catch((err) => {
          console.error("Failed to create payment intent:", err);
        });
    }
  }, [rental?.id, createPayment]);

  // Show spinner while waiting for clientSecret
  if (isPending || !clientSecret) {
    return (
      <div className="flex h-48 flex-col items-center justify-center gap-3 rounded-2xl border bg-card">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Initializing payment gateway...</p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm rental={rental} />
    </Elements>
  );
}