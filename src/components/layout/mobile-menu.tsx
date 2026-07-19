"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>GearUp</SheetTitle>
           <div className="mt-4 flex justify-end px-4">
                <ThemeToggle />
         </div>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-5 px-4">
          <Link
            href="/"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/gear"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Gear
          </Link>

          <Link
            href="/about"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>

          <div className="my-3 border-t" />

          <Link href="/login">
            <Button className="w-full">
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button
              variant="outline"
              className="mt-2 w-full"
            >
              Register
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}