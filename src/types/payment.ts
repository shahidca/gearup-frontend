import { TRental } from "./rental";

export type TPaymentStatus =
  | "PENDING"
  | "COMPLETED"
  | "FAILED";

export type TPaymentMethod =
  | "CARD";

export interface TPayment {
  id: string;

  rentalOrderId: string;

  rentalOrder?: TRental;

  transactionId?: string | null;

  paymentIntentId?: string | null;

  amount: number;

  currency: string;

  paymentMethod?: TPaymentMethod | null;

  status: TPaymentStatus;

  paidAt?: string | null;

  createdAt: string;

  updatedAt: string;
}