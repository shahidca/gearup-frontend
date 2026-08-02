export interface TReviewCustomer {
  id: string;
  name: string;
  email?: string;
  profileImage?: string | null;
}

export interface TReviewCategory {
  id: string;
  name: string;
}

export interface TReviewGear {
  id: string;
  name: string;
  images: string[];
  category?: TReviewCategory;
}

export interface TReview {
  id: string;
  rating: number;
  comment?: string | null;
  customerId: string;
  gearItemId: string;
  createdAt: string;
  updatedAt: string;
  customer?: TReviewCustomer;
  gearItem?: TReviewGear;
}