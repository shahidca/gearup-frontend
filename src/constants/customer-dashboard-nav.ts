import {
  LayoutDashboard,
  User,
  Package,
  CreditCard,
} from "lucide-react";

export const customerDashboardNav = [
  {
    title: "Dashboard",
    href: "/customer",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/customer/profile",
    icon: User,
  },
  {
    title: "My Rentals",
    href: "/customer/rentals",
    icon: Package,
  },
  {
    title: "Payments",
    href: "/customer/payments",
    icon: CreditCard,
  },
];