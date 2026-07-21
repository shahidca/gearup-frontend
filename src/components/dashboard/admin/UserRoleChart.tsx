"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  customers: number;
  providers: number;
}

export default function UserRoleChart({
  customers,
  providers,
}: Props) {
  const data = [
    {
      name: "Customers",
      value: customers,
    },
    {
      name: "Providers",
      value: providers,
    },
  ];

  const COLORS = [
    "#3b82f6",
    "#10b981",
  ];

  return (
    <div className="rounded-2xl border bg-card p-6">

      <h2 className="mb-6 text-xl font-bold">
        Users by Role
      </h2>

      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}