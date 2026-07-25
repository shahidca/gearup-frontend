"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdateProviderProfile } from "@/hooks/useProviderProfile";



interface ProviderProfileFormProps {
  profile: any;
}

interface FormValues {
  name: string;
  phone: string;
  address: string;
  profileImage: string;
}

export default function ProviderProfileForm({
  profile,
}: ProviderProfileFormProps) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const { mutate, isPending } =
    useUpdateProviderProfile();

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
    values: FormValues
  ) => {
    mutate(values);
  };

  return (
    <section className="rounded-2xl border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <div>

          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <Input
            {...register("name")}
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <Input
            {...register("phone")}
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            {...register("address")}
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>

          <Input
            {...register("profileImage")}
          />

        </div>

        <Button
          type="submit"
          disabled={isPending}
        >
          {isPending
            ? "Saving..."
            : "Save Changes"}
        </Button>

      </form>

    </section>
  );
}