"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";
import CategoryCard from "./CategoryCard";
import { categories } from "./category-data";

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        {/* Section Heading */}
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

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}