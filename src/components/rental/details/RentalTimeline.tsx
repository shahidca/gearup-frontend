"use client";

import {
  CheckCircle2,
  Circle,
} from "lucide-react";

interface RentalTimelineProps {
  rental: any;
}

const steps = [
  "PLACED",
  "CONFIRMED",
  "PAID",
  "PICKED_UP",
  "RETURNED",
];

export default function RentalTimeline({
  rental,
}: RentalTimelineProps) {
  const currentIndex = steps.indexOf(
    rental.status
  );

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <h2 className="mb-8 text-2xl font-bold">
        Rental Timeline
      </h2>

      <div className="space-y-6">

        {steps.map((step, index) => {
          const completed =
            index <= currentIndex;

          return (
            <div
              key={step}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">

                {completed ? (
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                ) : (
                  <Circle className="h-7 w-7 text-gray-400" />
                )}

                {index !== steps.length - 1 && (
                  <div
                    className={`mt-1 h-10 w-[2px] ${
                      completed
                        ? "bg-green-600"
                        : "bg-gray-300"
                    }`}
                  />
                )}

              </div>

              <div>

                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.replace("_", " ")}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {completed
                    ? "Completed"
                    : "Waiting"}
                </p>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}