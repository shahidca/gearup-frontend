"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description?: string;
  count: number;
  icon: React.ElementType;
};

export default function CategoryCard({
  title,
  description,
  count,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group cursor-pointer rounded-3xl border border-border/60 bg-card p-6 shadow-lg transition-all hover:border-primary/40 hover:shadow-2xl"
    >
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
        <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 min-h-10 text-sm text-muted-foreground">
        {description || "Premium rental equipment"}
      </p>

      <p className="mt-2 font-medium text-primary">
        {count} Items
      </p>

      <div className="mt-6 flex items-center gap-2 font-medium text-primary">
        <span>Explore</span>

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}