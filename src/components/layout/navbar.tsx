"use client";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { Container } from "@/components/layout";
import NavLinks from "./nav-links";
import GuestMenu from "./navbar/guest-menu";
import UserMenu from "./navbar/user-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: user, isLoading } = useCurrentUser();

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
 {/* Desktop Auth Area */}
{isLoading ? (
  <div className="hidden md:flex h-10 w-28 animate-pulse rounded-xl bg-muted" />
) : user ? (
  <UserMenu />
) : (
  <GuestMenu />
)}

  {/* Mobile Menu */}
  <MobileMenu />

</div>
        </nav>
      </Container>
    </motion.header>
  );
}