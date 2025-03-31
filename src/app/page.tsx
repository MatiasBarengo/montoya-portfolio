import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Skills from "@/components/home/Skills";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Skills />
      <Footer />
      <BackToTop />
    </main>
  );
}
