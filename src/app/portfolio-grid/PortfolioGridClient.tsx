"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

type CategoryType = "all" | "photo" | "video" | "design";

export default function PortfolioGridClient() {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");

  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <PortfolioGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Footer />
      <BackToTop />
    </main>
  );
}
