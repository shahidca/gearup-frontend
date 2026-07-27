"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { UseMutationResult } from "@tanstack/react-query";
import type { TUser } from "@/types/user";

interface ProviderProfileFormProps {
  profile: TUser;
  updateProfile: UseMutationResult<
    unknown,
    Error,
    {
      name?: string;
      phone?: string;
      address?: string;
      profileImage?: string;
    }
  >;
}

type TProviderProfileForm = {
  name: string;
  phone: string;
  address: string;
  profileImage: string;
};

export default function ProviderProfileForm({
  profile,
  updateProfile,
}: ProviderProfileFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<TProviderProfileForm>();

  useEffect(() => {
    reset({
      name: profile.name ?? "",
      phone: profile.phone ?? "",
      address: profile.address ?? "",
      profileImage:
        profile.profileImage ?? "",
    });
  }, [profile, reset]);

  const onSubmit = (
    data: TProviderProfileForm
  ) => {
    updateProfile.mutate(data, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border bg-card p-8 shadow-sm"
    >
      <h2 className="mb-8 text-2xl font-bold">
        Edit Profile
      </h2>

      <div className="grid gap-6">
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <Input
            placeholder="Full Name"
            {...register("name", {
              required:
                "Full name is required",
            })}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            value={profile.email}
            disabled
            readOnly
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <Input
            placeholder="+8801XXXXXXXXX"
            {...register("phone")}
          />
        </div>

        {/* Address */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            placeholder="Your Address"
            {...register("address")}
          />
        </div>

        {/* Profile Image */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>

          <Input
            placeholder="https://example.com/avatar.jpg"
            {...register(
              "profileImage"
            )}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          type="submit"
          disabled={
            updateProfile.isPending ||
            !isDirty
          }
        >
          {updateProfile.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </form>
  );
}