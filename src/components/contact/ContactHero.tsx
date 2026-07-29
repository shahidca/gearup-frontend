"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContact } from "@/hooks/useContact";

export default function ContactForm() {
  const { mutate, isPending } = useContact();

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    mutate(
      {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  }

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
          {/* Heading */}

          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            <p className="mt-3 text-muted-foreground">
              Fill out the form below and we'll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                name="name"
                placeholder="Full Name"
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                name="phone"
                placeholder="Phone Number"
              />

              <Input
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <textarea
              name="message"
              rows={7}
              required
              placeholder="Write your message..."
              className="w-full rounded-xl border bg-background p-4 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 px-8"
            >
              {isPending ? (
                "Sending..."
              ) : (
                <>
                  Send Message

                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}