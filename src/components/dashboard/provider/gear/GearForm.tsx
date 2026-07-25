"use client";

import CategorySelect from "./CategorySelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl border bg-card p-8"
    >
      {/* Name */}

      <div>
        <label className="mb-2 block text-sm font-medium">
          Gear Name
        </label>

        <Input
          name="name"
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
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
            required
          />
        </div>

        {/* Stock */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Stock
          </label>

          <Input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>

        {/* Available Stock */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Available Stock
          </label>

          <Input
            type="number"
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
            <option value="NEW">NEW</option>
            <option value="LIKE_NEW">
              LIKE_NEW
            </option>
            <option value="GOOD">GOOD</option>
            <option value="FAIR">FAIR</option>
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
          placeholder="https://img1.jpg, https://img2.jpg"
        />
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