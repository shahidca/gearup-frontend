"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

import AdminDeleteGearDialog from "./AdminDeleteGearDialog";

interface AdminGearTableProps {
  gear: any[];
}

export default function AdminGearTable({
  gear,
}: AdminGearTableProps) {
  if (!gear?.length) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center">
        <h3 className="text-lg font-semibold">
          No gear found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          There are no gear items to display.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
      <table className="w-full min-w-[1100px]">

        {/* ================= Header ================= */}

        <thead className="border-b bg-muted/40">
          <tr>

            <th className="px-6 py-4 text-left font-semibold">
              Image
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Gear
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Category
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Provider
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Price / Day
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Stock
            </th>

            <th className="px-6 py-4 text-right font-semibold">
              Actions
            </th>

          </tr>
        </thead>

        {/* ================= Body ================= */}

        <tbody>

          {gear.map((item) => {

            const image =
              item.images?.[0]?.startsWith("http") ||
              item.images?.[0]?.startsWith("/")
                ? item.images[0]
                : "/images/gear-placeholder.png";

            return (
              <tr
                key={item.id}
                className="
                  border-b
                  last:border-0
                  transition-colors
                  hover:bg-muted/40
                "
              >

                <td className="px-6 py-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-lg border">
                    <Image
                      src={image}
                      alt={item.name ?? "Gear"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                <td className="px-6 py-5 font-medium">
                  {item.name}
                </td>

                <td className="px-6 py-5">
                  {item.category?.name ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {item.provider?.name ?? "-"}
                </td>

                <td className="px-6 py-5 font-medium">
                  $
                  {Number(
                    item.pricePerDay ?? 0
                  ).toFixed(2)}
                </td>

                <td className="px-6 py-5">
                  {item.stock ?? 0}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">

                    <Link
                      href={`/admin/gear/${item.id}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </Link>

                    <Link
                      href={`/admin/gear/${item.id}/edit`}
                    >
                      <Button size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </Link>

                    <AdminDeleteGearDialog
                      gear={item}
                    />

                  </div>
                </td>

              </tr>
            );
          })}

        </tbody>

      </table>
    </div>
  );
}