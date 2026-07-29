"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const contactItems = [
  {
    title: "Email",
    value: "support@gearup.com",
    description: "We'll reply within 24 hours.",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+880 1304-503203",
    description: "Mon - Sat, 9:00 AM - 8:00 PM",
    icon: Phone,
  },
  {
    title: "Office",
    value: "Dhaka, Bangladesh",
    description: "Visit our headquarters anytime.",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "9:00 AM - 8:00 PM",
    description: "Sunday - Saturday",
    icon: Clock,
  },
];

export default function ContactInfo() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border bg-card p-8 shadow-lg transition-all hover:border-primary/40 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg font-semibold text-primary">
                  {item.value}
                </p>

                <p className="mt-3 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}