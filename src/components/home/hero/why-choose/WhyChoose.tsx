"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";
import FeatureCard from "./FeatureCard";
import { features } from "./feature-data";

export default function WhyChoose() {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Choose GearUp
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Built for Every Adventure
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            We make renting outdoor and sports equipment simple, secure, and reliable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}