"use client";

import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-border/60 bg-card p-8 shadow-md transition-all hover:border-primary/30 hover:shadow-2xl"
    >
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
        <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}