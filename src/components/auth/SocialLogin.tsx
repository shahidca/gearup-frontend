"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useSocialAuth } from "@/hooks/useSocialAuth";

export default function SocialLogin() {
  const { loginWithGoogle, loginWithGithub } =
    useSocialAuth();

  return (
    <div className="space-y-6">
      {/* Divider */}

      <div className="flex items-center gap-4">
        <Separator className="flex-1" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Or continue with
        </span>

        <Separator className="flex-1" />
      </div>

      {/* Social Buttons */}

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={loginWithGoogle}
          className="h-12 rounded-xl transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Google
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={loginWithGithub}
          className="h-12 rounded-xl transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <FaGithub className="mr-2 h-5 w-5" />
          GitHub
        </Button>
      </div>
    </div>
  );
}