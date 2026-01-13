import React, { useState } from 'react';
// Import the asset you exported
import cardWaveGraphic from '../../assets/card-wave.png'; 
import { Link } from 'react-router-dom';

const ProcessSection = () => {
  // 1. STATE: Start at index 1 so "Connect" (Step 02) is the default center card
  const [activeIndex, setActiveIndex] = useState(1);

  // 2. DATA: The steps content
  const processSteps = [
    {
      id: 0,
      number: '01',
      title: 'Pick',
      desc: 'Choose from our selection of AI employees to build your dream team',
    },
    {
      id: 1,
      number: '02',
      title: 'Connect',
      desc: 'Connect your tools and platforms with our simple integration system.',
    },
    {
      id: 2,
      number: '03',
      title: 'Automate',
      desc: 'Sit back as your AI employees handle tasks and boost productivity.',
    }
  ];

  // 3. LOGIC: Handle Circular Navigation
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % processSteps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  // 4. LOGIC: Calculate Left, Center, Right positions
  const getOrderedIndices = () => {
    const prevIndex = (activeIndex - 1 + processSteps.length) % processSteps.length;
    const nextIndex = (activeIndex + 1) % processSteps.length;
    return [prevIndex, activeIndex, nextIndex];
  };

  const orderedIndices = getOrderedIndices();

  return (
    <section className="w-full bg-[#EFEEF6] py-24 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* --- HEADING --- */}
        <h2 className="text-[#0F172A] text-3xl md:text-5xl font-normal text-center mb-20 leading-tight tracking-tight">
          Get Your AI Team Up And <br />
          Running in Minutes
        </h2>

        {/* --- CARDS CONTAINER --- */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 w-full max-w-6xl relative">
          
          {/* LEFT ARROW BUTTON */}
          <button 
            onClick={handlePrev}
            className="hidden xl:flex items-center justify-center w-14 h-14 bg-slate-300 rounded-full shadow-lg hover:scale-110 transition-transform z-20 text-[#7C3AED] cursor-pointer hover:bg-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* DYNAMIC CARD RENDERING */}
          {orderedIndices.map((stepIndex, positionIndex) => {
            const step = processSteps[stepIndex];
            const isCenter = positionIndex === 1; // Middle item is active

            return (
              <div 
                key={step.id}
                onClick={() => setActiveIndex(stepIndex)} // Click card to center it
                className={`
                  transition-all duration-500 ease-in-out cursor-pointer
                  bg-[#05091D] rounded-3xl flex flex-col justify-center relative
                  ${isCenter 
                    ? 'w-full max-w-sm xl:w-[400px] h-[400px] p-10 shadow-2xl z-10 scale-100 xl:scale-110' 
                    : 'w-full max-w-sm xl:w-[320px] h-[320px] p-8 shadow-xl opacity-90 hover:opacity-100 hover:-translate-y-2'
                  }
                `}
              >
                <span className={`text-[#7C3AED] font-medium mb-4 block transition-all duration-300 ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                  {step.number}
                </span>
                
                <h3 className={`text-white font-normal mb-4 transition-all duration-300 ${isCenter ? 'text-4xl' : 'text-3xl'}`}>
                  {step.title}
                </h3>
                
                <p className={`text-slate-300 leading-relaxed relative z-10 transition-all duration-300 ${isCenter ? 'text-base max-w-[260px]' : 'text-sm'}`}>
                  {step.desc}
                </p>

                {/* WAVE GRAPHIC: Only shows on the Center Card */}
                <img 
                  src={cardWaveGraphic} 
                  alt="" 
                  className={`
                    absolute bottom-0 right-0 w-48 h-48 object-cover object-bottom pointer-events-none translate-y-2 translate-x-2
                    transition-opacity duration-500
                    ${isCenter ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              </div>
            );
          })}

          {/* RIGHT ARROW BUTTON */}
          <button 
            onClick={handleNext}
            className="hidden xl:flex items-center justify-center w-14 h-14 bg-slate-300 rounded-full shadow-lg hover:scale-110 transition-transform z-20 text-[#7C3AED] cursor-pointer hover:bg-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* --- CTA BUTTON --- */}
        <div className="mt-20">
          <Link to="/meet">
            <button className="px-8 py-3 rounded-full border border-slate-800 text-[#0F172A] font-medium text-sm hover:bg-slate-200 transition-colors">
              Find out more
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;  