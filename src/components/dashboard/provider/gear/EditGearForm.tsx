"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import GearForm, {
  GearFormData,
} from "./GearForm";

import {
  useSingleProviderGear,
  useUpdateProviderGear,
} from "@/hooks/useProviderGear";

interface EditGearFormProps {
  gearId: string;
}

export default function EditGearForm({
  gearId,
}: EditGearFormProps) {
  const router = useRouter();

  const {
    data: gear,
    isLoading,
    isError,
  } = useSingleProviderGear(gearId);

  const updateGear =
    useUpdateProviderGear();

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

  /* ===========================
     Populate Form
  =========================== */

  useEffect(() => {
    if (!gear) return;

    setFormData({
      name: gear.name ?? "",
      description:
        gear.description ?? "",
      brand: gear.brand ?? "",
      categoryId:
        gear.categoryId ?? "",
      condition:
        gear.condition ?? "GOOD",
      stock: String(
        gear.stock ?? 0
      ),
      availableStock: String(
        gear.availableStock ?? 0
      ),
      pricePerDay: String(
        gear.pricePerDay ?? 0
      ),
      images:
        gear.images?.join(", ") ?? "",
    });
  }, [gear]);

  /* ===========================
     Submit
  =========================== */

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    updateGear.mutate(
      {
        id: gearId,

        payload: {
          name: formData.name,
          description:
            formData.description,
          brand: formData.brand,
          categoryId:
            formData.categoryId,
          condition:
            formData.condition,

          stock: Number(
            formData.stock
          ),

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
      },
      {
        onSuccess: () => {
          router.push(
            "/provider/gear"
          );
        },
      }
    );
  };

  /* ===========================
     Loading
  =========================== */

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">
        Loading gear...
      </div>
    );
  }

  /* ===========================
     Error
  =========================== */

  if (isError || !gear) {
    return (
      <div className="flex h-80 items-center justify-center">
        Gear not found.
      </div>
    );
  }

  /* ===========================
     Render
  =========================== */

  return (
    <GearForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      loading={updateGear.isPending}
      submitText="Update Gear"
    />
  );
}