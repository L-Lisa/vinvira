const WebbIcon = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner Grid Pattern */}
      <g opacity="0.6">
        {/* Horizontal Lines */}
        <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Vertical Lines */}
        <line x1="30" y1="20" x2="30" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="20" x2="70" y2="80" stroke="currentColor" strokeWidth="1.5" />
      </g>
      
      {/* Central Web Node */}
      <circle 
        cx="50" 
        cy="50" 
        r="8" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Connection Lines */}
      <g opacity="0.4">
        <line x1="50" y1="42" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="58" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="42" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="58" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* Floating Elements */}
      <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="75" cy="25" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="25" cy="75" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="75" cy="75" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

export default WebbIcon;
