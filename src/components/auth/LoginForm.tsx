"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { useLogin } from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Email */}

        <div className="space-y-2">
          <label className="text-sm font-semibold">
            Email Address
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 rounded-xl"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div className="space-y-2">
          <label className="text-sm font-semibold">
            Password
          </label>

          <PasswordInput
            placeholder="Enter your password"
            className="h-12 rounded-xl"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground">
            <Checkbox
              checked={watch("remember")}
              onCheckedChange={(checked) =>
                setValue(
                  "remember",
                  Boolean(checked)
                )
              }
            />

            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary transition hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}

        <Button
          type="submit"
          className="mt-2 h-12 w-full rounded-xl text-base font-semibold"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending
            ? "Signing In..."
            : "Sign In"}
        </Button>

        {/* Register */}

        <div className="pt-2 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary transition hover:underline"
          >
            Create Account
          </Link>
        </div>
      </form>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />

        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Or continue with
        </span>

        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social Login */}

      <SocialLogin />
    </>
  );
}