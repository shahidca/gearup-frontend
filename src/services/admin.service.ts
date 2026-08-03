import api from "./axios";

/* ===========================
   Dashboard
=========================== */

export const getAdminDashboard = async () => {
  const response = await api.get("/admin/dashboard");

  return response.data.data;
};

/* ===========================
   Users
=========================== */

export interface TAdminUserQuery {
  page?: number;
  limit?: number;
  searchTerm?: string;
  role?: string;
  status?: string;
}

export const getAdminUsers = async (query: TAdminUserQuery) => {
  const response = await api.get("/admin/users", {
    params: query,
  });

  return response.data;
};

export const getSingleAdminUser = async (id: string) => {
  const response = await api.get(`/admin/users/${id}`);

  return response.data.data;
};

export const updateAdminUserStatus = async (
  id: string,
  status: string
) => {
  const response = await api.patch(`/admin/users/${id}`, {
    status,
  });

  return response.data.data;
};

/* ===========================
   Gear
=========================== */

export interface TAdminGearQuery {
  page?: number;
  limit?: number;
  searchTerm?: string;
}

export const getAdminGear = async (query?: TAdminGearQuery) => {
  const response = await api.get("/admin/gear", {
    params: query,
  });

  return response.data.data;
};

export const getSingleAdminGear = async (id: string) => {
  const response = await api.get(`/admin/gear/${id}`);

  return response.data.data;
};

export const updateAdminGear = async (
  id: string,
  payload: Record<string, unknown>
) => {
  const response = await api.patch(`/admin/gear/${id}`, payload);

  return response.data.data;
};

export const deleteAdminGear = async (id: string) => {
  const response = await api.delete(`/admin/gear/${id}`);

  return response.data.data;
};

/* ===========================
   Rentals
=========================== */

export const getAdminRentals = async () => {
  const response = await api.get("/admin/rentals");

  return response.data.data;
};

/* ===========================
   Profile
=========================== */

export const getAdminProfile = async () => {
  const response = await api.get("/admin/profile");

  return response.data.data;
};

export const updateAdminProfile = async (payload: {
  name?: string;
  phone?: string;
  address?: string;
  profileImage?: string;
}) => {
  const response = await api.patch("/admin/profile", payload);

  return response.data.data;
};

/* ===========================
   Update User Role
=========================== */

export const updateAdminUserRole = async (
  id: string,
  role: string
) => {
  const response = await api.patch(`/admin/users/${id}/role`, {
    role,
  });

  return response.data.data;
};

/* ===========================
   Rental Status
=========================== */

export const updateAdminRentalStatus = async (
  id: string,
  status: string
) => {
  const response = await api.patch(`/admin/rentals/${id}`, {
    status,
  });

  return response.data.data;
};

/* ===========================
   Payments
=========================== */

export const getAdminPayments = async () => {
  const response = await api.get("/admin/payments");

  return response.data.data;
};

export const getSingleAdminPayment = async (id: string) => {
  const response = await api.get(`/admin/payments/${id}`);

  return response.data.data;
};

/* ===========================
   Categories
=========================== */

export const getAdminCategories = async () => {
  const response = await api.get("/admin/categories");

  return response.data.data;
};

export const createAdminCategory = async (payload: {
  name: string;
  image?: string;
}) => {
  const response = await api.post("/admin/categories", payload);

  return response.data.data;
};

export const updateAdminCategory = async (
  id: string,
  payload: {
    name?: string;
    image?: string;
  }
) => {
  const response = await api.patch(`/admin/categories/${id}`, payload);

  return response.data.data;
};

export const deleteAdminCategory = async (id: string) => {
  const response = await api.delete(`/admin/categories/${id}`);

  return response.data.data;
};

/* ===========================
   Auth
=========================== */

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};

/* ===========================
   Aliases for Compatibility
=========================== */

export { updateAdminUserStatus as updateUserStatus };
export { getSingleAdminUser as getSingleUser };