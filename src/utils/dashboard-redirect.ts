import type { TUserRole } from "@/types/user";

export function getDashboardRoute(
  role?: TUserRole
) {

  switch(role){

    case "ADMIN":
      return "/admin/dashboard";

    case "PROVIDER":
      return "/provider/dashboard";

    case "CUSTOMER":
      return "/dashboard";

    default:
      return "/";

  }

}