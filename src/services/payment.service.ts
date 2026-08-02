import api from "./axios";

export interface CreatePaymentResponse {
  clientSecret: string;
  paymentIntentId: string;

  payment: {
    id: string;
    status: string;
  };
}

export const createPayment = async (
  rentalOrderId: string
): Promise<CreatePaymentResponse> => {
  const res = await api.post("/payments/create", {
    rentalOrderId,
  });

  return res.data.data;
};

export const confirmPayment = async (
  paymentIntentId: string
) => {
  const res = await api.post("/payments/confirm", {
    paymentIntentId,
  });

  return res.data.data;
};

export const getMyPayments = async () => {
  const response = await api.get("/payments");
  return response.data.data;
};
