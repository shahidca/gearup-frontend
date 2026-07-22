import axiosInstance from "@/services/axios";

export type TRentalQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: string;
};

export const getAllRentals = async (
  query: TRentalQuery
) => {
  const { data } = await axiosInstance.get(
    "/admin/rentals",
    {
      params: query,
    }
  );

  return data.data;
};

export const getSingleRental = async (
  rentalId: string
) => {
  const { data } = await axiosInstance.get(
    `/admin/rentals/${rentalId}`
  );

  return data.data;
};

export const updateRentalStatus = async (
  rentalId: string,
  status: string
) => {
  const { data } = await axiosInstance.patch(
    `/admin/rentals/${rentalId}`,
    {
      status,
    }
  );

  return data.data;
};