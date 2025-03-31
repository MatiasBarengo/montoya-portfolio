"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
          MONTOYA
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
        <Link
          href="#portfolio"
          className="flex items-center space-x-2 group"
          scroll={false}
        >
          <a href="#portfolio" className="subtitle group-hover:text-white transition-colors">Click here or Scroll to Explore</a>
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
            className="text-muted group-hover:text-white transition-colors animate-bounce"
          >
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </Link>

        <div className="subtitle">Featured Projects</div>
      </div>
    </section>
  );
};

export default Hero;
