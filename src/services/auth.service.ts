import api from "./axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  profileImage?: string;
}

export const loginUser = async (
  payload: LoginPayload
) => {
  const response = await api.post(
    "/auth/login",
    payload
  );

  return response.data.data;
};

export const registerUser = async (
  payload: RegisterPayload
) => {
  const response = await api.post(
    "/auth/register",
    payload
  );

  return response.data.data;
};

/* =========================================
   Social Login
========================================= */

export const loginWithGoogle = () => {
  window.location.href =
    `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
};

export const loginWithGithub = () => {
  window.location.href =
    `${process.env.NEXT_PUBLIC_API_URL}/auth/github`;
};

export const forgotPassword = async (
  email: string
) => {
  const response = await api.post(
    "/auth/forgot-password",
    {
      email,
    }
  );

  return response.data.data;
};

export const resetPassword = async (
  token: string,
  password: string
) => {
  const response = await api.post(
    "/auth/reset-password",
    {
      token,
      password,
    }
  );

  return response.data.data;
};

export const getCurrentUser =
  async () => {
    const response =
      await api.get("/auth/me");

    return response.data.data;
  };

export const logoutUser =
  async () => {
    const response =
      await api.post("/auth/logout");

    return response.data.data;
  };