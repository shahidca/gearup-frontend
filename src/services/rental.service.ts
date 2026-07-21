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
  const response = await api.post(
    "/rentals",
    payload
  );

  return response.data.data;
};