"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Props {
  stats: {
    activeRentals: number;
    completedRentals: number;
  };
}

export default function RentalStatusChart({
  stats,
}: Props) {
  const data = [
    {
      name: "Active",
      value: stats.activeRentals,
    },
    {
      name: "Completed",
      value: stats.completedRentals,
    },
  ];

  return (
    <div className="rounded-2xl border p-6">
      <h2 className="mb-5 text-xl font-bold">
        Rental Status
      </h2>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}