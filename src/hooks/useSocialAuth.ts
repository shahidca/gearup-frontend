"use client";

import { loginWithGithub, loginWithGoogle } from "@/services/auth.service";

export function useSocialAuth() {
  return {
    loginWithGoogle,
    loginWithGithub,
  };
}