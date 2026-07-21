"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function GearGallery({
  gear,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(
    gear.images?.[0]
  );

  return (
    <div className="space-y-5">

      {/* Main Image */}

      <motion.div
        key={selectedImage}
        initial={{
          opacity: 0,
          scale: .96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: .25,
        }}
        className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-muted"
      >
        <Image
          src={
            selectedImage ??
            "https://placehold.co/1200x800"
          }
          alt={gear.name}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Thumbnail Images */}

      {gear.images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">

          {gear.images.map((image) => (

            <button
              key={image}
              onClick={() =>
                setSelectedImage(image)
              }
              className={`relative aspect-square overflow-hidden rounded-xl border transition

                ${
                  selectedImage === image
                    ? "border-primary ring-2 ring-primary"
                    : "border-border hover:border-primary/60"
                }
              `}
            >
              <Image
                src={image}
                alt={gear.name}
                fill
                className="object-cover"
              />
            </button>

          ))}

        </div>
      )}
    </div>
  );
}