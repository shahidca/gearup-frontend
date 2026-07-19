"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingCardProps = {
  title: string;
  value: string;
  className?: string;
};

export default function FloatingCard({
  title,
  value,
  className,
}: FloatingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className={cn(
        "hidden rounded-2xl border border-white/20 bg-background/80 p-4 shadow-2xl backdrop-blur-xl lg:block",
        className
      )}
    >
      <p className="text-xs text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-1 text-lg font-bold">
        {value}
      </h3>
    </motion.div>
  );
}