"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />

      {/* Image */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
      >
        <Image
          src="/images/hero/hero-image.jpg"
          alt="Outdoor Adventure"
          width={650}
          height={650}
          priority
          className="h-[520px] w-full object-cover"
        />
      </motion.div>

      {/* Floating Cards */}

      <FloatingCard
        title="Trusted Rentals"
        value="1000+"
        className="absolute -left-8 top-8"
      />

      <FloatingCard
        title="Customer Rating"
        value="⭐ 4.9"
        className="absolute -right-8 top-24"
      />

      <FloatingCard
        title="Secure Payment"
        value="100%"
        className="absolute bottom-8 left-16"
      />
    </motion.div>
  );
}