import ContactCTA from "@/components/contact/ContactCTA";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationSection from "@/components/contact/LocationSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

       <ContactInfo />

       <ContactForm />

        <LocationSection />

      <ContactFAQ />

      <ContactCTA />
    </main>
  );
}