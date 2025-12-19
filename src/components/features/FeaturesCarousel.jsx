import React from 'react';
// IMPORTANT: Export the purple wave graphic shown in the center card from Figma
import CardWaveBg from '../../assets/card-wave.png'; 

const FeaturesCarousel = () => {
  return (
    <section className="py-24 bg-[#F3F4F6] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#0F172A] mb-8">
            Our features
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* --- CAROUSEL ROW --- */}
        {/* Using Flexbox to mimic the specific layout in the screenshot */}
        <div className="flex items-center justify-center gap-4 md:gap-8">

          {/* 1. LEFT ARROW BUTTON */}
          <button className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 text-[#7B5eea] transition-colors flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* 2. LEFT CARD (Smaller / Inactive) */}
          <div className="hidden lg:flex flex-col w-[350px] min-h-[380px] bg-[#0B0518] rounded-[2rem] p-10 text-white relative flex-shrink-0 opacity-90 scale-95 shadow-xl">
            <h3 className="text-2xl font-normal mb-6 leading-tight">
              Security & GDPR Compliance
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your data stays safe with enterprise-grade security and full GDPR compliance, ensuring trust and protection.
            </p>
          </div>

          {/* 3. CENTER CARD (Active / Larger / With Wave) */}
          <div className="w-full max-w-[420px] min-h-[450px] bg-[#0B0518] rounded-[2.5rem] p-10 md:p-12 text-white relative flex-shrink-0 shadow-2xl transform scale-100 z-10 overflow-hidden flex flex-col justify-center">
            
            {/* Background Wave Graphic (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
              <img 
                src={CardWaveBg} 
                alt="Decoration" 
                className="w-full h-full object-contain object-bottom-right opacity-80" 
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">
                Seamless Integrations
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Connect easily with your favorite tools — Email, Calendar, Shopify, Mailchimp, and more — without any complexity.
              </p>
            </div>
          </div>

          {/* 4. RIGHT CARD (Smaller / Inactive) */}
          <div className="hidden lg:flex flex-col w-[350px] min-h-[380px] bg-[#0B0518] rounded-[2rem] p-10 text-white relative flex-shrink-0 opacity-90 scale-95 shadow-xl">
            <h3 className="text-2xl font-normal mb-6 leading-tight">
              Shared Business Brain
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              A centralized knowledge hub that stores data across your business. Your AI team uses it to deliver consistent outputs.
            </p>
          </div>

          {/* 5. RIGHT ARROW BUTTON */}
          <button className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 text-[#7B5eea] transition-colors flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

        </div>
        
      </div>
    </section>
  );
};

export default FeaturesCarousel;