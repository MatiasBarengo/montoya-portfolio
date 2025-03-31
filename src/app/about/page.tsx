import Header from "@/components/layout/Header";
import AboutHero from "@/components/about/AboutHero";
import Awards from "@/components/about/Awards";
import Services from "@/components/about/Services";
import Team from "@/components/about/Team";
import Collaborators from "@/components/about/Collaborators";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export const metadata = {
  title: "About Us - Montoya Portfolio",
  description: "Learn about our creative studio specialized in strategy, branding design, and development."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <Awards />
      <Services />
      <Team />
      <Collaborators />
      <Footer />
      <BackToTop />
    </main>
  );
}
