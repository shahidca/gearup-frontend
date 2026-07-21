"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui/button";
import { confirmPayment } from "@/services/payment.service";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } =
      await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

    if (error) {
      alert(error.message);

      setLoading(false);

      return;
    }

    if (
      paymentIntent &&
      paymentIntent.status === "succeeded"
    ) {
      try {
        await confirmPayment(
          paymentIntent.id
        );

        alert("Payment Successful!");

        router.push("/my-rentals");
      } catch {
        alert(
          "Payment succeeded but backend confirmation failed."
        );
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <PaymentElement />

      <Button
        type="submit"
        className="w-full"
        disabled={!stripe || loading}
      >
        {loading
          ? "Processing..."
          : "Pay Securely"}
      </Button>
    </form>
  );
}