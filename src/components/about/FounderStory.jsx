import React from 'react';
// Import the wave graphic for the Founder Story card
import cardWaveGraphic from '../../assets/card-wave.png';

const FounderAndMission = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* =========================================================
          SECTION 1: FOUNDER STORY (Light Background)
      ========================================================== */}
      <section className="w-full bg-[#E5E5E5] pt-24 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col items-center">
          
          {/* Heading & Subheading */}
          <h2 className="text-[#0F172A] text-3xl md:text-5xl font-normal text-center mb-6 tracking-tight">
            NedTech Founder Story
          </h2>
          <p className="text-[#475569] text-lg md:text-xl font-light text-center max-w-3xl mb-16 leading-relaxed">
            NedTech.ai was born out of a simple yet powerful belief:<br className="hidden md:block" />
            small businesses deserve the same advanced tools.
          </p>

          {/* Cards Carousel */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 w-full max-w-6xl relative mb-12">
            
            {/* Left Arrow */}
            <button className="hidden xl:flex items-center justify-center p-2 text-[#7C3AED] hover:scale-110 transition-transform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Card 01 */}
            <div className="w-full max-w-xs xl:w-[280px] h-[280px] bg-[#05091D] rounded-3xl p-8 flex flex-col justify-center shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
              <span className="text-[#7C3AED] text-xl font-medium mb-4 block">01</span>
              <p className="text-white text-2xl font-normal leading-snug">
                Faced small business struggles first-hand.
              </p>
            </div>

            {/* Card 02 (Center Highlight) */}
            <div className="w-full max-w-sm xl:w-[350px] h-[350px] bg-[#05091D] rounded-3xl p-10 flex flex-col justify-center shadow-2xl relative z-10 overflow-hidden scale-100 xl:scale-105">
              <span className="text-[#7C3AED] text-2xl font-medium mb-4 block">02</span>
              <p className="text-white text-3xl font-normal leading-tight relative z-10">
                Noticed lack of smart, affordable automation.
              </p>
              {/* Wave Asset */}
              <img 
                src={cardWaveGraphic} 
                alt="" 
                className="absolute bottom-0 right-0 w-40 h-40 object-cover object-bottom opacity-100 pointer-events-none translate-y-4 translate-x-4"
              />
            </div>

            {/* Card 03 */}
            <div className="w-full max-w-xs xl:w-[280px] h-[280px] bg-[#05091D] rounded-3xl p-8 flex flex-col justify-center shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
              <span className="text-[#7C3AED] text-xl font-medium mb-4 block">03</span>
              <p className="text-white text-2xl font-normal leading-snug">
                Created NedTech.ai as an AI-powered workforce.
              </p>
            </div>

            {/* Right Arrow */}
            <button className="hidden xl:flex items-center justify-center p-2 text-[#7C3AED] hover:scale-110 transition-transform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 border border-[#7C3AED] rounded-sm bg-transparent"></div>
            <div className="w-2.5 h-2.5 border border-[#7C3AED] rounded-sm bg-transparent"></div>
            <div className="w-2.5 h-2.5 bg-[#7C3AED] rounded-sm shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
            <div className="w-2.5 h-2.5 border border-[#7C3AED] rounded-sm bg-transparent"></div>
            <div className="w-2.5 h-2.5 border border-[#7C3AED] rounded-sm bg-transparent"></div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: OUR MISSION (Purple Gradient Background)
      ========================================================== */}
      <section className="w-full bg-gradient-to-r from-[#1e1b4b] via-[#4338ca] to-[#7c3aed] py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
            
            {/* Left Column: Heading */}
            <div className="w-full md:w-1/3">
              <h2 className="text-white text-3xl md:text-5xl font-normal tracking-wide">
                Our mission
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div className="w-full md:w-2/3">
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
                Our mission is to empower small businesses with affordable AI employees 
                that automate repetitive tasks and Centralise knowledge. With NedTech’s 
                help entrepreneurs save time, reduce effort, and focus on strategy and growth.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FounderAndMission;