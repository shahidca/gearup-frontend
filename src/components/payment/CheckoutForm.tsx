"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui/button";

import { useConfirmPayment } from "@/hooks/usePayment";

interface CheckoutFormProps {
  rental: any;
}

export default function CheckoutForm({
  rental,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { mutateAsync } = useConfirmPayment();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    // =============================
    // Confirm Stripe Payment
    // =============================

    const { error, paymentIntent } =
      await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

    if (error) {
      console.error(error);

      setLoading(false);
      return;
    }

    // =============================
    // Notify Backend
    // =============================

    if (paymentIntent?.id) {
      try {
        await mutateAsync(paymentIntent.id);

        router.push("/customer/rentals");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Card Payment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <PaymentElement />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={!stripe || loading}
        >
          {loading
            ? "Processing Payment..."
            : `Pay ৳${Number(
                rental.totalAmount
              ).toLocaleString()}`}
        </Button>
      </form>

    </div>
  );
}