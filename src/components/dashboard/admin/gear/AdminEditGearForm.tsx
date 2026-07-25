"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCategories } from "@/hooks/useCategories";
import { useUpdateAdminGear } from "@/hooks/useAdminGear";

interface AdminEditGearFormProps {
  gear: any;
}

interface FormValues {
  name: string;
  description: string;
  brand: string;
  model: string;
  pricePerDay: number;
  stock: number;
  availableStock: number;
  categoryId: string;
  condition: string;
  image: string;
}

export default function AdminEditGearForm({
  gear,
}: AdminEditGearFormProps) {
  const router = useRouter();

  const { data: categories } =
    useCategories();

  const { mutate, isPending } =
    useUpdateAdminGear();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<FormValues>();

  useEffect(() => {
    if (!gear) return;

    reset({
      name: gear.name ?? "",
      description:
        gear.description ?? "",
      brand: gear.brand ?? "",
      model: gear.model ?? "",
      pricePerDay: Number(
        gear.pricePerDay
      ),
      stock: gear.stock,
      availableStock:
        gear.availableStock,
      categoryId: gear.categoryId,
      condition: gear.condition,
      image:
        gear.images?.[0] ?? "",
    });
  }, [gear, reset]);

  const onSubmit = (
    values: FormValues
  ) => {
    mutate(
      {
        id: gear.id,

        payload: {
          ...values,

          images: [values.image],
        },
      },
      {
        onSuccess: () => {
          router.push("/admin/gear");
        },
      }
    );
  };
  return (
  <section className="rounded-2xl border bg-card p-6">
    <h2 className="mb-6 text-2xl font-semibold">
      Edit Gear
    </h2>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Gear Name
          </label>

          <Input
            {...register("name")}
          />
        </div>

        {/* Brand */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Brand
          </label>

          <Input
            {...register("brand")}
          />
        </div>

        {/* Model */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Model
          </label>

          <Input
            {...register("model")}
          />
        </div>

        {/* Price */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Price Per Day
          </label>

          <Input
            type="number"
            step="0.01"
            {...register(
              "pricePerDay",
              {
                valueAsNumber: true,
              }
            )}
          />
        </div>

        {/* Stock */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Stock
          </label>

          <Input
            type="number"
            {...register("stock", {
              valueAsNumber: true,
            })}
          />
        </div>

        {/* Available */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Available Stock
          </label>

          <Input
            type="number"
            {...register(
              "availableStock",
              {
                valueAsNumber: true,
              }
            )}
          />
        </div>

      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <Textarea
          rows={5}
          {...register(
            "description"
          )}
        />
      </div>

      {/* Image */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Image URL
        </label>

        <Input
          {...register("image")}
        />
      </div>

      {/* Category */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <Select
          value={watch("categoryId")}
          onValueChange={(value) => {
  if (value !== null) {
    setValue("categoryId", value);
  }
}}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            {categories?.map(
              (category) => (
                <SelectItem
                  key={
                    category.id
                  }
                  value={
                    category.id
                  }
                >
                  {category.name}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Condition */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Condition
        </label>

        <Select
          value={watch("condition")}
          onValueChange={(value) => {
  if (value !== null) {
    setValue("condition", value);
  }
}}
        >
          <SelectTrigger>
            <SelectValue placeholder="Condition" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="NEW">
              New
            </SelectItem>

            <SelectItem value="LIKE_NEW">
              Like New
            </SelectItem>

            <SelectItem value="GOOD">
              Good
            </SelectItem>

            <SelectItem value="FAIR">
              Fair
            </SelectItem>

          </SelectContent>
        </Select>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isPending}
        >
          {isPending
            ? "Updating..."
            : "Update Gear"}
        </Button>
      </div>

    </form>

  </section>
);
}