import api from "./axios";

export interface RentalItemPayload {
  gearItemId: string;
  quantity: number;
}

export interface CreateRentalPayload {
  startDate: string;
  endDate: string;
  items: RentalItemPayload[];
}

export const createRental = async (
  payload: CreateRentalPayload
) => {
  const response = await api.post("/rentals", payload);

  return response.data.data;
};

/* ---------------- My Rentals ---------------- */

export const getMyRentals = async () => {
  const response = await api.get("/rentals/my-rentals");

  return response.data.data;
};

export const getRentalById = async (
  rentalId: string
) => {
  const response = await api.get(
    `/rentals/${rentalId}`
  );

  return response.data.data;
};

export const cancelRental = async (
  rentalId: string
) => {
  const response = await api.patch(
    `/rentals/${rentalId}/cancel`
  );

  return response.data.data;
};