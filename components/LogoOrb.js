import Image from 'next/image';
import { useState, useEffect } from 'react';

const LogoOrb = ({ size = 400, className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Gentle scroll-reactive intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate gentle glow intensity based on scroll
  const glowIntensity = Math.min(0.3 + (scrollY * 0.0001), 0.6);
  
  return (
    <div 
      className={`relative group ${className}`} 
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Orb with Beautiful Color Harmony */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vin-primary-500 via-vin-secondary-500 to-vin-peachfuzz animate-orb-breathe">
        {/* Inner Glow Effect - Gentle and Breathing */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-vin-primary-200/30 via-vin-secondary-200/30 to-vin-peachfuzz/30 animate-orb-glow" />
        
        {/* Glassmorphism Overlay - Subtle and Elegant */}
        <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/5 border border-white/10" />
        
        {/* Logo Watermark - Gentle Fade */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24 opacity-20 animate-orb-logo">
            <Image
              src="/logo-vinvira.svg"
              alt="Vinvira Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Subtle Rotation Rings - Gentle Movement */}
        <div className="absolute inset-2 rounded-full border border-white/5 animate-orb-rotate" />
        <div className="absolute inset-6 rounded-full border border-white/3 animate-orb-rotate-reverse" />
      </div>
      
      {/* Outer Glow Shadow - Scroll-Reactive and Gentle */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle, 
            rgba(139, 92, 246, ${glowIntensity * 0.4}) 0%, 
            rgba(59, 130, 246, ${glowIntensity * 0.3}) 30%, 
            rgba(255, 182, 163, ${glowIntensity * 0.2}) 70%, 
            transparent 100%
          )`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
        }}
      />
      
      {/* Hover Enhancement - Gentle and Responsive */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vin-primary-100/10 via-vin-secondary-100/10 to-vin-peachfuzz/10 animate-pulse" />
      )}
    </div>
  );
};

export default LogoOrb;
