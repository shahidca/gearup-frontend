import api from "./axios";

export const getProviderOrders = async () => {
  const response = await api.get("/provider/orders");
  return response.data.data;
};

export const updateProviderOrder = async (
  id: string,
  status: string
) => {
  const response = await api.patch(
    `/provider/orders/${id}`,
    {
      status,
    }
  );

  return response.data.data;
};