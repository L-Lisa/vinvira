const SeoIcon = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Magnifying Glass */}
      <circle 
        cx="45" 
        cy="45" 
        r="25" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        opacity="0.8"
      />
      
      {/* Magnifying Glass Handle */}
      <line 
        x1="65" 
        y1="65" 
        x2="85" 
        y2="85" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Search Dot */}
      <circle 
        cx="40" 
        cy="40" 
        r="3" 
        fill="currentColor" 
        opacity="0.9"
      />
      
      {/* SEO Elements */}
      <g opacity="0.6">
        {/* Chart Bars */}
        <rect x="20" y="70" width="4" height="15" fill="currentColor" />
        <rect x="28" y="65" width="4" height="20" fill="currentColor" />
        <rect x="36" y="60" width="4" height="25" fill="currentColor" />
        <rect x="44" y="55" width="4" height="30" fill="currentColor" />
        
        {/* Target Lines */}
        <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="1" />
        <line x1="15" y1="75" x2="85" y2="75" stroke="currentColor" strokeWidth="1" />
        <line x1="15" y1="65" x2="85" y2="65" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Floating Elements */}
      <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="75" cy="25" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="25" cy="75" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="75" cy="75" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
};

export default SeoIcon;
