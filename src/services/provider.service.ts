import api from "./axios";

/* ======================================================
   Dashboard
====================================================== */

export const getProviderDashboard = async () => {
  const response = await api.get("/provider/dashboard");
  return response.data.data;
};

/* ======================================================
   Gear
====================================================== */

export type TProviderGearQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  categoryId?: string;
  condition?: string;
};

export const getProviderGear = async (
  query: TProviderGearQuery
) => {
  const response = await api.get(
    "/provider/gear",
    {
      params: query,
    }
  );

  return response.data;
};

export const getSingleProviderGear = async (
  id: string
) => {
  const response = await api.get(
    `/provider/gear/${id}`
  );

  return response.data.data;
};

export const createProviderGear = async (
  payload: Record<string, unknown>
) => {
  const response = await api.post(
    "/provider/gear",
    payload
  );

  return response.data.data;
};

export const updateProviderGear = async (
  id: string,
  payload: Record<string, unknown>
) => {
  const response = await api.patch(
    `/provider/gear/${id}`,
    payload
  );

  return response.data.data;
};

export const deleteProviderGear = async (
  id: string
) => {
  const response = await api.delete(
    `/provider/gear/${id}`
  );

  return response.data.data;
};

/* ======================================================
   Orders
====================================================== */

export const getProviderOrders = async () => {
  const response = await api.get(
    "/provider/orders"
  );

  return response.data.data;
};

export const getProviderOrderById = async (
  id: string
) => {
  const response = await api.get(
    `/provider/orders/${id}`
  );

  return response.data.data;
};

export const updateProviderOrder = async (
  id: string,
  status: string
) => {
  const response = await api.patch(
    `/provider/orders/${id}`,
    {
      status,
    }
  );

  return response.data.data;
};

/* ======================================================
   Provider Profile
====================================================== */

export const getProviderProfile = async () => {
  const response = await api.get(
    "/provider/profile"
  );

  return response.data.data;
};

export const updateProviderProfile = async (
  payload: {
    name?: string;
    phone?: string;
    address?: string;
    profileImage?: string;
  }
) => {
  const response = await api.patch(
    "/provider/profile",
    payload
  );

  return response.data.data;
};