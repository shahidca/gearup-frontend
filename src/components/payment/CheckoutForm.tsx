"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useConfirmPayment } from "@/hooks/usePayment";

interface CheckoutFormProps {
  paymentIntentId?: string;
  rental?: {
    id?: string;
    totalAmount?: number | string;
  };
}

export default function CheckoutForm({
  paymentIntentId,
  rental,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useConfirmPayment();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // 1. Confirm Stripe Payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        toast.error(error.message || "Payment failed. Please try again.");
        setLoading(false);
        return;
      }

      // 2. Ensure Stripe status is strictly 'succeeded'
      if (paymentIntent && paymentIntent.status === "succeeded") {
        const targetIntentId = paymentIntent.id || paymentIntentId;

        if (targetIntentId) {
          // Send payment confirmation to backend
          await mutateAsync(targetIntentId);

          router.refresh();
          router.push("/customer/rentals");
        } else {
          toast.error("Payment Intent ID is missing.");
        }
      } else {
        toast.error("Payment was not completed. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const amountDisplay = rental?.totalAmount
    ? `৳${Number(rental.totalAmount).toLocaleString()}`
    : "";

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Card Payment</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={!stripe || loading}
        >
          {loading
            ? "Processing Payment..."
            : `Pay ${amountDisplay}`.trim()}
        </Button>
      </form>
    </div>
  );
}