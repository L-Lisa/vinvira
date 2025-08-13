import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className={`font-bold text-vin-primary transition-transform duration-300 ease-in-out ${
          isScrolled ? 'scale-96' : 'scale-100'
        }`}>
          VINVIRA
        </a>
        <nav className="flex gap-6 text-sm">
          <a href="/webb" className="hover:text-vin-primary hover:shadow-glow transition-all duration-200">Webb</a>
          <a href="/seo" className="hover:text-vin-primary hover:shadow-glow transition-all duration-200">SEO</a>
          <a href="/admin" className="hover:text-vin-primary hover:shadow-glow transition-all duration-200">Admin</a>
          <a href="/projekt" className="hover:text-vin-primary hover:shadow-glow transition-all duration-200">Projekt</a>
          <a href="#contact" className="px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-vin-primary to-vin-highlight shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-300 ease-out">
            Boka möte
          </a>
        </nav>
      </div>
    </header>
  );
}
