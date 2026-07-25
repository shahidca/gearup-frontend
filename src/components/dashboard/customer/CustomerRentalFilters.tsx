"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  status: string;
  onStatusChange: (
    value: string | null
  ) => void;
}

export default function CustomerRentalFilters({
  status,
  onStatusChange,
}: Props) {
  return (
    <Select
      value={status}
      onValueChange={onStatusChange}
    >
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>

      <SelectContent>

        <SelectItem value="ALL">
          All Rentals
        </SelectItem>

        <SelectItem value="PLACED">
          Placed
        </SelectItem>

        <SelectItem value="CONFIRMED">
          Confirmed
        </SelectItem>

        <SelectItem value="PAID">
          Paid
        </SelectItem>

        <SelectItem value="PICKED_UP">
          Picked Up
        </SelectItem>

        <SelectItem value="RETURNED">
          Returned
        </SelectItem>

        <SelectItem value="CANCELLED">
          Cancelled
        </SelectItem>

      </SelectContent>
    </Select>
  );
}