"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

import ReviewForm from "@/components/review/ReviewForm";
import { useCreateReview } from "@/hooks/useReview";

export default function CreateReviewPage({
  params,
}: {
  params: Promise<{
    gearItemId: string;
  }>;
}) {
  const router = useRouter();

  const { gearItemId } = use(params);

  const {
    mutate,
    isPending,
  } = useCreateReview();

  const handleSubmit = (values: {
    rating: number;
    comment?: string;
  }) => {
    mutate(
      {
        gearItemId,
        ...values,
      },
      {
        onSuccess: () => {
          router.push(
            "/customer/reviews"
          );
        },
      }
    );
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Leave Review
        </h1>

        <p className="text-muted-foreground">
          Share your experience with this gear.
        </p>

      </div>

      <ReviewForm
        loading={isPending}
        onSubmit={handleSubmit}
      />

    </div>
  );
}