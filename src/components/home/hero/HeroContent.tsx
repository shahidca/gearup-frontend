"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>

        GearUp Rental Marketplace
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
          Rent Premium
          <span className="block text-primary">
            Outdoor Gear
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          Discover premium camping, hiking, cycling, photography and sports
          equipment from trusted providers across Bangladesh.
        </p>
      </div>

      {/* Hero Search */}
      <HeroSearch />


      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link href="/gear">
          <Button size="lg" className="group">
            Explore Gear
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>

        <Link href="/register">
          <Button
            variant="outline"
            size="lg"
          >
            Become a Provider
          </Button>
        </Link>
      </div>

      {/* Statistics */}
      <HeroStats />
    </motion.div>
  );
}