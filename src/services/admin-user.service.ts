import axiosInstance from "@/services/axios";

export type TUserQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  role?: string;
  status?: string;
};

export const getAllUsers = async (
  query: TUserQuery
) => {
  const { data } = await axiosInstance.get(
    "/admin/users",
    {
      params: query,
    }
  );

  return data.data;
};

export const updateUserStatus = async (
  userId: string,
  status: "ACTIVE" | "SUSPENDED"
) => {
  const { data } = await axiosInstance.patch(
    `/admin/users/${userId}`,
    {
      status,
    }
  );

  return data.data;
};

export const getSingleUser = async (
  userId: string
) => {
  const res = await axiosInstance.get(
    `/admin/users/${userId}`
  );

  return res.data.data;
};