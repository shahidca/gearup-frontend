"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/about/about-hero.jpg"
          alt="Outdoor Adventure"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

      </div>

      {/* Content */}

      <div className="relative container mx-auto flex min-h-[80vh] items-center px-4 py-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-md"
        >

          {/* Badge */}

          <span className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            About GearUp
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Making Outdoor Adventures Accessible
            to Everyone
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            GearUp is a trusted rental marketplace connecting
            outdoor enthusiasts with verified equipment
            providers. Rent premium camping, trekking,
            cycling, photography, and sports gear easily,
            safely, and affordably.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/gear"
              className="rounded-xl bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
            >
              Explore Gear
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}