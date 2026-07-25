"use client";

import {
  CheckCircle2,
  Circle,
  Clock3,
  XCircle,
} from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { TRental } from "@/types/rental";

interface RentalTimelineProps {
  rental: TRental;
}

const timelineSteps = [
  {
    key: "PLACED",
    title: "Rental Placed",
    description:
      "Your rental request has been submitted.",
  },
  {
    key: "CONFIRMED",
    title: "Confirmed",
    description:
      "The provider accepted your rental request.",
  },
  {
    key: "PAID",
    title: "Payment Completed",
    description:
      "Payment has been completed successfully.",
  },
  {
    key: "PICKED_UP",
    title: "Gear Picked Up",
    description:
      "The rented equipment has been collected.",
  },
  {
    key: "RETURNED",
    title: "Returned",
    description:
      "Rental completed successfully.",
  },
];

export default function RentalTimeline({
  rental,
}: RentalTimelineProps) {
  // ==========================
  // Cancelled Rental
  // ==========================

  if (rental.status === "CANCELLED") {
    return (
      <section className="rounded-3xl border bg-card p-6 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          Rental Timeline
        </h2>

        <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">

          <XCircle className="mt-1 h-8 w-8 text-red-600" />

          <div>
            <h3 className="text-lg font-semibold text-red-600">
              Rental Cancelled
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              This rental order has been cancelled and
              will not continue.
            </p>
          </div>

        </div>

      </section>
    );
  }

  // ==========================
  // Progress
  // ==========================

  const currentIndex = timelineSteps.findIndex(
    (step) => step.key === rental.status
  );

  const progress =
    ((currentIndex + 1) / timelineSteps.length) * 100;

  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Rental Timeline
          </h2>

          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}%
          </span>

        </div>

        <Progress
          value={progress}
          className="mt-4 h-2"
        />

      </div>

      {/* Timeline */}

      <div className="space-y-8">

        {timelineSteps.map((step, index) => {
          const completed = index < currentIndex;

          const current =
            index === currentIndex;

          return (
            <div
              key={step.key}
              className="flex gap-4"
            >

              {/* Icon */}

              <div className="flex flex-col items-center">

                {completed ? (
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                ) : current ? (
                  <Clock3 className="h-7 w-7 text-blue-600 animate-pulse" />
                ) : (
                  <Circle className="h-7 w-7 text-muted-foreground" />
                )}

                {index !==
                  timelineSteps.length - 1 && (
                  <div
                    className={`mt-2 w-1 flex-1 rounded-full ${
                      completed
                        ? "bg-green-600"
                        : "bg-border"
                    }`}
                  />
                )}

              </div>

              {/* Content */}

              <div className="pb-4">

                <h3
                  className={`text-lg font-semibold ${
                    completed
                      ? "text-green-600"
                      : current
                      ? "text-blue-600"
                      : ""
                  }`}
                >
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>

                <p className="mt-2 text-xs font-medium">

                  {completed && (
                    <span className="text-green-600">
                      ✓ Completed
                    </span>
                  )}

                  {current && (
                    <span className="text-blue-600">
                      ● In Progress
                    </span>
                  )}

                  {!completed && !current && (
                    <span className="text-muted-foreground">
                      Waiting
                    </span>
                  )}

                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}