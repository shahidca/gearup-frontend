import api from "./axios";

export interface TContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendContactMessage = async (
  payload: TContactPayload
) => {
  const response = await api.post(
    "/contact",
    payload
  );

  return response.data;
};