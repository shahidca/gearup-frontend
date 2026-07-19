"use client";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { Container } from "@/components/layout";
import NavLinks from "./nav-links";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        height: isScrolled ? 72 : 80,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/90 shadow-md"
          : "border-transparent bg-background/60"
      }`}
    >
      <Container>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-[72px]" : "h-20"
          }`}
        >
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </div>

          {/* Right Side */}
         <div className="flex items-center gap-3">
            <ThemeToggle />

  {/* Desktop Buttons */}
  <div className="hidden md:flex items-center gap-3">

    <Link
      href="/login"
      className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
    >
      Login
    </Link>

    <Link
      href="/register"
      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      Get Started
    </Link>

  </div>

  {/* Mobile Menu */}
  <MobileMenu />

</div>
        </nav>
      </Container>
    </motion.header>
  );
}