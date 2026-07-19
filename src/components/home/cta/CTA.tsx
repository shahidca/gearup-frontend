"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-primary via-primary/90 to-primary p-10 text-primary-foreground shadow-2xl lg:p-16"
        >
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Brand Logo */}
            <Link
              href="/"
              className="mx-auto mb-8 inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-xl font-bold text-primary shadow-lg transition-transform duration-300 hover:scale-105">
                G
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  GearUp
                </h2>

                <p className="text-sm text-white/80">
                  Rental Marketplace
                </p>
              </div>
            </Link>

            {/* Heading */}
            <h2 className="text-4xl font-bold lg:text-5xl">
              Ready for Your Next Adventure?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Discover premium outdoor and sports equipment from trusted
              providers across Bangladesh. Rent what you need or grow your
              business by listing your own gear.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link
                  href="/gear"
                  className="flex items-center gap-2"
                >
                  Explore Gear
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="/register"
                  className="flex items-center gap-2"
                >
                  <Store className="h-4 w-4" />
                  Become a Provider
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <h3 className="text-2xl font-bold">5000+</h3>
                <p className="text-sm text-white/80">Rentals</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">1200+</h3>
                <p className="text-sm text-white/80">Providers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">4.9★</h3>
                <p className="text-sm text-white/80">Customer Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}