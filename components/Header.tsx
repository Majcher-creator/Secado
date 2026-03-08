"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="compact" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Kontakt
            </button>
          </nav>

          {/* Phone Number */}
          <a
            href="tel:505438585"
            className="hidden md:flex items-center space-x-2 text-primary hover:text-primary-light transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-semibold">505 438 585</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("o-nas")}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded transition-colors duration-200"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded transition-colors duration-200"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded transition-colors duration-200"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded transition-colors duration-200"
            >
              Kontakt
            </button>
            <a
              href="tel:505438585"
              className="block w-full text-left py-2 px-4 text-primary font-semibold hover:bg-primary/10 rounded transition-colors duration-200"
            >
              📞 505 438 585
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
