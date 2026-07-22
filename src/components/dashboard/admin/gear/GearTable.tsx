"use client";

import GearTableRow from "./GearTableRow";

type Gear = {
  id: string;
  name: string;
  description: string;
  brand: string | null;
  pricePerDay: number | string;
  stock: number;
  availableStock: number;
  condition: string;
};

interface GearTableProps {
  gear: Gear[];
}

export default function GearTable({
  gear,
}: GearTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">
                Name
              </th>

              <th className="px-4 py-3 text-left">
                Brand
              </th>

              <th className="px-4 py-3 text-left">
                Price/Day
              </th>

              <th className="px-4 py-3 text-left">
                Stock
              </th>

              <th className="px-4 py-3 text-left">
                Available
              </th>

              <th className="px-4 py-3 text-left">
                Condition
              </th>

              <th className="px-4 py-3 text-right">
                Action
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
    </div>
  );
}