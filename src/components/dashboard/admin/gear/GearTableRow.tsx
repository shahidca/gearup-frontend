"use client";

import type { TGear } from "@/types/gear";

import { Badge } from "@/components/ui/badge";
import GearActionMenu from "./GearActionMenu";

interface GearTableRowProps {
  gear: TGear;
}

export default function GearTableRow({
  gear,
}: GearTableRowProps) {
  return (
    <tr className="border-b hover:bg-muted/40 transition-colors">
      <td className="px-4 py-4 font-medium">
        {gear.name}
      </td>

      <td className="px-4 py-4">
        {gear.brand ?? "-"}
      </td>

      <td className="px-4 py-4">
        ৳{gear.pricePerDay}
      </td>

      <td className="px-4 py-4">
        {gear.stock}
      </td>

      <td className="px-4 py-4">
        {gear.availableStock}
      </td>

      <td className="px-4 py-4">
        <Badge variant="outline">
          {gear.condition}
        </Badge>
      </td>

      <td className="px-4 py-4 text-right">
        <GearActionMenu gear={gear} />
      </td>
    </tr>
  );
}