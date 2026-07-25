"use client";

import { useCategories } from "@/hooks/useCategories";



interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  const {
    data: categories,
    isLoading,
  } = useCategories();

  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        Category
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        disabled={isLoading}
        className="h-10 w-full rounded-md border bg-background px-3"
      >
        <option value="">
          {isLoading
            ? "Loading categories..."
            : "Select Category"}
        </option>

        {categories?.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}