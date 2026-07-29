import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

       <ContactInfo />

       <ContactForm />
    </main>
  );
}