"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";
import GearCard from "./GearCard";

import { useGear } from "@/hooks/useGear";

export default function FeaturedGear() {
  const { data, isLoading } = useGear({
    limit: 8,
    page: 1,
  });

  const gears = data?.data ?? [];

  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Featured Gear
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Popular Rental Equipment
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular outdoor and sports equipment.
          </p>
        </motion.div>

        {/* Loading */}
        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground">
            Loading gear...
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {gears.map((gear, index) => (
              <motion.div
                key={gear.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <GearCard gear={gear} />
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}