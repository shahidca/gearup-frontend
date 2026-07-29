"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Story() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Built for Every Adventure
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              GearUp was created with one simple goal:
              make outdoor adventures more accessible
              by allowing people to rent premium equipment
              instead of buying expensive gear.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              Whether you're planning a camping trip,
              cycling through beautiful landscapes,
              hiking mountains, or exploring photography,
              GearUp connects customers with trusted
              providers through one secure platform.
            </p>

            {/* Highlight Card */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-lg"
            >

              <Quote className="mb-4 h-10 w-10 text-primary" />

              <p className="text-lg italic">
                Trusted by outdoor enthusiasts across
                Bangladesh.
              </p>

            </motion.div>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[32px] shadow-2xl"
          >

            <Image
              src="/images/about/story.jpg"
              alt="Our Story"
              width={700}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}