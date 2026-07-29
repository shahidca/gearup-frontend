
import CoreValues from "@/components/about/CoreValues";
import MissionVision from "@/components/about/MissionVision";
import Story from "@/components/about/Story";
import AboutHero from "@/components/about/AboutHero";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Stats from "@/components/about/Stats";
import TeamSection from "@/components/about/TeamSection";
import FAQ from "@/components/about/FAQ";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main>

      <AboutHero />

      <Story />

      <MissionVision />

      <WhyChooseUs />

      <Stats />

      <CoreValues />

      <TeamSection />

      <FAQ />
      <CTA />

    </main>
  );
}