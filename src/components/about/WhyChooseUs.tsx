"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Clock3,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Verified Providers",
    description:
      "Every provider is verified to ensure safe and trustworthy rentals.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Equipment",
    description:
      "Browse carefully maintained sports and outdoor equipment.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Booking",
    description:
      "Reserve equipment within minutes using our streamlined booking process.",
    icon: Clock3,
  },
  {
    title: "Secure Payments",
    description:
      "Multiple secure payment methods with encrypted checkout.",
    icon: CreditCard,
  },
  {
    title: "Flexible Rentals",
    description:
      "Choose rental periods that fit your adventure and budget.",
    icon: Truck,
  },
  {
    title: "24/7 Support",
    description:
      "Friendly support whenever you need assistance before or after renting.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Choose GearUp
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Everything You Need for a Better Rental Experience
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            We've designed GearUp to provide a secure, reliable, and
            enjoyable equipment rental experience from start to finish.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">

                  <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />

                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}