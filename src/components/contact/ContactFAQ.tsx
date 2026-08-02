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
            id: "faq-1",
            question: "How quickly do you respond?",
            answer:
                  "Our support team typically replies within 24 hours. During business hours, most enquiries receive a response much sooner.",
      },
      {
            id: "faq-2",
            question: "Can I rent equipment for multiple days?",
            answer:
                  "Yes. You can rent equipment for a single day or multiple days depending on the provider's availability.",
      },
      {
            id: "faq-3",
            question: "How do I become a GearUp provider?",
            answer:
                  "Create a provider account, complete your verification, and start listing your equipment for rent.",
      },
      {
            id: "faq-4",
            question: "Can I cancel my booking?",
            answer:
                  "Yes. Cancellation policies depend on each provider. You can view the cancellation policy before confirming your booking.",
      },
];
export default function ContactFAQ() {
      return (
            <section className="pb-24">
                  <div className="container mx-auto px-4">

                        <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="mx-auto mb-14 max-w-3xl text-center"
                        >
                              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    FAQ
                              </span>

                              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                                    Frequently Asked Questions
                              </h2>

                              <p className="mt-5 text-lg text-muted-foreground">
                                    Find quick answers to the most common questions about
                                    GearUp rentals and support.
                              </p>
                        </motion.div>

                        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 shadow-xl">

                              <Accordion defaultValue={[faqs[0].id]}>
                                    {faqs.map((faq) => (
                                          <AccordionItem
                                                key={faq.id}
                                                value={faq.id}
                                          >
                                                <AccordionTrigger className="text-left text-lg font-semibold">
                                                      {faq.question}
                                                </AccordionTrigger>

                                                <AccordionContent className="text-base leading-7 text-muted-foreground">
                                                      {faq.answer}
                                                </AccordionContent>
                                          </AccordionItem>
                                    ))}
                              </Accordion>

                        </div>

                  </div>
            </section>
      );
}