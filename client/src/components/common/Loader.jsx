const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 overflow-hidden">
      {/* Background Texture: Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(#026f41 0.5px, transparent 0.5px), linear-gradient(90deg, #026f41 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative flex flex-col items-center">
        {/* Abstract Architectural Monogram */}
        <div className="relative w-32 h-32 mb-16">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* The Main Pillar - Saffron */}
            <path 
              d="M30 80V20L50 10L70 20V80" 
              stroke="#E68900" 
              strokeWidth="1.5" 
              strokeLinecap="square"
              className="animate-[draw_2.5s_cubic-bezier(0.65,0,0.35,1)_infinite]"
              style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
            />
            {/* The Precision Cross-Section - Green */}
            <path 
              d="M30 40H70M40 60H60" 
              stroke="#026f41" 
              strokeWidth="0.8" 
              className="animate-[fadeIn_3s_ease-in-out_infinite]"
            />
            {/* Corner Accents (Technical Marks) */}
            <path d="M25 80H35M30 75V85" stroke="#E68900" strokeWidth="0.5" />
            <path d="M65 80H75M70 75V85" stroke="#E68900" strokeWidth="0.5" />
          </svg>
          
          {/* Subtle Outer Ring Glow */}
          <div className="absolute inset-0 rounded-full border border-[#026f41]/10 scale-150 animate-[ping_4s_linear_infinite]"></div>
        </div>

        {/* Branding & Loading Text */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-[#E68900] font-light tracking-[0.6em] text-xs uppercase sm:text-sm">
              Architecting Legacies
            </h2>
            <p className="text-[#026f41] font-serif italic text-[10px] tracking-[0.3em] opacity-80">
              Personalized Excellence
            </p>
          </div>

          {/* Premium Minimal Progress Line */}
          <div className="relative w-56 h-[1px] bg-gray-100 overflow-hidden">
            <div 
              className="absolute h-full bg-[#E68900] w-24 animate-[slide_2s_cubic-bezier(0.45,0,0.55,1)_infinite]"
              style={{
                boxShadow: '0 0 8px #E68900'
              }}
            ></div>
          </div>
          
          <span className="text-gray-300 font-mono text-[9px] uppercase tracking-widest animate-pulse">
            Establishing Foundation...
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw {
          0% { stroke-dashoffset: 200; opacity: 0; }
          40% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }
        @keyframes fadeIn {
          0%, 100% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes slide {
          0% { left: -50%; width: 10%; }
          50% { width: 40%; }
          100% { left: 110%; width: 10%; }
        }
      `}} />
    </div>
  );
};

export default Loader;