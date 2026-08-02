"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactCTA() {
      return (
            <section className="pb-28">
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
                              className="overflow-hidden rounded-[36px] bg-gradient-to-r from-primary to-primary/80 px-8 py-20 text-center text-white shadow-2xl"
                        >
                              <h2 className="text-4xl font-bold lg:text-5xl">
                                    Ready for Your Next Adventure?
                              </h2>

                              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
                                    Browse hundreds of premium sports and outdoor equipment
                                    available for rent across Bangladesh.
                              </p>

                              <Link href="/gear">
                                    <Button
                                          size="lg"
                                          className="mt-10 h-14 rounded-xl bg-white px-10 text-primary hover:bg-white/90"
                                    >
                                          Explore Gear

                                          <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                              </Link>

                        </motion.div>

                  </div>
            </section>
      );
}