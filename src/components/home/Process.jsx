import React from 'react';
// Import the asset you exported
import cardWaveGraphic from '../../assets/card-wave.png'; 
import { Link } from 'react-router-dom';
const ProcessSection = () => {
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
          <button className="hidden xl:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:scale-110 transition-transform z-10 text-[#7C3AED]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* CARD 01: Pick (Smaller) */}
          <div className="w-full max-w-sm xl:w-[320px] h-[320px] bg-[#05091D] rounded-3xl p-8 flex flex-col justify-center relative shadow-2xl transition-transform hover:-translate-y-2">
            <span className="text-[#7C3AED] text-xl font-medium mb-4 block">01</span>
            <h3 className="text-white text-3xl font-normal mb-4">Pick</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Choose from our selection of AI employees to build your dream team
            </p>
          </div>

          {/* CARD 02: Connect (Larger & Featured) */}
          <div className="w-full max-w-sm xl:w-[400px] h-[400px] bg-[#05091D] rounded-3xl p-10 flex flex-col justify-center relative shadow-2xl scale-100 xl:scale-110 z-10 overflow-hidden">
            <span className="text-[#7C3AED] text-2xl font-medium mb-4 block">02</span>
            <h3 className="text-white text-4xl font-normal mb-6">Connect</h3>
            <p className="text-slate-300 text-base leading-relaxed max-w-[260px] relative z-10">
              Connect your tools and platforms with our simple integration system.
            </p>
            
            {/* Background Wave Graphic */}
            <img 
              src={cardWaveGraphic} 
              alt="" 
              className="absolute bottom-0 right-0 w-48 h-48 object-cover object-bottom opacity-100 pointer-events-none translate-y-2 translate-x-2"
            />
          </div>

          {/* CARD 03: Automate (Smaller) */}
          <div className="w-full max-w-sm xl:w-[320px] h-[320px] bg-[#05091D] rounded-3xl p-8 flex flex-col justify-center relative shadow-2xl transition-transform hover:-translate-y-2">
            <span className="text-[#7C3AED] text-xl font-medium mb-4 block">03</span>
            <h3 className="text-white text-3xl font-normal mb-4">Automate</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sit back as your AI employees handle tasks and boost productivity.
            </p>
          </div>

          {/* RIGHT ARROW BUTTON */}
          <button className="hidden xl:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:scale-110 transition-transform z-10 text-[#7C3AED]">
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