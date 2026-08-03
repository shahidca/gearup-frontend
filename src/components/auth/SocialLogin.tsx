"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import { toast } from "sonner"; 

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useSocialAuth } from "@/hooks/useSocialAuth";

export default function SocialLogin() {
  const router = useRouter();
  const { loginWithGoogle } = useSocialAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const user = await loginWithGoogle();

      if (user) {
        toast.success("Successfully logged in with Google!");
        router.push("/gear"); 
      }
    } catch (error: any) {
      console.error("Google Login Error:", error);
      toast.error(error?.message || "Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Google Button */}
      <div>
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full h-12 rounded-xl transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <FcGoogle className="mr-2 h-5 w-5" />
          )}
          {isLoading ? "Signing in..." : "Google"}
        </Button>
      </div>
    </div>
  );
}