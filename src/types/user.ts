export type TUserRole =
  | "CUSTOMER"
  | "PROVIDER"
  | "ADMIN";

export type TUserStatus =
  | "ACTIVE"
  | "SUSPENDED";

export interface TUser {
  id: string;

  name: string;

  email: string;

  phone?: string | null;

  address?: string | null;

  profileImage?: string | null;

  role: TUserRole;

  status: TUserStatus;

  createdAt: string;

  updatedAt: string;
}

export interface ICurrentUser {
  id: string;

  name: string;

  email: string;

  role: TUserRole;

  status: TUserStatus;
}

export interface TUpdateProfile {
  name: string;

  phone: string;

  address: string;

  profileImage: string;
}