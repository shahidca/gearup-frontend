"use client";

import { use, useEffect, useState } from "react";

import { useSingleRental } from "@/hooks/useRental";
import { useCreatePayment } from "@/hooks/usePayment";

import PaymentForm from "@/components/payment/PaymentForm";
import StripeProvider from "@/components/payment/StripeProvider";
import CheckoutForm from "@/components/payment/CheckoutForm";

export default function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const {
    data: rental,
    isLoading,
    isError,
  } = useSingleRental(id);

  const [clientSecret, setClientSecret] = useState("");

  const { mutate: createPayment } = useCreatePayment();

  useEffect(() => {
    if (!rental) return;

    if (rental.payment?.status === "COMPLETED") return;

    createPayment(rental.id, {
      onSuccess: (data) => {
        setClientSecret(data.clientSecret);
      },
    });
  }, [rental, createPayment]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 text-center">
        Loading payment...
      </div>
    );
  }

  if (isError || !rental) {
    return (
      <div className="container mx-auto py-20 text-center">
        Rental not found.
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Complete Payment
        </h1>

        <p className="text-muted-foreground">
          Secure payment powered by Stripe
        </p>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <PaymentForm rental={rental} />

        {clientSecret ? (
          <StripeProvider clientSecret={clientSecret}>
            <CheckoutForm rental={rental} />
          </StripeProvider>
        ) : (
          <div className="flex min-h-[350px] items-center justify-center rounded-3xl border">
            Preparing payment...
          </div>
        )}
      </section>
    </main>
  );
}