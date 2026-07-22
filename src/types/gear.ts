export interface TGear {
  id: string;
  name: string;
  description: string;
  brand: string | null;
  pricePerDay: number | string;
  stock: number;
  availableStock: number;
  condition: string;
}