"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by outdoor enthusiasts across Bangladesh.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}