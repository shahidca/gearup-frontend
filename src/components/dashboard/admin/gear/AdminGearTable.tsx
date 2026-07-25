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
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <table className="w-full">
        <thead className="border-b bg-muted/40">
          <tr>
            <th className="px-6 py-4 text-left">Image</th>
            <th className="px-6 py-4 text-left">Gear</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Provider</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Stock</th>
            <th className="px-6 py-4 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {gear.map((item) => (
            <tr
              key={item.id}
              className="border-b last:border-0"
            >
              <td className="px-6 py-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-lg border">
                  <Image
                    src={
                      item.images?.[0] &&
                      (item.images[0].startsWith(
                        "http://"
                      ) ||
                        item.images[0].startsWith(
                          "https://"
                        ) ||
                        item.images[0].startsWith("/"))
                        ? item.images[0]
                        : "/images/gear-placeholder.png"
                    }
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>

              <td className="px-6 py-4 font-medium">
                {item.name}
              </td>

              <td className="px-6 py-4">
                {item.category?.name}
              </td>

              <td className="px-6 py-4">
                {item.provider?.name}
              </td>

              <td className="px-6 py-4">
                ${Number(item.pricePerDay).toFixed(2)}
              </td>

              <td className="px-6 py-4">
                {item.stock}
              </td>

              <td className="px-6 py-4">
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
          ))}
        </tbody>
      </table>
    </div>
  );
}