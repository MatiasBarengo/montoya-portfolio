"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/lib/animation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { smoothScroll } = useSmoothScroll();

  // Close menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScroll('portfolio');
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="relative z-50 md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="flex flex-col justify-center items-center">
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center p-8">
          <nav className="space-y-8">
            <div className="text-center">
              <div className="text-2xl font-medium mb-2">Portfolio</div>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-lg hover:text-white">
                    Overlapping Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/parallax-gallery" className="text-lg hover:text-white">
                    Parallax Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio-grid" className="text-lg hover:text-white">
                    Portfolio Grid
                  </Link>
                </li>
                <li>
                  <Link href="/archive-gallery" className="text-lg hover:text-white">
                    Archive Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link href="/about" className="text-xl font-medium hover:text-white">
                About
              </Link>
            </div>

            <div className="text-center">
              <Link href="/stories" className="text-xl font-medium hover:text-white">
                Stories
              </Link>
            </div>

            <div className="text-center">
              <Link href="/shop" className="text-xl font-medium hover:text-white">
                Shop
              </Link>
            </div>

            <div className="text-center">
              <Link href="/contact" className="text-xl font-medium hover:text-white">
                Contact
              </Link>
            </div>

            <div className="text-center">
              <Link href="/#portfolio" onClick={handleScroll} className="text-xl font-medium hover:text-white">
                Portfolio
              </Link>
            </div>
          </nav>

          <div className="mt-12 flex space-x-6">
            <Link href="https://dribbble.com/" className="text-sm hover:text-white">Db</Link>
            <Link href="https://twitter.com/" className="text-sm hover:text-white">Tw</Link>
            <Link href="https://www.behance.net/" className="text-sm hover:text-white">Be</Link>
            <Link href="https://www.facebook.com/" className="text-sm hover:text-white">Fb</Link>
            <Link href="https://www.instagram.com/" className="text-sm hover:text-white">In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
