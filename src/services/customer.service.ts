import api from "./axios";

/* ======================================================
   Types
====================================================== */

export type TCustomerRentalQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: string;
};

export type TUpdateCustomerProfile = {
  name: string;
  phone: string;
  address: string;
  profileImage: string;
};

/* ======================================================
   Dashboard
====================================================== */

export const getCustomerDashboard = async () => {
  const response = await api.get(
    "/customer/dashboard"
  );
  console.log("Dashboard API Response:", response);
  return response.data.data;
};

/* ======================================================
   Rentals
====================================================== */

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

export const getCustomerRental = async (
  rentalId: string
) => {
  const response = await api.get(
    `/customer/rentals/${rentalId}`
  );

  return response.data.data;
};

/* ======================================================
   Rental Invoice
====================================================== */

export const getRentalInvoice = async (
  rentalId: string
) => {
  const response = await api.get(
    `/customer/rentals/${rentalId}/invoice`
  );

  return response.data.data;
};

/* ======================================================
   Payments
====================================================== */

export const getCustomerPayments = async () => {
  const response = await api.get(
    "/customer/payments"
  );

  return response.data.data;
};

/* ======================================================
   Profile
====================================================== */

export const getCustomerProfile = async () => {
  const response = await api.get(
    "/customer/profile"
  );

  return response.data.data;
};

export const updateCustomerProfile = async (
  payload: TUpdateCustomerProfile
) => {
  const response = await api.patch(
    "/customer/profile",
    payload
  );

  return response.data.data;
};