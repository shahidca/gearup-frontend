export interface TGearCategory {
  id: string;
  name: string;
}

export interface TGearProvider {
  id: string;
  name: string;
  email?: string;
}

export interface TGear {
  id: string;

  name: string;

  description: string;

  brand: string | null;

  pricePerDay: number | string;

  stock: number;

  availableStock: number;

  condition: string;

  images?: string[];

  category?: TGearCategory;

  provider?: TGearProvider;

  createdAt?: string;

  updatedAt?: string;
}