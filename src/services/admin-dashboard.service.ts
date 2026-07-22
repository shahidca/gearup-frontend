import axiosInstance from "@/services/axios";

export const getDashboardStats =
  async () => {
    const { data } =
      await axiosInstance.get(
        "/admin/dashboard"
      );

    return data.data;
  };