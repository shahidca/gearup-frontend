import axiosInstance from "@/services/axios";

/* ======================================================
   Provider Dashboard
====================================================== */

export const getProviderDashboard = async () => {
  const { data } = await axiosInstance.get(
    "/provider/dashboard"
  );

  return data.data;
};