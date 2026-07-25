"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import GearForm, {
  GearFormData,
} from "./GearForm";

import { useCreateProviderGear } from "@/hooks/useProviderGear";

export default function CreateGearForm() {
  const router = useRouter();

  const { mutate, isPending } =
    useCreateProviderGear();

  const [formData, setFormData] =
    useState<GearFormData>({
      name: "",
      description: "",
      brand: "",
      categoryId: "",
      condition: "GOOD",
      stock: "",
      availableStock: "",
      pricePerDay: "",
      images: "",
    });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    mutate(
      {
        ...formData,

        stock: Number(formData.stock),

        availableStock: Number(
          formData.availableStock
        ),

        pricePerDay: Number(
          formData.pricePerDay
        ),

        images: formData.images
          .split(",")
          .map((img) => img.trim())
          .filter(Boolean),
      },
      {
        onSuccess: () => {
          router.push("/provider/gear");
        },
      }
    );
  };

  return (
    <GearForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      loading={isPending}
      submitText="Create Gear"
    />
  );
}