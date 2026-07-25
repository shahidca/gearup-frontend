"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProviderGearFiltersProps {
      searchTerm: string;
      setSearchTerm: (value: string) => void;

      categoryId: string;
      setCategoryId: (value: string) => void;

      condition: string;
      setCondition: (value: string) => void;
}

export default function ProviderGearFilters({
      searchTerm,
      setSearchTerm,

      categoryId,
      setCategoryId,

      condition,
      setCondition,
}: ProviderGearFiltersProps) {
      return (
            <section className="rounded-2xl border bg-card p-6">

                  <div className="grid gap-4 lg:grid-cols-4">

                        {/* ================= Search ================= */}

                        <div className="relative lg:col-span-2">

                              <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                              <Input
                                    placeholder="Search gear..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                          setSearchTerm(e.target.value)
                                    }
                                    className="pl-10"
                              />

                        </div>

                        {/* ================= Category ================= */}

                        <select
                              value={categoryId}
                              onChange={(e) =>
                                    setCategoryId(e.target.value)
                              }
                              className="h-10 rounded-md border bg-background px-3 text-sm"
                        >
                              <option value="">
                                    All Categories
                              </option>

                              {/* Categories will come later */}
                        </select>

                        {/* ================= Condition ================= */}

                        <select
                              value={condition}
                              onChange={(e) =>
                                    setCondition(e.target.value)
                              }
                              className="h-10 rounded-md border bg-background px-3 text-sm"
                        >
                              <option value="">
                                    All Conditions
                              </option>

                              <option value="NEW">
                                    New
                              </option>

                              <option value="LIKE_NEW">
                                    Like New
                              </option>

                              <option value="GOOD">
                                    Good
                              </option>

                              <option value="FAIR">
                                    Fair
                              </option>

                        </select>

                  </div>

                  {/* ================= Add Gear Button ================= */}

                  <div className="mt-6 flex justify-end">

                        <Link href="/provider/gear/create">

                              <Button>

                                    <Plus className="mr-2 h-4 w-4" />

                                    Add New Gear

                              </Button>

                        </Link>

                  </div>

            </section>
      );
}