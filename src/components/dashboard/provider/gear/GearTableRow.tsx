"use client";

import type { TGear } from "@/types/gear";

import GearActionMenu from "./GearActionMenu";

interface GearTableRowProps {
  gear: TGear;
}

export default function GearTableRow({
  gear,
}: GearTableRowProps) {
  return (
    <tr className="border-b hover:bg-muted/40">
      <td className="p-4 font-medium">
        {gear.name}
      </td>

      <td className="p-4">
        {gear.brand ?? "-"}
      </td>

      <td className="p-4">
        ৳{gear.pricePerDay}
      </td>

      <td className="p-4">
        {gear.stock}
      </td>

      <td className="p-4">
        {gear.availableStock}
      </td>

      <td className="p-4 text-right">
        <GearActionMenu gear={gear} />
      </td>
    </tr>
  );
}