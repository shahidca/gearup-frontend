"use client";

import { useMemo, useState } from "react";

import CustomerPaymentCard from "@/components/dashboard/customer/CustomerPaymentCard";
import CustomerPaymentFilters from "@/components/dashboard/customer/CustomerPaymentFilters";
import CustomerPaymentSkeleton from "@/components/dashboard/customer/CustomerPaymentSkeleton";

import { useCustomerPayments } from "@/hooks/useCustomer";
import { TPayment } from "@/types/payment";



export default function CustomerPaymentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const {
    data,
    isLoading,
    isError,
  } = useCustomerPayments();

  const payments = useMemo(() => {
    if (!data) return [];

    return data.filter((payment: TPayment) => {
      const matchesSearch =
        payment.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        payment.rentalOrder?.rentalItems?.some((item) =>
          item.gearItem.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

      const matchesStatus =
        status === "ALL" ||
        payment.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, status]);

  if (isLoading) {
    return <CustomerPaymentSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load payment history.
      </div>
    );
  }

  return (
    <main className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="mt-2 text-muted-foreground">
          View all your completed and pending payments.
        </p>

      </section>

      <CustomerPaymentFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {payments.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-20 text-center">

          <h3 className="text-lg font-semibold">
            No payments found
          </h3>

          <p className="mt-2 text-muted-foreground">
            Try changing your search or filter.
          </p>

        </div>
      ) : (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {payments.map((payment: TPayment) => (
            <CustomerPaymentCard
              key={payment.id}
              payment={payment}
            />
          ))}

        </section>
      )}

    </main>
  );
}