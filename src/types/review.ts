export interface TReviewUser {
  id: string;
  name: string;
  email: string;
}

export interface TReviewCategory {
  id: string;
  name: string;
  slug: string;
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

  comment: string;

  createdAt: string;

  updatedAt: string;

  user: TReviewUser;

  gearItem: TReviewGear;
}