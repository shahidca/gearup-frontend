"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Leaf,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Trust",
    description:
      "We build long-term relationships through verified providers, transparent pricing, and secure rental experiences.",
    icon: ShieldCheck,
  },
  {
    title: "Quality",
    description:
      "Every listed item is expected to meet high standards for reliability, safety, and performance.",
    icon: Award,
  },
  {
    title: "Sustainability",
    description:
      "Renting instead of buying reduces waste and encourages smarter use of outdoor equipment.",
    icon: Leaf,
  },
  {
    title: "Community",
    description:
      "We connect adventurers and equipment owners, creating opportunities for everyone.",
    icon: Users,
  },
];

export default function CoreValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Core Values
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            The Principles Behind GearUp
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything we build is driven by trust,
            quality, sustainability, and a passion
            for helping people explore the outdoors.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
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
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-border bg-card p-8 shadow-md transition-all hover:border-primary/40 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">

                  <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold">
                  {value.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}