"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

    if (
      !formData.name ||
      !formData.description ||
      !formData.categoryId ||
      !formData.pricePerDay ||
      !formData.stock
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const payload = {
      ...formData,

      
      slug: formData.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-"),

      stock: Number(formData.stock),

      availableStock: Number(
        formData.availableStock || formData.stock
      ),

      pricePerDay: Number(
        formData.pricePerDay
      ),

      images: formData.images
        .split(",")
        .map((img) => img.trim())
        .filter(Boolean),
    };

    console.log("Submitting Payload:", payload);

    mutate(payload, {
      onSuccess: () => {
        toast.success(
          "Gear created successfully."
        );

        router.push("/provider/gear");
      },

      onError: (error: any) => {
        console.error(error);

        toast.error(
          error?.response?.data?.message ||
            "Failed to create gear."
        );
      },
    });
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