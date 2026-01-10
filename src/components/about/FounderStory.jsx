import React, { useState } from 'react';
// Import the wave graphic for the Founder Story card
import cardWaveGraphic from '../../assets/card-wave.png';

const FounderAndMission = () => {
  // 1. Logic: State to track which slide is currently active (0, 1, or 2)
  const [activeIndex, setActiveIndex] = useState(1); // Start at index 1 (Story 02) to match original design

  // 2. Logic: Data Array for the cards
  const founderStories = [
    {
      id: 0,
      number: '01',
      text: 'Faced small business struggles first-hand.',
      hasWave: false,
    },
    {
      id: 1,
      number: '02',
      text: 'Noticed lack of smart, affordable automation.',
      hasWave: true, // This card has the image
    },
    {
      id: 2,
      number: '03',
      text: 'Created NedTech.ai as an AI-powered workforce.',
      hasWave: false,
    },
  ];

  // 3. Logic: Functions to handle navigation
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % founderStories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + founderStories.length) % founderStories.length);
  };

  // 4. Logic: Determine the order of cards to display (Left, Center, Right)
  // We need to render exactly 3 items: The one before active, the active one, and the one after.
  const getOrderedIndices = () => {
    const prevIndex = (activeIndex - 1 + founderStories.length) % founderStories.length;
    const nextIndex = (activeIndex + 1) % founderStories.length;
    return [prevIndex, activeIndex, nextIndex];
  };

  const orderedIndices = getOrderedIndices();

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
            
            {/* Left Arrow Button */}
            <button 
              onClick={handlePrev}
              className="hidden xl:flex items-center justify-center p-2 text-[#7C3AED] hover:scale-110 transition-transform cursor-pointer z-20"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* DYNAMIC CARD RENDERING */}
            {orderedIndices.map((storyIndex, positionMapIndex) => {
              const story = founderStories[storyIndex];
              const isCenter = positionMapIndex === 1; // The middle item in the array is the Center card

              return (
                <div 
                  key={story.id} // Key ensures React knows which card is which for animation
                  onClick={() => setActiveIndex(storyIndex)} // Allow clicking a side card to make it active
                  className={`
                    transition-all duration-500 ease-in-out cursor-pointer
                    flex flex-col justify-center bg-[#05091D] rounded-3xl relative
                    ${isCenter 
                      ? 'w-full max-w-sm xl:w-[350px] h-[350px] p-10 shadow-2xl z-10 scale-100 xl:scale-105' 
                      : 'w-full max-w-xs xl:w-[280px] h-[280px] p-8 shadow-xl opacity-90 hover:opacity-100 hover:-translate-y-2'
                    }
                  `}
                >
                  <span className={`text-[#7C3AED] font-medium mb-4 block transition-all duration-300 ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                    {story.number}
                  </span>
                  
                  <p className={`text-white font-normal relative z-10 transition-all duration-300 ${isCenter ? 'text-3xl leading-tight' : 'text-2xl leading-snug'}`}>
                    {story.text}
                  </p>

                  {/* Render Wave Graphic ONLY if it is the specific story AND it is in the center */}
                  {story.hasWave && (
                    <img 
                      src={cardWaveGraphic} 
                      alt="Wave" 
                      className={`
                        absolute bottom-0 right-0 w-40 h-40 object-cover object-bottom pointer-events-none translate-y-4 translate-x-4 transition-opacity duration-500
                        ${isCenter ? 'opacity-100' : 'opacity-0'} 
                      `}
                    />
                  )}
                </div>
              );
            })}

            {/* Right Arrow Button */}
            <button 
              onClick={handleNext}
              className="hidden xl:flex items-center justify-center p-2 text-[#7C3AED] hover:scale-110 transition-transform cursor-pointer z-20"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots (Dynamic) */}
          <div className="flex items-center gap-3">
            {founderStories.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  w-2.5 h-2.5 rounded-sm cursor-pointer transition-all duration-300
                  ${activeIndex === idx 
                    ? 'bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.5)] scale-110' 
                    : 'border border-[#7C3AED] bg-transparent hover:bg-[#7C3AED]/20'}
                `}
              ></div>
            ))}
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

      {/* =========================================================
          SECTION 3: FUTURE OF WORK (Clean White Background)
      ========================================================== */}
      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column Text */}
            <div className="flex flex-col gap-6">
              <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed">
                The future of work is evolving faster than most SMEs can realistically keep pace with.
              </p>
              <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed">
                Since the pandemic, skilled talent has become more expensive, harder to find, and 
                significantly slower to hire. Lean teams are stretched thin, growth stalls, and the cost 
                of every new hire carries more risk than ever.
              </p>
            </div>

            {/* Right Column Text */}
            <div className="flex flex-col gap-6">
              <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed">
                The data reflects this pressure clearly. According to the 2024 Employer Skills Survey (NCUB), 
                27% of all UK vacancies are now caused by skills shortages well above pre-pandemic levels 
                (22% in 2017).
              </p>
              <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed">
                The smallest firms feel it most: businesses with 2–4 employees report skills-
                shortage vacancy rates of ~42%. SMEs are disproportionately affected because they lack the 
                resources and reach of larger organizations.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FounderAndMission;