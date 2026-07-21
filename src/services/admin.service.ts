import api from "./axios";

export const getAllUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data.data;
};

export const updateUserStatus = async (
  id: string,
  status: string
) => {
  const res = await api.patch(
    `/admin/users/${id}`,
    {
      status,
    }
  );

  return res.data.data;
};

export const getAllGear = async () => {
  const res = await api.get("/admin/gear");
  return res.data.data;
};

export const getAllRentals = async () => {
  const res = await api.get("/admin/rentals");
  return res.data.data;
};

export const getDashboardStats = async () => {
  const res = await api.get("/admin/dashboard");

  return res.data.data;
};