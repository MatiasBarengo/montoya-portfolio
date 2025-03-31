import Header from "@/components/layout/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "Contact Us - Montoya Portfolio",
  description: "Get in touch with our creative studio for strategy, branding, design, and development services."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  );
}
