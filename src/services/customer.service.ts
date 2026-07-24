import api from "./axios";

export const getCustomerDashboard = async () => {
  const response = await api.get("/customer/dashboard");
  return response.data.data;
};

export const getCustomerRentals = async () => {
  const response = await api.get("/customer/rentals");
  return response.data;
};

export const getCustomerPayments = async () => {
  const response = await api.get("/customer/payments");
  return response.data.data;
};

export const getCustomerProfile = async () => {
  const response = await api.get("/customer/profile");
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