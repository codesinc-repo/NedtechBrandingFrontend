import React from 'react';
// If you have the top-right wave graphic exported, import it here.
// import WaveGraphic from '../../assets/top-right-wave.png'; 

const StatsSection = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ==============================================
          PART 1: DARK STATS SECTION
      =============================================== */}
      <section className="relative bg-[#0B0518] py-24 px-4 md:px-8 overflow-hidden">
        
        {/* Optional: Top Right Wave Graphic Placeholder */}
        {/* <div className="absolute top-0 right-0 pointer-events-none">
           <img src={WaveGraphic} alt="Decoration" className="w-64 h-auto opacity-50" />
        </div> */}

        <div className="container mx-auto max-w-6xl relative z-10">
            
            {/* Stats Grid with Vertical Dividers */}
            {/* 'divide-x' adds the vertical lines between columns automatically on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-500/30 gap-12 md:gap-0 mb-16">

                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center text-center px-4">
                    <span className="text-7xl md:text-8xl font-light text-white mb-6">126%</span>
                    <p className="text-slate-300 text-xl font-light leading-tight">
                        Lorem ipsum <br/> dolor sit
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center text-center px-4">
                    <span className="text-7xl md:text-8xl font-light text-white mb-6">109%</span>
                    <p className="text-slate-300 text-xl font-light leading-tight">
                        Lorem ipsum <br/> dolor sit
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center text-center px-4">
                    <span className="text-7xl md:text-8xl font-light text-white mb-6">96%</span>
                    <p className="text-slate-300 text-xl font-light leading-tight">
                        Lorem ipsum <br/> dolor sit
                    </p>
                </div>

            </div>

            {/* Date Caption */}
            <div className="text-center border-t border-white/5 pt-12 md:border-0 md:pt-0">
                <p className="text-white text-lg md:text-xl font-light tracking-wide">
                    January 2025 (website launch) to April 2025 <span className="text-slate-400 ml-1">vs last year</span>
                </p>
            </div>

        </div>
      </section>

      {/* ==============================================
          PART 2: WHITE TEXT COLUMNS
      =============================================== */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-slate-600 text-lg leading-relaxed font-light">
            
            {/* Column 1 */}
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
            </div>

            {/* Column 2 */}
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

        </div>
      </section>

    </div>
  );
};

export default StatsSection;