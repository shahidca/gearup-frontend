"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  image,
  rating,
  review,
}: TestimonialCardProps) {
  // Cap the rating scale at 5 stars maximum
  const totalStars = 5;
  const validatedRating = Math.min(Math.max(0, rating), totalStars);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-8 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl dark:border-white/5 dark:from-card/80 dark:to-card/20"
    >
      <div>
        {/* Quote Icon & Styling */}
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Quote className="size-5 fill-current transition-transform duration-300 group-hover:rotate-12" />
        </div>

        {/* Review Paragraph */}
        <blockquote className="text-base leading-relaxed text-muted-foreground italic">
          "{review}"
        </blockquote>
      </div>

      <div>
        {/* Rating Section */}
        <div className="my-6 flex items-center gap-1">
          {Array.from({ length: totalStars }).map((_, index) => {
            const isFilled = index < validatedRating;
            return (
              <Star
                key={index}
                className={`size-4 transition-transform duration-300 group-hover:scale-110 ${
                  isFilled 
                    ? "fill-amber-400 text-amber-400" 
                    : "text-muted/40 dark:text-white/10"
                }`}
              />
            );
          })}
        </div>

        {/* User Profile Footer */}
        <div className="flex items-center gap-4 border-t border-border/60 pt-5 dark:border-white/5">
          {/* Avatar Container */}
          <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30">
            <Image
              src={image}
              alt={name}
              fill
              sizes="48px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* User Meta Details */}
          <div className="min-w-0">
            <h4 className="truncate text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {name}
            </h4>
            <p className="truncate text-xs font-medium text-muted-foreground">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}