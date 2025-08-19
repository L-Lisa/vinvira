import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback } from 'react';

// Throttle function for performance optimization
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false);

  // Cache DOM queries to avoid repeated lookups
  const sections = useMemo(() => {
    if (typeof window !== 'undefined') {
      return Array.from(document.querySelectorAll('section'));
    }
    return [];
  }, []);

  // Memoized background detection function
  const detectBackground = useCallback((scrollPosition) => {
    if (sections.length === 0) return;

    let currentSection = null;
    
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        currentSection = section;
        break;
      }
    }
    
    if (currentSection) {
      const computedStyle = window.getComputedStyle(currentSection);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Simplified dark background detection
      const isDark = backgroundColor.includes('rgb(17, 24, 39)') || // vin-neutral-900
                     backgroundColor.includes('rgb(31, 41, 55)') || // vin-neutral-800
                     backgroundColor.includes('rgba(17, 24, 39') || // vin-neutral-900 with opacity
                     backgroundColor.includes('rgba(31, 41, 55');   // vin-neutral-800 with opacity
      
      setIsOnDarkBackground(isDark);
    }
  }, [sections]);

  // Throttled scroll handler for performance
  const throttledScrollHandler = useMemo(() => 
    throttle(() => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
      detectBackground(scrollY + window.innerHeight / 2);
    }, 100), // Throttle to 100ms
    [detectBackground]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial check
    throttledScrollHandler();
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
      role="complementary"
      aria-label="Snabb kontakt"
    >
      {/* Adaptive Background Container */}
      <div className={`relative group ${
        isOnDarkBackground 
          ? 'bg-white/95 border-vin-neutral-200' 
          : 'bg-vin-neutral-900/95 border-vin-neutral-700'
      } backdrop-blur-md rounded-full border shadow-accessible p-2`}>
        
        {/* Main CTA Button */}
        <a
          href="mailto:hej@vinvira.se"
          className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${
            isOnDarkBackground 
              ? 'bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white focus-visible:ring-vin-primary-300' 
              : 'bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 text-white focus-visible:ring-vin-primary-200'
          }`}
          aria-label="Boka gratis möte via mejl på hej@vinvira.se"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Boka gratis möte
        </a>
      </div>

      {/* Quick Contact for Mobile - Fixed touch target size */}
      <div className="md:hidden mt-3 flex justify-center">
        <a
          href="mailto:hej@vinvira.se"
          className={`inline-flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isOnDarkBackground 
              ? 'bg-white border-vin-neutral-200 text-vin-neutral-700 hover:bg-vin-neutral-50 focus-visible:ring-vin-primary-300' 
              : 'bg-vin-neutral-800 border-vin-neutral-600 text-white hover:bg-vin-neutral-700 focus-visible:ring-vin-primary-200'
          }`}
          aria-label="Skicka e-post till hej@vinvira.se"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
