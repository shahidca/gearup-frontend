import api from "./axios";

export interface Review {
  id: string;

  rating: number;

  comment: string;

  createdAt: string;

  customer: {
    id: string;
    name: string;
  };
}

export interface Gear {
  id: string;

  name: string;
  slug: string;
  description: string;

  brand: string;
  model: string;

  pricePerDay: number;

  stock: number;
  availableStock: number;

  images: string[];

  condition: string;

  category: {
    id: string;
    name: string;
    slug: string;
  };

  provider: {
    id: string;
    name: string;
    email: string;
  };

  reviews: Review[];
}

export interface GearResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
  };

  data: Gear[];
}

export interface TGearQuery {
  page?: number;
  limit?: number;

  searchTerm?: string;

  categoryId?: string;

  brand?: string;

  minPrice?: number;

  maxPrice?: number;

  condition?: string;

  sortBy?: string;

  sortOrder?: "asc" | "desc";
}

export const getGear = async (
  params?: TGearQuery
): Promise<GearResponse> => {
  const response = await api.get("/gear", {
    params,
  });

  return response.data;
};

export const getSingleGear = async (id: string) => {
  const response = await api.get(`/gear/${id}`);
  return response.data.data;
};