"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 10000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    number: 500,
    suffix: "+",
    label: "Verified Providers",
  },
  {
    number: 2000,
    suffix: "+",
    label: "Rental Gear",
  },
  {
    number: 99,
    suffix: "%",
    label: "Customer Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">
            Trusted by Thousands
          </h2>

          <p className="mt-5 text-lg text-primary-foreground/80">
            GearUp continues to grow thanks to our amazing community of
            customers and providers.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <h3 className="text-5xl font-extrabold">
                <CountUp
                  end={item.number}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <p className="mt-4 text-lg text-primary-foreground/80">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}