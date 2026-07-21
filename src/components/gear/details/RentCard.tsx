"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Package } from "lucide-react";

import BookingDialog from "@/components/rental/BookingDialog";
import { Button } from "@/components/ui/button";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function RentCard({ gear }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const total = useMemo(() => {
    if (!startDate || !endDate) {
      return Number(gear.pricePerDay) * quantity;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const days = Math.max(
      1,
      Math.ceil(
        (end.getTime() - start.getTime()) /
          (1000 * 60 * 60 * 24)
      )
    );

    return days * Number(gear.pricePerDay) * quantity;
  }, [
    startDate,
    endDate,
    quantity,
    gear.pricePerDay,
  ]);

  return (
    <>
      <div className="sticky top-24 rounded-3xl border bg-card p-6 shadow-lg">

        {/* Heading */}

        <h2 className="text-xl font-bold">
          Rent This Gear
        </h2>

        {/* Price */}

        <div className="mt-5">
          <span className="text-3xl font-bold text-primary">
            ${Number(gear.pricePerDay).toFixed(2)}
          </span>

          <span className="ml-2 text-muted-foreground">
            / day
          </span>
        </div>

        {/* Dates */}

        <div className="mt-6 space-y-4">

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="h-4 w-4" />
              Start Date
            </label>

            <input
              type="date"
              min={today}
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);

                // Reset end date if it becomes invalid
                if (
                  endDate &&
                  e.target.value > endDate
                ) {
                  setEndDate("");
                }
              }}
              className="w-full rounded-xl border px-4 py-3"
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="h-4 w-4" />
              Return Date
            </label>

            <input
              type="date"
              min={startDate || today}
              value={endDate}
              onChange={(e) =>
                setEndDate(e.target.value)
              }
              className="w-full rounded-xl border px-4 py-3"
            />

          </div>

        </div>

        {/* Quantity */}

        <div className="mt-6">

          <label className="mb-3 flex items-center gap-2 text-sm font-medium">
            <Package className="h-4 w-4" />
            Quantity
          </label>

          <div className="flex items-center justify-between rounded-xl border px-3 py-2">

            <Button
              type="button"
              variant="outline"
              size="icon"
              disabled={quantity <= 1}
              onClick={() =>
                setQuantity((prev) => prev - 1)
              }
            >
              -
            </Button>

            <span className="text-lg font-bold">
              {quantity}
            </span>

            <Button
              type="button"
              variant="outline"
              size="icon"
              disabled={
                quantity >= gear.availableStock
              }
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
            >
              +
            </Button>

          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {gear.availableStock} items available
          </p>

        </div>

        {/* Total */}

        <div className="my-8 border-t pt-6">

          <div className="flex items-center justify-between">

            <span className="font-medium">
              Estimated Total
            </span>

            <span className="text-2xl font-bold text-primary">
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

        {/* Rent Button */}

        <Button
          className="w-full"
          size="lg"
          disabled={!startDate || !endDate}
          onClick={() => setOpen(true)}
        >
          Rent Now
        </Button>

      </div>

      <BookingDialog
        open={open}
        onOpenChange={setOpen}
        gear={gear}
        startDate={startDate}
        endDate={endDate}
        quantity={quantity}
        total={total}
      />
    </>
  );
}