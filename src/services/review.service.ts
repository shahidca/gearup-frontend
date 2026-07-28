import api from "./axios";

/* ===========================
   Types
=========================== */

export interface TCreateReview {
  gearItemId: string;
  rating: number;
  comment?: string;
}

export interface TUpdateReview {
  rating: number;
  comment?: string;
}

/* ===========================
   My Reviews
=========================== */

export const getMyReviews =
  async () => {
    const response =
      await api.get(
        "/reviews/me"
      );

    return response.data.data;
  };

/* ===========================
   Single Review
=========================== */

export const getSingleReview =
  async (id: string) => {
    const response =
      await api.get(
        `/reviews/${id}`
      );

    return response.data.data;
  };

/* ===========================
   Gear Reviews
=========================== */

export const getGearReviews =
  async (
    gearId: string
  ) => {
    const response =
      await api.get(
        `/gear/${gearId}/reviews`
      );

    return response.data.data;
  };

/* ===========================
   Create Review
=========================== */

export const createReview =
  async (
    payload: TCreateReview
  ) => {
    const response =
      await api.post(
        "/reviews",
        payload
      );

    return response.data.data;
  };

/* ===========================
   Update Review
=========================== */

export const updateReview =
  async (
    id: string,
    payload: TUpdateReview
  ) => {
    const response =
      await api.patch(
        `/reviews/${id}`,
        payload
      );

    return response.data.data;
  };

/* ===========================
   Delete Review
=========================== */

export const deleteReview =
  async (id: string) => {
    const response =
      await api.delete(
        `/reviews/${id}`
      );

    return response.data.data;
  };

  /* ===========================
   Homepage Reviews
=========================== */

export interface THomepageReview {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;

  customer: {
    id: string;
    name: string;
    profileImage: string | null;
  };

  gearItem: {
    id: string;
    name: string;
  };
}

export const getHomepageReviews = async (): Promise<
  THomepageReview[]
> => {
  const response = await api.get("/reviews");

  return response.data.data;
};