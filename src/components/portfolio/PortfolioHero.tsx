"use client";

import { useSmoothScroll } from "@/lib/animation";
import { useEffect, useState } from "react";

type CategoryType = "all" | "photo" | "video" | "design";

type PortfolioHeroProps = {
  activeFilter: CategoryType;
  setActiveFilter: (filter: CategoryType) => void;
};

const PortfolioHero = ({ activeFilter, setActiveFilter }: PortfolioHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize smooth scroll
  useSmoothScroll();

  // Add animations on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-background overflow-hidden">
      <div
        className={`container mx-auto px-6 md:px-10 text-center transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className={`hero-title transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          PROJECTS
        </h1>
        <p
          className={`subtitle max-w-3xl mx-auto mt-4 text-center transition-all duration-1000 delay-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPMENT.
          OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
        </p>
      </div>

      <div
        className={`absolute bottom-10 left-0 w-full flex justify-between items-center px-10 transition-all duration-1000 delay-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center space-x-2">
          <span className="subtitle">Scroll to Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted animate-bounce"
          >
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </div>

        <div className="flex space-x-4">
          <button
            className={`px-3 py-1 text-sm transition-all duration-300 ${
              activeFilter === "all"
                ? "border border-white rounded-full text-white"
                : "text-muted hover:text-white"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 text-sm transition-all duration-300 ${
              activeFilter === "design"
                ? "border border-white rounded-full text-white"
                : "text-muted hover:text-white"
            }`}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </button>
          <button
            className={`px-3 py-1 text-sm transition-all duration-300 ${
              activeFilter === "photo"
                ? "border border-white rounded-full text-white"
                : "text-muted hover:text-white"
            }`}
            onClick={() => setActiveFilter("photo")}
          >
            Photo
          </button>
          <button
            className={`px-3 py-1 text-sm transition-all duration-300 ${
              activeFilter === "video"
                ? "border border-white rounded-full text-white"
                : "text-muted hover:text-white"
            }`}
            onClick={() => setActiveFilter("video")}
          >
            Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
