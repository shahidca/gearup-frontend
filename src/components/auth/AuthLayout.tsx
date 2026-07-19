"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">

        {/* Back Home */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-card p-8 shadow-2xl"
        >
          {/* Logo */}
          <Link
            href="/"
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
              G
            </div>

            <div>
              <h2 className="text-xl font-bold">
                GearUp
              </h2>

              <p className="-mt-1 text-xs text-muted-foreground">
                Rental Marketplace
              </p>
            </div>
          </Link>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              {title}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {children}
        </motion.div>
      </div>
    </main>
  );
}