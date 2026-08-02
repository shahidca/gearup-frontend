"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRegister } from "@/hooks/useAuth";
import SocialLogin from "./SocialLogin";
import {
  registerSchema,
  type TRegisterForm,
} from "@/validations/auth.validation";

export default function RegisterForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      role: "CUSTOMER",
      profileImage: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (
    data: TRegisterForm
  ) => {
    const {
      confirmPassword,
      ...payload
    } = data;

    registerMutation.mutate(payload);
  };

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-xl">

      <div className="mb-8 text-center">

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <UserPlus className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-3xl font-bold">
          Create Account
        </h2>

        <p className="mt-3 text-muted-foreground">
          Join GearUp and start renting premium outdoor gear.
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <Input
              placeholder="John Doe"
              {...register("name")}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <Input
              placeholder="john@example.com"
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <Input
              placeholder="+880..."
              {...register("phone")}
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Role
            </label>

            <select
              {...register("role")}
              className="flex h-11 w-full rounded-xl border bg-background px-4"
            >
              <option value="CUSTOMER">
                Customer
              </option>

              <option value="PROVIDER">
                Provider
              </option>

            </select>

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            placeholder="Your Address"
            {...register("address")}
          />

          {errors.address && (
            <p className="mt-2 text-sm text-destructive">
              {errors.address.message}
            </p>
          )}

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Profile Image URL (Optional)
          </label>

          <Input
            placeholder="https://..."
            {...register("profileImage")}
          />

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="relative">

              <Input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                {...register("password")}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

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

            <div className="relative">

              <Input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                {...register(
                  "confirmPassword"
                )}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-destructive">
                {
                  errors.confirmPassword
                    .message
                }
              </p>
            )}

          </div>

        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl text-base font-semibold"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>

        <p className="pt-2 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary transition hover:underline"
          >
            Sign In
          </Link>
        </p>

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

    </div>
  );
}