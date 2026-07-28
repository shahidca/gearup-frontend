"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container } from "@/components/layout";

import GearGrid from "./GearGrid";
import GearFilters from "./GearFilters";

import { useGear } from "@/hooks/useGear";

export default function GearListing() {
      const searchParams = useSearchParams();

      const [searchTerm, setSearchTerm] = useState("");

      const [minPrice, setMinPrice] = useState("");

      const [maxPrice, setMaxPrice] = useState("");
      const [condition, setCondition] = useState("");

      const [sortBy, setSortBy] = useState("");

      const category =
            searchParams.get("category") ?? "";

      const {
            data,
            isLoading,
            isError,
      } = useGear({
            page: 1,
            limit: 12,

            searchTerm,

            categoryId: category,

            condition: condition || undefined,

            sortBy: sortBy || undefined,

            minPrice: minPrice
                  ? Number(minPrice)
                  : undefined,

            maxPrice: maxPrice
                  ? Number(maxPrice)
                  : undefined,
      });

      return (
            <main className="py-12">
                  <Container>

                        {/* Header */}

                        <section className="mb-12 text-center">

                              <h1 className="text-4xl font-bold lg:text-5xl">
                                    Explore Rental Gear
                              </h1>

                              <p className="mt-4 text-muted-foreground">
                                    Find premium sports and outdoor equipment
                                    for your next adventure.
                              </p>

                        </section>

                        {/* Layout */}

                        <section className="grid gap-8 lg:grid-cols-[280px_1fr]">

                              {/* Sidebar */}

                              <aside className="rounded-2xl border bg-card p-6 shadow-sm">

                                    <GearFilters
                                          searchTerm={searchTerm}
                                          setSearchTerm={setSearchTerm}

                                          minPrice={minPrice}
                                          setMinPrice={setMinPrice}

                                          maxPrice={maxPrice}
                                          setMaxPrice={setMaxPrice}

                                          condition={condition}
                                          setCondition={setCondition}

                                          sortBy={sortBy}
                                          setSortBy={setSortBy}
                                    />

                              </aside>

                              {/* Gear */}

                              <section>

                                    {isLoading && (
                                          <div className="rounded-xl border p-10 text-center">
                                                Loading gear...
                                          </div>
                                    )}

                                    {isError && (
                                          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-10 text-center">
                                                Failed to load gear.
                                          </div>
                                    )}

                                    {!isLoading &&
                                          !isError && (
                                                <GearGrid
                                                      gear={data?.data ?? []}
                                                />
                                          )}

                              </section>

                        </section>

                  </Container>
            </main>
      );
}