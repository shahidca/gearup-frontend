"use client";

import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";


export default function NotFound() {

  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-primary">
          404
        </h1>


        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>


        <p className="mt-4 max-w-md text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>


        <Link href="/">

          <Button
            className="mt-8 gap-2"
          >

            <Home className="h-4 w-4"/>

            Back Home

          </Button>

        </Link>


      </div>

    </div>
  );
}