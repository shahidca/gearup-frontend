"use client";

import { motion } from "framer-motion";
import { Tent } from "lucide-react";

import { Container } from "@/components/layout";
import { useCategories } from "@/hooks/useCategories";
import { categoryIcons } from "@/constants/category-mapper";

import CategoryCard from "./CategoryCard";
import CategorySkeleton from "./CategorySkeleton";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useCategories();

  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Browse by Category
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect equipment for your next outdoor adventure.
          </p>
        </motion.div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-center">
            Failed to load categories.
          </div>
        )}

        {!isLoading &&
          !isError &&
          categories &&
          categories.length === 0 && (
            <div className="text-center text-muted-foreground">
              No categories found.
            </div>
          )}

        {!isLoading &&
          !isError &&
          categories &&
          categories.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => {
                const Icon =
                  categoryIcons[
                    category.slug as keyof typeof categoryIcons
                  ] ?? Tent;

                return (
                  <motion.div
                    key={category.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >
                    <CategoryCard
                      title={category.name}
                      description={category.description}
                      count={category._count.gearItems}
                      icon={Icon}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
      </Container>
    </section>
  );
}