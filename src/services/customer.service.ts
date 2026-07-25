import api from "./axios";

export type TCustomerRentalQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: string;
};

export const getCustomerDashboard = async () => {
  const response = await api.get("/customer/dashboard");

  return response.data.data;
};

export const getCustomerRentals = async (
  query?: TCustomerRentalQuery
) => {
  const response = await api.get(
    "/customer/rentals",
    {
      params: query,
    }
  );

  return response.data;
};

export const getCustomerPayments = async () => {
  const response = await api.get(
    "/customer/payments"
  );

  return response.data.data;
};

export const getCustomerProfile = async () => {
  const response = await api.get(
    "/customer/profile"
  );

  return response.data.data;
};

export const updateCustomerProfile = async (
  data: {
    name?: string;
    phone?: string;
    address?: string;
    profileImage?: string;
  }
) => {
  const response = await api.patch(
    "/customer/profile",
    data
  );

  return response.data.data;
};

export const getCustomerRental = async (
  rentalId: string
) => {
  const response = await api.get(
    `/customer/rentals/${rentalId}`
  );

  return response.data.data;
};

/* ===========================
   Rental Invoice
=========================== */

export const getRentalInvoice = async (
  rentalId: string
) => {
  const response = await api.get(
    `/customer/rentals/${rentalId}/invoice`
  );

  return response.data.data;
};