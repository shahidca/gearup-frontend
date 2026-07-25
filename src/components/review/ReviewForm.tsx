"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface ReviewFormValues {
  rating: number;
  comment?: string;
}

interface ReviewFormProps {
  defaultValues?: ReviewFormValues;
  loading?: boolean;
  onSubmit: (
    values: ReviewFormValues
  ) => void;
}

export default function ReviewForm({
  defaultValues,
  loading = false,
  onSubmit,
}: ReviewFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    defaultValues: {
      rating: 5,
      comment: "",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Rating (1–5)
        </label>

        <Input
          type="number"
          min={1}
          max={5}
          {...register("rating", {
            required: "Rating is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Minimum rating is 1",
            },
            max: {
              value: 5,
              message: "Maximum rating is 5",
            },
          })}
        />

        {errors.rating && (
          <p className="text-sm text-red-500">
            {errors.rating.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Comment
        </label>

        <Textarea
          rows={6}
          placeholder="Share your experience..."
          {...register("comment")}
        />

        {errors.comment && (
          <p className="text-sm text-red-500">
            {errors.comment.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading
          ? "Saving..."
          : "Save Review"}
      </Button>
    </form>
  );
}