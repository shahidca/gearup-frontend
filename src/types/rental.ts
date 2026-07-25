export interface TRental {
      id: string;
      status: string;
      startDate: string;
      endDate: string;
      totalAmount: number;

      payment?: {
            id: string;
            status: string;
            amount: number;
      } | null;

      rentalItems: {
            id: string;
            quantity: number;
            pricePerDay: number;

            gearItem: {
                  id: string;
                  name: string;
                  description?: string;
                  images: string[];
                  brand?: string;
                  model?: string;
                  condition?: string;
                  pricePerDay: number;
                  availableStock?: number;

                  category?: {
                        id: string;
                        name: string;
                  };

                  provider?: {
                        id: string;
                        name: string;
                        email: string;
                        phone?: string;
                        address?: string;
                        profileImage?: string;
                  };
            };
      }[];

      customer?: {
            id: string;
            name: string;
            email: string;
      };
}