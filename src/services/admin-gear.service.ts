import axiosInstance from "@/services/axios";

export type TGearQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
};

export const getAllGear = async (
  query: TGearQuery
) => {
  const { data } = await axiosInstance.get(
    "/admin/gear",
    {
      params: query,
    }
  );

  return data.data;
};

export const getSingleGear = async (
  gearId: string
) => {
  const { data } =
    await axiosInstance.get(
      `/admin/gear/${gearId}`
    );

  return data.data;
};

export const updateGear = async (
  gearId: string,
  payload: Record<string, unknown>
) => {
  const { data } =
    await axiosInstance.patch(
      `/admin/gear/${gearId}`,
      payload
    );

  return data.data;
};

export const deleteGear = async (
  gearId: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/admin/gear/${gearId}`
    );

  return data.data;
};