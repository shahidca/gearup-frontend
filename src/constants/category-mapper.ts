import {
  Tent,
  Bike,
  Mountain,
  Camera,
  Waves,
  Snowflake,
} from "lucide-react";

export const categoryIcons: Record<string, any> = {
  camping: Tent,
  cycling: Bike,
  hiking: Mountain,
  photography: Camera,
  "water-sports": Waves,
  "winter-sports": Snowflake,
};

export const categoryImages: Record<string, string> = {
  camping: "/categories/camping.jpg",
  cycling: "/categories/cycling.jpg",
  hiking: "/categories/hiking.jpg",
  photography: "/categories/photography.jpg",
  "water-sports": "/categories/water-sports.jpg",
  "winter-sports": "/categories/winter-sports.jpg",
};