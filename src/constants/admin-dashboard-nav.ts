import {
  LayoutDashboard,
  User,
  Users,
  Package,
  ClipboardList,
} from "lucide-react";

export const adminDashboardNav = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: User,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Gear",
    href: "/admin/gear",
    icon: Package,
  },
  {
    title: "Rentals",
    href: "/admin/rentals",
    icon: ClipboardList,
  },
];