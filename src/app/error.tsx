"use client";

import { Button } from "@/components/ui/button";


export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {

  return (

    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Something went wrong
        </h1>


        <p className="mt-4 text-muted-foreground">
          We couldn't load this page.
        </p>


        <Button
          onClick={reset}
          className="mt-6"
        >
          Try Again
        </Button>


      </div>

    </div>

  );
}