"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center">
      <Link href="/" className="relative z-20">
        <Image
          src="https://ext.same-assets.com/3524448632/221910470.png"
          alt="Logo"
          width={60}
          height={24}
        />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li className="menu-item">
            <Link href="/#portfolio" onClick={handleScroll}>Portfolio</Link>
            <div className="menu-dropdown">
              <div className="px-6 py-2">
                <Link href="/" className="block py-2 hover:opacity-70">
                  Overlapping Gallery
                </Link>
                <Link href="/parallax-gallery" className="block py-2 hover:opacity-70">
                  Parallax Gallery
                </Link>
                <Link href="/portfolio-grid" className="block py-2 hover:opacity-70">
                  Portfolio Grid
                </Link>
                <Link href="/archive-gallery" className="block py-2 hover:opacity-70">
                  Archive Gallery
                </Link>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <Link href="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link href="/stories">Stories</Link>
          </li>
          <li className="menu-item">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="menu-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
