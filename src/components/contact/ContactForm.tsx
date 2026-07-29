"use client";

import { useState } from "react";
import { Mail, Phone, User, FileText, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    // Backend integration comes later

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border bg-card shadow-2xl">

          {/* Header */}

          <div className="border-b bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-8 py-12 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">

              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Get In Touch
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Let's Start the Conversation
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Have a question about rentals, partnerships, or your next
                outdoor adventure? We'd love to hear from you. Send us a
                message and our team will respond as quickly as possible.
              </p>

            </div>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-8 p-8 lg:p-14"
          >
            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Full Name"
                  required
                  className="h-14 rounded-xl pl-12"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-14 rounded-xl pl-12"
                />
              </div>

            </div>

            {/* Row 2 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Phone Number"
                  className="h-14 rounded-xl pl-12"
                />
              </div>

              <div className="relative">
                <FileText className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Subject"
                  required
                  className="h-14 rounded-xl pl-12"
                />
              </div>

            </div>

            {/* Message */}

            <div>
              <textarea
                required
                rows={8}
                placeholder="Tell us how we can help you..."
                className="w-full rounded-2xl border bg-background p-5 text-base outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            {/* Bottom */}

            <div className="flex flex-col items-center justify-between gap-6 border-t pt-8 lg:flex-row">

              <div className="text-center lg:text-left">
                <h4 className="font-semibold">
                  We usually reply within 24 hours.
                </h4>

                <p className="mt-2 text-sm text-muted-foreground">
                  Your information is secure and will never be shared with
                  third parties.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="h-14 rounded-xl px-10 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Start Conversation

                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

            </div>

          </form>

        </div>
      </div>
    </section>
  );
}