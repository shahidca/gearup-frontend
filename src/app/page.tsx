import { Hero } from "@/components/home";
import Navbar from "@/components/layout/navbar";
import { Categories } from "@/components/home/categories";
import { FeaturedGear } from "@/components/home/featured-gear";
import { WhyChoose } from "@/components/home/hero/why-choose";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { Footer } from "@/components/layout/footer";
import SectionReveal from "@/components/shared/SectionReveal";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollToTop from "@/components/shared/ScrollToTop";


export default function HomePage() {
  return (
    <main>

      <ScrollProgress />
      <Navbar />

      <Hero />

      <SectionReveal>
        <Categories />
      </SectionReveal>

      <SectionReveal>
        <FeaturedGear />
      </SectionReveal>

      <SectionReveal>
        <WhyChoose />
      </SectionReveal>

      <SectionReveal>
        <HowItWorks />
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal>
        <CTA />
      </SectionReveal>

      <Footer />

      <ScrollToTop />
    </main>
  );
}