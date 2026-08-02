"use client";

import { motion } from "framer-motion";
import {
      MapPin,
      Clock,
      Mail,
      Phone,
} from "lucide-react";

export default function LocationSection() {
      return (
            <section className="pb-24">
                  <div className="container mx-auto px-4">

                        <div className="mb-16 text-center">

                              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    Visit Us
                              </span>

                              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                                    Visit Our Office
                              </h2>

                              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                                    We're proudly based in Satkhira Sadar. Whether you have a
                                    question about rentals or want to discuss a partnership,
                                    our team is always happy to help.
                              </p>

                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1.3fr_420px]">

                              {/* Google Map */}

                              <motion.div
                                    initial={{
                                          opacity: 0,
                                          x: -40,
                                    }}
                                    whileInView={{
                                          opacity: 1,
                                          x: 0,
                                    }}
                                    viewport={{
                                          once: true,
                                    }}
                                    transition={{
                                          duration: 0.6,
                                    }}
                                    className="overflow-hidden rounded-3xl border shadow-xl"
                              >
                                    <iframe
                                          title="GearUp Office"
                                          src="https://www.google.com/maps?q=Satkhira+Sadar,+Satkhira,+Bangladesh&output=embed"
                                          width="100%"
                                          height="500"
                                          loading="lazy"
                                          className="border-0"
                                    />
                              </motion.div>

                              {/* Office Details */}

                              <motion.div
                                    initial={{
                                          opacity: 0,
                                          x: 40,
                                    }}
                                    whileInView={{
                                          opacity: 1,
                                          x: 0,
                                    }}
                                    viewport={{
                                          once: true,
                                    }}
                                    transition={{
                                          duration: 0.6,
                                    }}
                                    className="rounded-3xl border bg-card p-8 shadow-xl"
                              >

                                    <h3 className="mb-8 text-2xl font-bold">
                                          Contact Details
                                    </h3>

                                    <div className="space-y-8">

                                          <div className="flex gap-4">

                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                                      <MapPin className="h-6 w-6 text-primary" />
                                                </div>

                                                <div>

                                                      <h4 className="font-semibold">
                                                            Address
                                                      </h4>

                                                      <p className="mt-2 text-muted-foreground">
                                                            Satkhira Sadar,
                                                            <br />
                                                            Satkhira 9400,
                                                            <br />
                                                            Bhomra Road Mahmudpur
                                                      </p>

                                                </div>

                                          </div>

                                          <div className="flex gap-4">

                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                                      <Clock className="h-6 w-6 text-primary" />
                                                </div>

                                                <div>

                                                      <h4 className="font-semibold">
                                                            Business Hours
                                                      </h4>

                                                      <p className="mt-2 text-muted-foreground">
                                                            Saturday – Thursday
                                                      </p>

                                                      <p className="text-muted-foreground">
                                                            9:00 AM – 8:00 PM
                                                      </p>

                                                      <p className="text-sm text-primary">
                                                            Friday: Closed
                                                      </p>

                                                </div>

                                          </div>

                                          <div className="flex gap-4">

                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                                      <Mail className="h-6 w-6 text-primary" />
                                                </div>

                                                <div>

                                                      <h4 className="font-semibold">
                                                            Email
                                                      </h4>

                                                      <p className="mt-2 text-muted-foreground">
                                                            mdshahidhossain.dev@gmail.com
                                                      </p>

                                                </div>

                                          </div>

                                          <div className="flex gap-4">

                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                                      <Phone className="h-6 w-6 text-primary" />
                                                </div>

                                                <div>

                                                      <h4 className="font-semibold">
                                                            Phone
                                                      </h4>

                                                      <p className="mt-2 text-muted-foreground">
                                                            +880 1304-503203
                                                      </p>

                                                </div>

                                          </div>

                                    </div>

                              </motion.div>

                        </div>

                  </div>
            </section>
      );
}