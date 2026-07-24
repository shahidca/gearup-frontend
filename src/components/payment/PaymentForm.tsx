"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import StripeProvider from "./StripeProvider";
import CheckoutForm from "./CheckoutForm";

import { Separator } from "@/components/ui/separator";

import { useCreatePayment } from "@/hooks/usePayment";

interface PaymentFormProps {
  rental: any;
}

export default function PaymentForm({
  rental,
}: PaymentFormProps) {
  const item = rental.rentalItems?.[0];
  const gear = item?.gearItem;

  const [clientSecret, setClientSecret] =
    useState("");

  const [paymentIntentId, setPaymentIntentId] =
    useState("");

  const { mutateAsync, isPending } =
    useCreatePayment();

  useEffect(() => {
    const initializePayment = async () => {
      try {
        const result =
          await mutateAsync(rental.id);

        setClientSecret(
          result.clientSecret
        );

        setPaymentIntentId(
          result.paymentIntentId
        );
      } catch (error) {
        console.error(error);
      }
    };

    initializePayment();
  }, [mutateAsync, rental.id]);

  if (isPending || !clientSecret) {
    return (
      <div className="flex h-80 items-center justify-center rounded-3xl border bg-card">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Payment Summary
      </h2>

      <Separator className="my-6" />

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Gear</span>
          <span className="font-semibold">
            {gear?.name}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{item?.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Rental Days</span>
          <span>{item?.totalDays}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span>{rental.status}</span>
        </div>

        <div className="flex justify-between">
          <span>Total</span>

          <span className="text-xl font-bold text-primary">
            ৳
            {Number(
              rental.totalAmount
            ).toLocaleString()}
          </span>
        </div>

      </div>

      <Separator className="my-6" />

      <StripeProvider
        clientSecret={clientSecret}
      >
        <CheckoutForm
          paymentIntentId={
            paymentIntentId
          }
        />
      </StripeProvider>

    </div>
  );
}