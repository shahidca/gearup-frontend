export interface TRental {
      id: string;
      customer: {
            id: string;
            name: string;
            email: string;
      };

      rentalItems: {
            id: string;
            gearItem: {
                  id: string;
                  name: string;
            };
      }[];

      payment: {
            id: string;
            amount: number;
            status: string;
      } | null;

      startDate: string;
      endDate: string;

      totalAmount: number;

      status: string;

      createdAt: string;
}