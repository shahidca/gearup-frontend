"use client";

import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To make premium outdoor and sports equipment accessible to everyone by connecting renters with trusted providers through a secure, modern, and easy-to-use marketplace.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become Bangladesh's leading outdoor equipment rental platform, empowering more people to explore nature without the burden of expensive ownership.",
    icon: Rocket,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Mission & Vision
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Building the Future of
            Outdoor Rentals
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything we do is focused on making outdoor
            adventures easier, more affordable, and more
            enjoyable for everyone.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
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
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-border bg-card p-10 shadow-lg transition-all hover:border-primary/40 hover:shadow-2xl"
              >

                {/* Icon */}

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">

                  <Icon className="h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold">
                  {card.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-muted-foreground">
                  {card.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}