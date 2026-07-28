"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">

      <div className="flex flex-col items-center gap-6">

        {/* Logo Animation */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-4xl font-bold text-primary-foreground shadow-xl"
        >
          G
        </motion.div>


        {/* Brand */}

        <div className="text-center">

          <h2 className="text-2xl font-bold">
            GearUp
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Preparing your adventure...
          </p>

        </div>


        {/* Loader */}

        <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">

          <motion.div
            animate={{
              x: [-200, 200],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/2 bg-primary"
          />

        </div>


      </div>

    </div>
  );
}