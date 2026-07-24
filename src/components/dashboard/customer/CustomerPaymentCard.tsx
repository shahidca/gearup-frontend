"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface CustomerPaymentCardProps {
  payment: any;
}

export default function CustomerPaymentCard({
  payment,
}: CustomerPaymentCardProps) {
  const rental = payment.rentalOrder;
  const item = rental?.rentalItems?.[0];
  const gear = item?.gearItem;

  const badgeColor = () => {
    switch (payment.status) {
      case "COMPLETED":
        return "bg-green-600";

      case "PENDING":
        return "bg-yellow-500";

      case "FAILED":
        return "bg-red-600";

      default:
        return "";
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg">
      <div className="relative h-52 bg-muted">
        <Image
          src={
            gear?.images?.[0] ??
            "https://placehold.co/700x500"
          }
          alt={gear?.name ?? "Gear"}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-1 text-xl font-bold">
            {gear?.name}
          </h2>

          <Badge className={badgeColor()}>
            {payment.status}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Amount:</strong> ৳
            {Number(payment.amount).toLocaleString()}
          </p>

          <p>
            <strong>Currency:</strong>{" "}
            {payment.currency}
          </p>

          <p>
            <strong>Method:</strong>{" "}
            {payment.paymentMethod ?? "N/A"}
          </p>

          <p>
            <strong>Transaction:</strong>{" "}
            {payment.transactionId ?? "N/A"}
          </p>

          <p>
            <strong>Paid At:</strong>{" "}
            {payment.paidAt
              ? new Date(
                  payment.paidAt
                ).toLocaleDateString()
              : "Not Paid"}
          </p>
        </div>
      </div>
    </div>
  );
}