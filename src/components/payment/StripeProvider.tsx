"use client";

import { ReactNode, useMemo } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

interface StripeProviderProps {
  clientSecret: string;
  children: ReactNode;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function StripeProvider({
  clientSecret,
  children,
}: StripeProviderProps) {
  const options = useMemo(
    () => ({
      clientSecret,
      appearance: {
        theme: "stripe" as const,
        variables: {
          colorPrimary: "#0f766e",
          borderRadius: "12px",
        },
      },
    }),
    [clientSecret]
  );

  if (!clientSecret) {
    return null;
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}