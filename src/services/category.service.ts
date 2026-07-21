import api from "./axios";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;

  _count: {
    gearItems: number;
  };
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get("/categories");

  return response.data.data;
};