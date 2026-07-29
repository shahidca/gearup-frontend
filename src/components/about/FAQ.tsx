"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does GearUp work?",
    answer:
      "GearUp connects customers with verified providers. Browse equipment, choose your rental dates, complete a secure payment, and enjoy your adventure.",
  },
  {
    question: "Are all providers verified?",
    answer:
      "Yes. Every provider goes through a verification process before joining the marketplace to ensure equipment quality and customer safety.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Cancellation depends on the provider's cancellation policy. Most bookings can be cancelled before the rental period begins.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. All payments are processed using trusted payment gateways with secure encryption to protect your information.",
  },
  {
    question: "Can I become a provider?",
    answer:
      "Yes. Anyone with quality sports or outdoor equipment can register as a provider and start earning by renting their gear through GearUp.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto max-w-4xl px-4">
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
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Find answers to the most common questions about renting
            equipment with GearUp.
          </p>
        </motion.div>

        {/* Accordion */}

        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-2xl border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}