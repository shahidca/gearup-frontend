"use client";

import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useRentalInvoice } from "@/hooks/useCustomer";

export default function InvoicePage() {
  const params = useParams();

  const rentalId = params.id as string;

  const {
    data: invoice,
    isLoading,
    isError,
  } = useRentalInvoice(rentalId);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading invoice...
      </div>
    );
  }

  if (isError || !invoice) {
    return (
      <div className="py-20 text-center">
        Invoice not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            GearUp
          </h1>

          <p className="text-muted-foreground">
            Rental Invoice
          </p>
        </div>

        <Button
          onClick={() => window.print()}
        >
          Print Invoice
        </Button>
      </div>

      {/* Invoice */}

      <div className="rounded-3xl border bg-card p-10 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Invoice Info */}

          <div>
            <h2 className="mb-3 text-lg font-semibold">
              Invoice Details
            </h2>

            <p>
              <strong>Invoice:</strong>{" "}
              {invoice.invoiceNumber}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(
                invoice.createdAt
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {invoice.payment.status}
            </p>
          </div>

          {/* Customer */}

          <div>
            <h2 className="mb-3 text-lg font-semibold">
              Customer
            </h2>

            <p>{invoice.customer.name}</p>

            <p>{invoice.customer.email}</p>

            <p>
              {invoice.customer.phone ??
                "N/A"}
            </p>
          </div>
        </div>

        {/* Items */}

        <div className="mt-10 overflow-hidden rounded-2xl border">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left">
                  Gear
                </th>

                <th className="px-6 py-4 text-center">
                  Qty
                </th>

                <th className="px-6 py-4 text-center">
                  Days
                </th>

                <th className="px-6 py-4 text-right">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              {invoice.rentalItems.map(
                (item: any) => (
                  <tr
                    key={item.id}
                    className="border-t"
                  >
                    <td className="px-6 py-4">
                      {
                        item.gearItem.name
                      }
                    </td>

                    <td className="px-6 py-4 text-center">
                      {item.quantity}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {item.rentalDays}
                    </td>

                    <td className="px-6 py-4 text-right">
                      ৳
                      {Number(
                        item.totalPrice
                      ).toLocaleString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Payment Summary */}

        <div className="mt-10 flex justify-end">
          <div className="w-80 space-y-4 rounded-xl border p-5">
            <div className="flex justify-between">
              <span>Total</span>

              <strong>
                ৳
                {Number(
                  invoice.payment.amount
                ).toLocaleString()}
              </strong>
            </div>

            <div className="flex justify-between">
              <span>Payment Status</span>

              <strong>
                {invoice.payment.status}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}