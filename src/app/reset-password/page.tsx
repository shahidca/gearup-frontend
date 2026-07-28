"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { Loader2, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useResetPassword } from "@/hooks/useAuth";

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();

  const token = useMemo(
    () => searchParams.get("token") ?? "",
    [searchParams]
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordForm>();

  const { mutate, isPending } =
    useResetPassword();

  const onSubmit = (
    data: ResetPasswordForm
  ) => {
    mutate({
      token,
      password: data.password,
    });
  };

  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-bold">
            Invalid Reset Link
          </h1>

          <p className="mt-3 text-muted-foreground">
            This password reset link is invalid or missing its token.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">

      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">

            <Lock className="h-8 w-8 text-primary" />

          </div>

          <h1 className="text-3xl font-bold">
            Reset Password
          </h1>

          <p className="mt-2 text-muted-foreground">
            Enter your new password below.
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <div>

            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>

            <Input
              type="password"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message:
                    "Minimum 8 characters",
                },
              })}
            />

            {errors.password && (
              <p className="mt-2 text-sm text-destructive">
                {errors.password.message}
              </p>
            )}

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <Input
              type="password"
              placeholder="********"
              {...register(
                "confirmPassword",
                {
                  validate: (value) =>
                    value === watch("password") ||
                    "Passwords do not match",
                }
              )}
            />

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-destructive">
                {
                  errors.confirmPassword
                    .message
                }
              </p>
            )}

          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </Button>

        </form>

      </div>

    </main>
  );
}