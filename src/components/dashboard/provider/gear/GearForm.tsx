"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CategorySelect from "./CategorySelect";

export interface GearFormData {
  name: string;
  description: string;
  brand: string;
  categoryId: string;
  condition: string;
  stock: string;
  availableStock: string;
  pricePerDay: string;
  images: string;
}

interface GearFormProps {
  formData: GearFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<GearFormData>
  >;

  onSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;

  loading: boolean;

  submitText: string;
}

export default function GearForm({
  formData,
  setFormData,
  onSubmit,
  loading,
  submitText,
}: GearFormProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,

      ...(name === "stock" &&
      !prev.availableStock
        ? {
            availableStock: value,
          }
        : {}),
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl border bg-card p-8 shadow-sm"
    >
      {/* Name */}

      <div>

        <label className="mb-2 block text-sm font-medium">
          Gear Name
        </label>

        <Input
          name="name"
          placeholder="Mountain Bike"
          value={formData.name}
          onChange={handleChange}
          required
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          placeholder="Describe your rental gear..."
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full rounded-md border bg-background p-3"
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Brand */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Brand
          </label>

          <Input
            name="brand"
            placeholder="Trek"
            value={formData.brand}
            onChange={handleChange}
          />

        </div>

        {/* Category */}

        <CategorySelect
          value={formData.categoryId}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              categoryId: value,
            }))
          }
        />

        {/* Price */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Price Per Day
          </label>

          <Input
            type="number"
            min={1}
            name="pricePerDay"
            placeholder="100"
            value={formData.pricePerDay}
            onChange={handleChange}
            required
          />

        </div>

        {/* Stock */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Total Stock
          </label>

          <Input
            type="number"
            min={0}
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />

        </div>

        {/* Available */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Available Stock
          </label>

          <Input
            type="number"
            min={0}
            name="availableStock"
            value={formData.availableStock}
            onChange={handleChange}
            required
          />

        </div>

        {/* Condition */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Condition
          </label>

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="h-10 w-full rounded-md border bg-background px-3"
          >
            <option value="NEW">
              NEW
            </option>

            <option value="LIKE_NEW">
              LIKE NEW
            </option>

            <option value="GOOD">
              GOOD
            </option>

            <option value="FAIR">
              FAIR
            </option>
          </select>

        </div>

      </div>

      {/* Images */}

      <div>

        <label className="mb-2 block text-sm font-medium">
          Image URLs
        </label>

        <Input
          name="images"
          value={formData.images}
          onChange={handleChange}
          placeholder="https://image1.jpg, https://image2.jpg"
        />

        <p className="mt-2 text-xs text-muted-foreground">
          Separate multiple image URLs using commas.
        </p>

      </div>

      {/* Submit */}

      <div className="flex justify-end">

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : submitText}
        </Button>

      </div>

    </form>
  );
}