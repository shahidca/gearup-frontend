"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Mountain,
} from "lucide-react";

import { Container } from "@/components/layout";

import {
  quickLinks,
  categories,
  supportLinks,
  socials,
} from "./footer-data";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
        {/* Brand */}
<div className="lg:col-span-2">
  <Link href="/" className="flex items-center gap-2">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
      G
    </div>

    <div>
      <h2 className="text-xl font-bold">GearUp</h2>
      <p className="-mt-1 text-xs text-muted-foreground">
        Rental Marketplace
      </p>
    </div>
  </Link>

  <p className="mt-6 max-w-md leading-7 text-muted-foreground">
    GearUp is Bangladesh's premium outdoor gear rental marketplace,
    helping adventurers rent high-quality camping, hiking, cycling,
    photography, and sports equipment from trusted providers.
  </p>

  {/* Social Icons */}
  <div className="mt-8 flex gap-3">
    {socials.map((social, index) => {
      const Icon = social.icon;

      return (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Icon size={20} />
        </motion.a>
      );
    })}
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className="text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <span>shahid@gearup.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <span>+880 1304503203</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GearUp. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}