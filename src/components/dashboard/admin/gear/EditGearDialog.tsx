"use client";

import { useEffect, useState } from "react";

import type { TGear } from "@/types/gear";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useUpdateGear } from "@/hooks/useAdminGear";

interface EditGearDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gear: TGear;
}

export default function EditGearDialog({
  open,
  onOpenChange,
  gear,
}: EditGearDialogProps) {
  const { mutate, isPending } =
    useUpdateGear();

  const [formData, setFormData] =
    useState({
      name: "",
      brand: "",
      description: "",
      pricePerDay: "",
      stock: "",
      availableStock: "",
    });

  useEffect(() => {
    if (gear) {
      setFormData({
        name: gear.name,
        brand: gear.brand ?? "",
        description: gear.description,
        pricePerDay: String(
          gear.pricePerDay
        ),
        stock: String(gear.stock),
        availableStock: String(
          gear.availableStock
        ),
      });
    }
  }, [gear]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = () => {
    mutate(
      {
        gearId: gear.id,

        payload: {
          ...formData,

          pricePerDay: Number(
            formData.pricePerDay
          ),

          stock: Number(
            formData.stock
          ),

          availableStock: Number(
            formData.availableStock
          ),
        },
      },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            Edit Gear
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
          />

          <Input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <Input
            name="pricePerDay"
            type="number"
            placeholder="Price"
            value={formData.pricePerDay}
            onChange={handleChange}
          />

          <Input
            name="stock"
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
          />

          <Input
            name="availableStock"
            type="number"
            placeholder="Available Stock"
            value={
              formData.availableStock
            }
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={isPending}
            >
              {isPending
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}