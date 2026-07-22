export interface TDashboardStats {
  totalUsers: number;
  totalGear: number;
  totalRentals: number;
  totalRevenue: number;

  activeRentals: number;
  completedRentals: number;

  customers: number;
  providers: number;

  recentRentals: {
    id: string;

    customer: {
      name: string;
    };

    rentalItems: {
      gearItem: {
        name: string;
      };
    }[];

    payment: {
      amount: number;
      status: string;
    } | null;

    status: string;

    createdAt: string;
  }[];
}