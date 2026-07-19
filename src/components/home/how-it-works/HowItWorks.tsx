"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";
import StepCard from "./StepCard";
import { steps } from "./steps-data";

export default function HowItWorks() {
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
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Rent Gear in 3 Simple Steps
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            From browsing equipment to starting your adventure, the process is
            quick and easy.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-10 lg:grid-cols-3">
          {/* Desktop Connector Line */}
          <div className="absolute left-1/2 top-20 hidden h-1 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="relative z-10"
            >
              <StepCard {...step} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}