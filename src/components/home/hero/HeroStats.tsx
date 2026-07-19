"use client";

import { motion } from "framer-motion";
import {
  Star,
  Backpack,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    color: "text-yellow-500",
  },
  {
    icon: Backpack,
    value: "250+",
    label: "Premium Gear",
    color: "text-primary",
  },
  {
    icon: Truck,
    value: "1000+",
    label: "Successful Rentals",
    color: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Secure Payments",
    color: "text-green-500",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-2xl border border-border/50 bg-background/70 p-4 shadow-lg backdrop-blur-md transition-all"
          >
            <Icon className={`mb-3 size-6 ${item.color}`} />

            <h3 className="text-2xl font-bold">
              {item.value}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}