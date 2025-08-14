import Image from 'next/image';

const LogoOrb = ({ size = 400, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Main Orb with Gradient Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vin-primary via-vin-highlight to-vin-accent animate-orb-breathe">
        {/* Inner Glow Effect */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-vin-primary/20 via-vin-highlight/20 to-vin-accent/20 animate-orb-glow" />
        
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/5 border border-white/10" />
        
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24 opacity-30 animate-orb-logo">
            <Image
              src="/logo-vinvira.svg"
              alt="Vinvira Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Subtle Rotation Ring */}
        <div className="absolute inset-2 rounded-full border border-white/5 animate-orb-rotate" />
        <div className="absolute inset-6 rounded-full border border-white/3 animate-orb-rotate-reverse" />
      </div>
      
      {/* Outer Glow Shadow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vin-primary/20 via-vin-highlight/20 to-vin-accent/20 blur-2xl animate-orb-shadow" />
    </div>
  );
};

export default LogoOrb;
