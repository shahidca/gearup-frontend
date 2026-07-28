import {
  LayoutDashboard,
  User,
  Package,
  ClipboardList,
} from "lucide-react";

export const providerDashboardNav = [
  {
    title: "Dashboard",
    href: "/provider/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/provider/profile",
    icon: User,
  },
  {
    title: "Gear",
    href: "/provider/gear",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/provider/orders",
    icon: ClipboardList,
  },
];