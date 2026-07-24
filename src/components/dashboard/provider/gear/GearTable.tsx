"use client";

import type { TGear } from "@/types/gear";
import GearTableRow from "./GearTableRow";

interface GearTableProps {
  gear: TGear[];
}

export default function GearTable({
  gear,
}: GearTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Brand
            </th>

            <th className="p-4 text-left">
              Price
            </th>

            <th className="p-4 text-left">
              Stock
            </th>

            <th className="p-4 text-left">
              Available
            </th>

            <th className="p-4 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {gear.map((item) => (
            <GearTableRow
              key={item.id}
              gear={item}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}