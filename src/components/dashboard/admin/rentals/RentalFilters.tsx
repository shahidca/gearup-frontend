"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RentalFiltersProps {
  status: string;
  onStatusChange: (value: string | null) => void;
}

export default function RentalFilters({
  status,
  onStatusChange,
}: RentalFiltersProps) {
  return (
    <div className="w-full sm:w-52">
      <Select
        value={status}
        onValueChange={onStatusChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">
            All Status
          </SelectItem>

          <SelectItem value="PENDING">
            Pending
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
    </div>
  );
}