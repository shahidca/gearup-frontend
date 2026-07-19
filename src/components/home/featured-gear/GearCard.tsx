"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type GearCardProps = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
};

export default function GearCard({
  id,
  name,
  category,
  image,
  price,
  rating,
}: GearCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border bg-card shadow-lg transition-all hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={350}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-md backdrop-blur transition hover:scale-110"
          type="button"
        >
          <Heart className="h-5 w-5" />
        </button>

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>

          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm font-medium">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            {rating}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              ৳{price}
            </p>
            <p className="text-sm text-muted-foreground">
              per day
            </p>
          </div>

          <Button>
            <Link
              href={`/gear/${id}`}
              className="flex items-center gap-2"
            >
              Rent Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}