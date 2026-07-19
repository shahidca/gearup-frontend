"use client";

import { Container } from "@/components/layout";

import BackgroundGlow from "./BackgroundGlow";
import HeroImage from "./hero-image";
import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <BackgroundGlow />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <HeroContent/>
          </div>

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
