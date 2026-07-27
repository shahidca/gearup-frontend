import api from "./axios";

/* ===============================
   Types
================================ */

export type TCreateWishlist = {
  gearItemId: string;
};

/* ===============================
   Get My Wishlist
================================ */

export const getMyWishlist = async () => {
  const response = await api.get("/wishlist");

  return response.data.data;
};

/* ===============================
   Add to Wishlist
================================ */

export const createWishlist = async (
  payload: TCreateWishlist
) => {
  const response = await api.post(
    "/wishlist",
    payload
  );

  return response.data.data;
};

/* ===============================
   Remove Wishlist
================================ */

export const deleteWishlist = async (
  gearId: string
) => {
  const response = await api.delete(
    `/wishlist/${gearId}`
  );

  return response.data.data;
};