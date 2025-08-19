import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-accessible"
      role="banner"
    >
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className={`flex items-center gap-3 font-bold text-vin-primary-600 transition-transform duration-300 ease-in-out scale-100`}
          aria-label="Vinvira - Gå till startsidan"
        >
          <Image 
            src="/logo-vinvira.svg" 
            alt="" 
            width={32} 
            height={32} 
            className="w-8 h-8"
            aria-hidden="true"
          />
          <span>VINVIRA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm" role="navigation" aria-label="Huvudnavigation">
          <a 
            href="/webb" 
            className="text-vin-neutral-700 hover:text-vin-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1"
          >
            Webb
          </a>
          <a 
            href="/seo" 
            className="text-vin-neutral-700 hover:text-vin-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1"
          >
            SEO
          </a>
          <a 
            /* href="/admin" 
            className="text-vin-neutral-700 hover:text-vin-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1" */
          >
            {/* Admin (tillfälligt dold) */}
          </a>
          <a 
            /* href="/projekt" 
            className="text-vin-neutral-700 hover:text-vin-primary-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1" */
          >
            {/* Projekt (tillfälligt dold) */}
          </a>
          <a 
            href="mailto:hej@vinvira.se" 
            className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
          >
            Boka möte
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-vin-neutral-700 hover:text-vin-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Öppna menyn"
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav 
          className="md:hidden border-t border-vin-neutral-200 bg-white/95 backdrop-blur-md"
          role="navigation"
          aria-label="Mobilnavigation"
          id="mobile-menu"
        >
          <div className="px-4 py-2 space-y-1">
            <a 
              href="/webb" 
              className="block px-4 py-3 text-vin-neutral-700 hover:text-vin-primary-600 hover:bg-vin-neutral-50 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300"
              onClick={closeMobileMenu}
            >
              Webb
            </a>
            <a 
              href="/seo" 
              className="block px-4 py-3 text-vin-neutral-700 hover:text-vin-primary-600 hover:bg-vin-neutral-50 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300"
              onClick={closeMobileMenu}
            >
              SEO
            </a>
            <a 
              /* href="/admin" 
              className="block px-4 py-3 text-vin-neutral-700 hover:text-vin-primary-600 hover:bg-vin-neutral-50 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300"
              onClick={closeMobileMenu} */
            >
              {/* Admin (tillfälligt dold) */}
            </a>
            <a 
              /* href="/projekt" 
              className="block px-4 py-3 text-vin-neutral-700 hover:text-vin-primary-600 hover:bg-vin-neutral-50 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300"
              onClick={closeMobileMenu} */
            >
              {/* Projekt (tillfälligt dold) */}
            </a>
            <a 
              href="mailto:hej@vinvira.se" 
              className="block px-4 py-3 text-vin-primary-600 font-semibold hover:text-vin-primary-700 hover:bg-vin-primary-50 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300"
              onClick={closeMobileMenu}
            >
              Boka möte
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
