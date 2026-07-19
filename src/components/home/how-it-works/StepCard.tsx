"use client";

import { motion } from "framer-motion";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function StepCard({
  number,
  title,
  description,
  icon: Icon,
}: StepCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="relative rounded-3xl border border-border/60 bg-card p-8 text-center shadow-lg transition-all hover:border-primary/30 hover:shadow-2xl"
    >
      {/* Number Badge */}
      <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="mx-auto mb-6 mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
        <Icon className="h-10 w-10 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}