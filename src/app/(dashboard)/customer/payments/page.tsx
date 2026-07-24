"use client";

import CustomerPaymentCard from "@/components/dashboard/customer/CustomerPaymentCard";
import { useCustomerPayments } from "@/hooks/useCustomer";


export default function CustomerPaymentsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useCustomerPayments();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading payments...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        Failed to load payment history.
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="py-20 text-center">
        No payments found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="text-muted-foreground">
          View all completed and pending payments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((payment: any) => (
          <CustomerPaymentCard
            key={payment.id}
            payment={payment}
          />
        ))}
      </div>

    </div>
  );
}