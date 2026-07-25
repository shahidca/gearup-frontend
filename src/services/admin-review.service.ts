import axiosInstance from "@/services/axios";

export type TReviewQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
};

export const getAllReviews = async (
  query: TReviewQuery = {}
) => {
  const { data } = await axiosInstance.get(
    "/admin/reviews",
    {
      params: query,
    }
  );

  return data.data;
};

export const getSingleReview = async (
  reviewId: string
) => {
  const { data } =
    await axiosInstance.get(
      `/admin/reviews/${reviewId}`
    );

  return data.data;
};

export const deleteReview = async (
  reviewId: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/admin/reviews/${reviewId}`
    );

  return data.data;
};