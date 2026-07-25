"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DeleteGearDialog from "./DeleteGearDialog";

import type { TGear } from "@/types/gear";
import ProviderGearPagination from "./ProviderGearPagination";

interface ProviderGearTableProps {
  gears: TGear[];
  meta: any;
  page: number;
  setPage: (page: number) => void;
}

export default function ProviderGearTable({
  gears,
  meta,
  page,
  setPage,
}: ProviderGearTableProps) {
  const [selectedGear, setSelectedGear] =
    useState<TGear | null>(null);

  const [
    openDeleteDialog,
    setOpenDeleteDialog,
  ] = useState(false);

  return (
    <div className="rounded-2xl border bg-card">

      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>Name</TableHead>

            <TableHead>Category</TableHead>

            <TableHead>Price / Day</TableHead>

            <TableHead>Stock</TableHead>

            <TableHead>Condition</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="text-right">
              Actions
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {gears.map((gear) => (

            <TableRow key={gear.id}>

              {/* Name */}

              <TableCell className="font-medium">
                {gear.name}
              </TableCell>

              {/* Category */}

              <TableCell>
                {gear.category?.name}
              </TableCell>

              {/* Price */}

              <TableCell>
                ৳
                {Number(
                  gear.pricePerDay
                ).toLocaleString()}
              </TableCell>

              {/* Stock */}

              <TableCell>
                {gear.availableStock}
              </TableCell>

              {/* Condition */}

              <TableCell>
                {gear.condition}
              </TableCell>

              {/* Status */}

              <TableCell>

                {gear.availableStock > 0 ? (

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">

                    Available

                  </span>

                ) : (

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">

                    Out of Stock

                  </span>

                )}

              </TableCell>

              {/* Actions */}

              <TableCell>

                <div className="flex justify-end gap-2">

                  {/* View */}

                  <Link
                    href={`/gear/${gear.id}`}
                  >
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>

                  {/* Edit */}

                  <Link
                    href={`/provider/gear/${gear.id}/edit`}
                  >
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>

                  {/* Delete */}

                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => {
                      setSelectedGear(gear);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>

                </div>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

      {/* Pagination */}

      <ProviderGearPagination
        meta={meta}
        page={page}
        setPage={setPage}
      />

      {/* Delete Dialog */}

      {selectedGear && (

        <DeleteGearDialog
          open={openDeleteDialog}
          onOpenChange={
            setOpenDeleteDialog
          }
          gear={selectedGear}
        />

      )}

    </div>
  );
}