"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Save } from "lucide-react";
import { UseMutationResult } from "@tanstack/react-query";
import type { TUpdateCustomerProfile } from "@/services/customer.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { TUser } from "@/types/user";

type TProfileForm = TUpdateCustomerProfile;

interface CustomerProfileFormProps {
  profile: TUser;
  updateProfile: UseMutationResult<
    TUser,
    Error,
    TProfileForm,
    unknown
  >;
}

export default function CustomerProfileForm({
  profile,
  updateProfile,
}: CustomerProfileFormProps) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<TProfileForm>({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      profileImage: "",
    },
  });

  useEffect(() => {
    reset({
      name: profile.name,
      phone: profile.phone ?? "",
      address: profile.address ?? "",
      profileImage: profile.profileImage ?? "",
    });
  }, [profile, reset]);

  const onSubmit = (data: TProfileForm) => {
    updateProfile.mutate(data);
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
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <Input
            {...register("name")}
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            value={profile.email}
            disabled
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <Input
            {...register("phone")}
            placeholder="+880..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            {...register("address")}
            placeholder="Your Address"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>

          <Input
            {...register("profileImage")}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          disabled={updateProfile.isPending}
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