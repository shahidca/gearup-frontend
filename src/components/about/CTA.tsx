"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        <motion.div
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
            duration: 0.6,
          }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-primary via-primary/90 to-primary p-12 text-center text-primary-foreground shadow-2xl lg:p-20"
        >
          <div className="mx-auto max-w-3xl">

            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <Compass className="h-10 w-10" />
            </div>

            <h2 className="text-4xl font-bold lg:text-6xl">
              Ready for Your Next Adventure?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Discover thousands of premium outdoor and sports
              equipment from trusted providers across Bangladesh.
              Rent smarter, travel lighter, and enjoy unforgettable
              adventures.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/gear"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105"
              >
                Explore Gear

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}